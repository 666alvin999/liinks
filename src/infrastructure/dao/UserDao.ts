import Airtable from "airtable";
import User from "../../domain/bean/User.ts";
import ActionSuccess from "../../domain/bean/ActionSuccess.ts";

export default class UserDao {

	private base: Airtable.Base = new Airtable({apiKey: `${import.meta.env.VITE_AIRTABLE_API_KEY}`}).base(`${import.meta.env.VITE_AIRTABLE_BASE_ID}`);

	public async getUserByUsername(username: string): Promise<User | null> {
		const users = await this.base('Users').select({
			filterByFormula: `({username} = '${username}')`
		}).all();

		if (users.length === 1) {
			return new User(
				users[0].fields.email as string,
				users[0].fields.username as string,
				users[0].fields.password as string,
				users[0].fields.firstName as string,
				users[0].fields.lastName as string,
				users[0].fields.biography as string,
				users[0].fields.backgroundColors as Array<string>
			);
		}

		return null;
	}

	public async create(user: User): Promise<ActionSuccess> {
		const userObject = {
			email: user.getEmail,
			firstName: user.getFirstName,
			lastName: user.getLastName,
			username: user.getUsername,
			password: user.getPassword,
			biography: user.getBiography,
			backgroundColors: user.getBackgroundColors.reduce((color1, color2) => color1 + ";" + color2)
		}

		try {
			await this.base('Users').create(userObject);
			return new ActionSuccess(true);
		} catch (error) {
			return new ActionSuccess(false, "Impossible de créer le compte");
		}
	}

	public async verifyLogin(username: string, password: string): Promise<ActionSuccess> {
		try {
			const user = await this.base('Users').select({
				filterByFormula: `({username} = '${username}')`
			}).all();

			if (user.length === 1 && user[0].fields.password === password) {
				return new ActionSuccess(true);
			}

			return new ActionSuccess(false, "Vos identifiants sont incorrects");
		} catch(error) {
			return new ActionSuccess(false, "Une erreur est survenue lors de l'authentification");
		}
	}

}
import Airtable from "airtable";
import User from "../../domain/bean/User.ts";
import ActionSuccess from "../../domain/bean/ActionSuccess.ts";

export default class UserDao {

	private base: Airtable.Base = new Airtable({apiKey: `${import.meta.env.VITE_AIRTABLE_API_KEY}`}).base(`${import.meta.env.VITE_AIRTABLE_BASE_ID}`);

	public async getUserByUsername(username: string): Promise<User | ActionSuccess> {
		try {
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

			throw new Error();
		} catch (error) {
			return new ActionSuccess(false, "Nous n'avons pas trouvé d'utilisateur, veuillez réessayer")
		}
	}

	public async create(user: User): Promise< User | ActionSuccess> {
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
			const foundUser = await this.getUserByUsername(user.getUsername);
			if (foundUser instanceof ActionSuccess && !foundUser.getSuccess) {
				await this.base('Users').create(userObject);
				return await this.getUserByUsername(user.getUsername);
			} else {
				return new ActionSuccess(false, "Ce nom d'utilisateur est déjà pris")
			}
		} catch (error) {
			return new ActionSuccess(false, "Impossible de créer le compte");
		}
	}

	public async verifyLogin(username: string, password: string): Promise<User | ActionSuccess> {
		try {
			const user: User | ActionSuccess = await this.getUserByUsername(username);

			if (user instanceof User) {
				if (user.getPassword !== password) {
					return new ActionSuccess(false, "Les identifiants sont incorrects");
				}
				return user;
			} else {
				return user
			}
		} catch (error) {
			return new ActionSuccess(false, "Une erreur est survenue lors de l'authentification");
		}
	}

}
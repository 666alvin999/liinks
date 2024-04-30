export default class User {

	private username: string;
	private firstName: string;
	private lastName: string;

	public constructor(username: string, firstName: string, lastName: string | null) {
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName ? lastName : "";
	}

	public get getUsername() {
		return this.username;
	}

	public get getFirstName() {
		return this.firstName;
	}

	public get getLastName() {
		return this.lastName;
	}

	public isSameUser(user: User): boolean {
		return this.username === user.username;
	}

}
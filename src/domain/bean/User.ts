export default class User {

	private email: string;
	private username: string;
	private firstName: string;
	private lastName: string;
	private biography: string;
	private backgroundColors: Array<string>;

	constructor(email: string, username: string, firstName: string, lastName: string, biography: string, backgroundColors: Array<string>) {
		this.email = email;
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.biography = biography;
		this.backgroundColors = backgroundColors;
	}

	public get getEmail(): string {
		return this.email;
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

	public get getBiography() {
		return this.biography;
	}

	public get getBackgroundColors() {
		return this.backgroundColors;
	}

	public isSameUser(user: User): boolean {
		return this.username === user.username;
	}

}
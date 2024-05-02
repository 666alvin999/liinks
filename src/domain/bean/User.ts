export default class User {

	private email: string;
	private username: string;
	private password: string;
	private firstName: string;
	private lastName: string;
	private biography: string;
	private backgroundColors: Array<string>;

	constructor(email: string, username: string, password: string, firstName: string, lastName: string, biography: string, backgroundColors: Array<string>) {
		this.email = email;
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.biography = biography;
		this.backgroundColors = backgroundColors;
	}

	public get getEmail(): string {
		return this.email;
	}

	public get getUsername(): string {
		return this.username;
	}

	public get getPassword(): string {
		return this.password;
	}

	public get getFirstName(): string {
		return this.firstName;
	}

	public get getLastName(): string {
		return this.lastName;
	}

	public get getBiography(): string {
		return this.biography;
	}

	public get getBackgroundColors(): Array<string> {
		return this.backgroundColors;
	}

	public isSameUser(user: User): boolean {
		return this.username === user.username;
	}

}
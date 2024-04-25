class ActionSuccess {

	private success: boolean;
	private errorMessage?: string;

	constructor(success: boolean, errorMessage?: string) {
		this.success = success;
		this.errorMessage = errorMessage;
	}

	get getSuccess(): boolean {
		return this.success;
	}

	get getErrorMessage(): string | undefined {
		return this.errorMessage;
	}

}
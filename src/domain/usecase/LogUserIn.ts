import UserRepository from "../port/UserRepository.ts";
import ActionSuccess from "../bean/ActionSuccess.ts";

export default class LogUserIn {

	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	public async execute(username: string, password: string): Promise<ActionSuccess> {
		return await this.userRepository.logUserIn(username, password);
	}

}
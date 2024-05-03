import UserRepository from "../port/UserRepository.ts";
import ActionSuccess from "../bean/ActionSuccess.ts";
import User from "../bean/User.ts";

export default class LogUserIn {

	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	public async execute(username: string, password: string): Promise<User | ActionSuccess> {
		return await this.userRepository.logUserIn(username, password);
	}

}
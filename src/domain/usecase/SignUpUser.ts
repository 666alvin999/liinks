import UserRepository from "../port/UserRepository.ts";
import ActionSuccess from "../bean/ActionSuccess.ts";
import User from "../bean/User.ts";

export default class SignUpUser {

	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	public async execute(user: User): Promise<User | ActionSuccess> {
		return this.userRepository.create(user);
	}

}
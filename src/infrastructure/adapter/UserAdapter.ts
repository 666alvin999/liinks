import UserRepository from "../../domain/port/UserRepository.ts";
import User from "../../domain/bean/User.ts";
import UserDao from "../dao/UserDao.ts";
import ActionSuccess from "../../domain/bean/ActionSuccess.ts";

export default class UserAdapter implements UserRepository {

	private userDao: UserDao;

	constructor(userDao: UserDao) {
		this.userDao = userDao;
	}

	create(user: User): Promise<ActionSuccess> {
		return this.userDao.create(user);
	}

	public async getUserByUsername(username: string): Promise<User | null> {
		return await this.userDao.getUserByUsername(username);
	}

	public async logUserIn(username: string, password: string): Promise<ActionSuccess> {
		return this.userDao.verifyLogin(username, password);
	}

}
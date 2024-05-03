import User from "../bean/User.ts";
import ActionSuccess from "../bean/ActionSuccess.ts";

export default interface UserRepository {

	create(user: User): Promise<ActionSuccess>;
	getUserByUsername(username: string): Promise<User | null>;
	logUserIn(username: string, password: string): Promise<User | ActionSuccess>;

}
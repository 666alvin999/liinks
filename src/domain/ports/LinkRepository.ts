import Link from "../beans/Link.ts";
import ActionSuccess from "../beans/ActionSuccess.ts";

export default interface LinkRepository {

	create(link: Link, username: string): Promise<ActionSuccess>;
	delete(linkName: string, username: string): ActionSuccess;
	update(link: Link, username: string): ActionSuccess;
	get(linkName: string, username: string): Link;

}
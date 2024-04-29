import Link from "../bean/Link.ts";
import ActionSuccess from "../bean/ActionSuccess.ts";

export default interface LinkRepository {

	create(link: Link, username: string): Promise<ActionSuccess>;
	delete(linkId: string): Promise<ActionSuccess>;
	update(link: Link, username: string): ActionSuccess;
	getAllLinksByUsername(username: string): Promise<Array<Link>>;

}
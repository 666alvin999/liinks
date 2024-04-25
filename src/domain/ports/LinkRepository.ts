interface LinkRepository {

	create(link: Link, username: string): ActionSuccess;
	delete(linkName: string, username: string): ActionSuccess;
	update(link: Link, username: string): ActionSuccess;
	get(linkName: string, username: string): Link;

}
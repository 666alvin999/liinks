class LinkAdapter implements LinkRepository {

	private linkDao: LinkDao;

	constructor(linkDao: LinkDao) {
		this.linkDao = linkDao;
	}

	create(link: Link, username: string): ActionSuccess {
		return this.linkDao.create(link, username);
	}

	delete(linkName: string, username: string): ActionSuccess {
		return new ActionSuccess(true);
	}

	get(linkName: string, username: string): Link {
		return new Link("Other", "", null, null);
	}

	update(link: Link, username: string): ActionSuccess {
		return new ActionSuccess(true);
	}

}
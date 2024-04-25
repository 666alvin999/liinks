import LinkDao from "../dao/LinkDao.ts";

export default class LinkAdapter implements LinkRepository {

	private linkDao: LinkDao;
	private linkMapper: LinkMapper;

	public constructor(linkDao: LinkDao, linkMapper: LinkMapper) {
		this.linkDao = linkDao;
		this.linkMapper = linkMapper;
	}

	public async create(link: Link, username: string): Promise<ActionSuccess> {
		const linkDTO: LinkDTO = this.linkMapper.mapToDTO(link, username);

		return await this.linkDao.create(linkDTO);
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
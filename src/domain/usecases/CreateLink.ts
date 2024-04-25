class CreateLink {

	private linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	public async execute(link: Link, username: string): Promise<ActionSuccess> {
		return await this.linkRepository.create(link, username);
	}

}
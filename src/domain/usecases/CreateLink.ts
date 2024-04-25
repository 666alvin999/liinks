class CreateLink {

	private linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	public execute(link: Link, username: string): ActionSuccess {
		return this.linkRepository.create(link, username);
	}

}
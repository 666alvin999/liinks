class GetLink {

	private linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	public execute(linkName: string, username: string): Link {

		return this.linkRepository.get(linkName, username);
	}

}
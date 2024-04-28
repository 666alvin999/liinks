import Link from "../bean/Link.ts";
import LinkRepository from "../port/LinkRepository.ts";

export default class GetAllLinksByUsername {

	private linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	public async execute(username: string): Promise<Array<Link>> {
		return await this.linkRepository.getAllLinksByUsername(username);
	}

}
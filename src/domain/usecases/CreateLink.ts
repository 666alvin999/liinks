import ActionSuccess from "../beans/ActionSuccess.ts";
import Link from "../beans/Link.ts";
import LinkRepository from "../ports/LinkRepository.ts";

export default class CreateLink {

	private linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	public async execute(link: Link, username: string): Promise<ActionSuccess> {
		return await this.linkRepository.create(link, username);
	}

}
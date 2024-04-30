import ActionSuccess from "../bean/ActionSuccess.ts";
import Link from "../bean/Link.ts";
import LinkRepository from "../port/LinkRepository.ts";

export default class UpdateLink {

	private linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	public async execute({link, username}: { link: Link, username: string }): Promise<ActionSuccess> {
		return this.linkRepository.update(link, username);
	}

}
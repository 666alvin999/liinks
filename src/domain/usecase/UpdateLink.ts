import ActionSuccess from "../bean/ActionSuccess.ts";
import Link from "../bean/Link.ts";
import LinkRepository from "../port/LinkRepository.ts";

class UpdateLink {

	private linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	public execute({link, username}: { link: Link, username: string }): ActionSuccess {
		return this.linkRepository.update(link, username);
	}

}
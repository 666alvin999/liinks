import ActionSuccess from "../beans/ActionSuccess.ts";
import Link from "../beans/Link.ts";
import LinkRepository from "../ports/LinkRepository.ts";

class UpdateLink {

	private linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	public execute({link, username}: { link: Link, username: string }): ActionSuccess {
		return this.linkRepository.update(link, username);
	}

}
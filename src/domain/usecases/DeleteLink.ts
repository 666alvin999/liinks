import ActionSuccess from "../beans/ActionSuccess.ts";
import LinkRepository from "../ports/LinkRepository.ts";

class DeleteLink {

	private linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	public execute(linkName: string, username: string): ActionSuccess {

		return this.linkRepository.delete(linkName, username);
	}

}
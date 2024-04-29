import ActionSuccess from "../bean/ActionSuccess.ts";
import LinkRepository from "../port/LinkRepository.ts";

export default class DeleteLink {

	private linkRepository: LinkRepository;

	constructor(linkRepository: LinkRepository) {
		this.linkRepository = linkRepository;
	}

	public async execute(linkId: string): Promise<ActionSuccess> {
		return this.linkRepository.delete(linkId);
	}

}
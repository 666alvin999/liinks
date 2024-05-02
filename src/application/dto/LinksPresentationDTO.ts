import Link from "../../domain/bean/Link.ts";
import User from "../../domain/bean/User.ts";
import LinkPresentationDTO from "./LinkPresentationDTO.ts";

export default class LinksPresentationDTO {

	private links: Array<LinkPresentationDTO>;
	private linksOwner: User;

	public constructor(links: Array<LinkPresentationDTO>, linksOwner: User) {
		this.links = links;
		this.linksOwner = linksOwner;
	}

	public get getLinks() {
		return this.links;
	}

	public get getLinksOwner() {
		return this.linksOwner;
	}

}
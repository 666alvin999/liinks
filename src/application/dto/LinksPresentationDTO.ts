import Link from "../../domain/bean/Link.ts";
import User from "../../domain/bean/User.ts";

export default class LinksPresentationDTO {

	private links: Array<Link>;
	private linksOwner: User;

	public constructor(links: Array<Link>, linksOwner: User) {
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
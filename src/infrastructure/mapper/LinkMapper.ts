import Link from "../../domain/bean/Link.ts";
import LinkDTO from "../dto/LinkDTO.ts";
import {ServiceUrl} from "../dto/ServiceUrl.ts";

export default class LinkMapper {

	public mapToDTO(link: Link, username: string): LinkDTO {
		let url: string;

		switch (link.getService) {
			case "Twitter":
				url = ServiceUrl.Twitter + link.getSocialMediaUserName;
				break;
			case "Facebook":
				url = ServiceUrl.Facebook + link.getSocialMediaUserName;
				break;
			case "LinkedIn":
				url = ServiceUrl.LinkedIn + link.getSocialMediaUserName;
				break;
			case "Behance":
				url = ServiceUrl.Behance + link.getSocialMediaUserName;
				break;
			case "Instagram":
				url = ServiceUrl.Instagram + link.getSocialMediaUserName;
				break;
			default:
				url = link.getUrl!;
				break;
		}

		return new LinkDTO(link.getId, link.getService, url, link.getLinkName, username)
	}

	public mapToDomain(linkDTO: LinkDTO): Link {
		let socialMediaUserName = "";

		if (linkDTO.getService !== "Other") {
			const splittedUrl = linkDTO.getUrl.split("/");
			socialMediaUserName = splittedUrl[splittedUrl.length - 1];
		}

		const url = linkDTO.getService !== "Other" ?
			null : linkDTO.getUrl;

		return new Link(
			linkDTO.getId,
			linkDTO.getService,
			linkDTO.getLinkName,
			socialMediaUserName,
			url
		);
	}

	public mapAllToDomain(links: LinkDTO[]): Array<Link> {
		return links.map((link: LinkDTO) => {
			return this.mapToDomain(link);
		});
	}

}
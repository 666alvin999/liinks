import Link from "../../domain/bean/Link.ts";
import LinkPresentationDTO from "../dto/LinkPresentationDTO.ts";
import {ServiceUrl} from "../dto/ServiceUrl.ts";
import {Service} from "../../domain/bean/Service.ts";

export default class LinkPresentationMapper {

	private mapToPresentation(link: Link): LinkPresentationDTO {
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

		return new LinkPresentationDTO(
			link.getId,
			url,
			link.getLinkName
		)
	}

	public mapAllToPresentation(links: Array<Link>): Array<LinkPresentationDTO> {
		return links.map(this.mapToPresentation);
	}

	public mapToDomain(link: LinkPresentationDTO): Link {
		let service: Service;

		if (link.getUrl.includes(ServiceUrl.Twitter)) {
			service = Service.Twitter;
		} else if (link.getUrl.includes(ServiceUrl.Facebook)) {
			service = Service.Facebook;
		} else if (link.getUrl.includes(ServiceUrl.LinkedIn)) {
			service = Service.LinkedIn;
		} else if (link.getUrl.includes(ServiceUrl.Instagram)) {
			service = Service.Instagram;
		} else if (link.getUrl.includes(ServiceUrl.Behance)) {
			service = Service.Behance;
		} else {
			service = Service.Other
		}

		let url = "";
		let socialMediaUsername = "";

		if (service !== Service.Other) {
			const splittedUrl = link.getUrl.split("/");
			socialMediaUsername = splittedUrl[splittedUrl.length - 1];
		} else {
			url = link.getUrl;
		}

		return new Link(
			link.getId,
			service,
			link.getLinkName,
			socialMediaUsername,
			url,
		)
	}

}
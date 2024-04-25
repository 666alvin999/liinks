import Link from "../../domain/beans/Link.ts";
import {LinkDTO} from "../dto/LinkDTO.ts";
import {ServiceUrl} from "../dto/ServiceUrl.ts";

export default class LinkMapper {

	public mapToDTO(link: Link, username: string): LinkDTO {
		let url: string = "";

		switch (link.getService) {
			case "Twitter":
				url = ServiceUrl.Twitter + link.getUsername;
				break;
			case "Facebook":
				url = ServiceUrl.Facebook + link.getUsername;
				break;
			case "LinkedIn":
				url = ServiceUrl.LinkedIn + link.getUsername;
				break;
			case "Behance":
				url = ServiceUrl.Behance + link.getUsername;
				break;
			case "Instagram":
				url = ServiceUrl.Instagram + link.getUsername;
				break;
		}

		return {
			service: link.getService,
			url: url,
			linkName: link.getLinkName,
			userName: username,
		}
	}

}
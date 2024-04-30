import LinksPresentationDTO from "../dto/LinksPresentationDTO.ts";
import Link from "../../domain/bean/Link.ts";
import User from "../../domain/bean/User.ts";
import ILinksPresenter from "../../domain/port/ILinksPresenter.ts";

export default class LinksPresenter implements ILinksPresenter<LinksPresentationDTO> {

	public presentAll(links: Array<Link>, user: User | null): LinksPresentationDTO {
		return new LinksPresentationDTO(links, user!);
	}

}
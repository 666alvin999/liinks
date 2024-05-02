import LinksPresentationDTO from "../dto/LinksPresentationDTO.ts";
import Link from "../../domain/bean/Link.ts";
import User from "../../domain/bean/User.ts";
import ILinksPresenter from "../../domain/port/ILinksPresenter.ts";
import LinkPresentationMapper from "../mapper/LinkPresentationMapper.ts";

export default class LinksPresenter implements ILinksPresenter<LinksPresentationDTO> {

	private linkPresentationMapper: LinkPresentationMapper;

	constructor(linkPresentationMapper: LinkPresentationMapper) {
		this.linkPresentationMapper = linkPresentationMapper;
	}

	public presentAll(links: Array<Link>, user: User | null): LinksPresentationDTO {
		const presentedLinks = this.linkPresentationMapper.mapAllToPresentation(links);
		return new LinksPresentationDTO(presentedLinks, user!);
	}

}
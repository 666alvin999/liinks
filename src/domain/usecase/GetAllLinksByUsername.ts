import Link from "../bean/Link.ts";
import LinkRepository from "../port/LinkRepository.ts";
import LinksPresenter from "../../application/presenter/LinksPresenter.ts";
import ILinksPresenter from "../port/ILinksPresenter.ts";
import User from "../bean/User.ts";
import UserRepository from "../port/UserRepository.ts";

export default class GetAllLinksByUsername {

	private linkRepository: LinkRepository;
	private userRepository: UserRepository;

	constructor(linkRepository: LinkRepository, userRepository: UserRepository) {
		this.linkRepository = linkRepository;
		this.userRepository = userRepository;
	}

	public async execute(username: string, linksPresenter: ILinksPresenter<any>) {
		const links: Array<Link> = await this.linkRepository.getAllLinksByUsername(username);
		const user: User | null = await this.userRepository.getUserByUsername(username);

		return linksPresenter.presentAll(links, user);
	}

}
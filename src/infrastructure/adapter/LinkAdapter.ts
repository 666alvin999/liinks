import LinkDao from "../dao/LinkDao.ts";
import LinkMapper from "../mapper/LinkMapper.ts";
import LinkRepository from "../../domain/port/LinkRepository.ts";
import Link from "../../domain/bean/Link.ts";
import ActionSuccess from "../../domain/bean/ActionSuccess.ts";
import LinkDTO from "../dto/LinkDTO.ts";

export default class LinkAdapter implements LinkRepository {

	private linkDao: LinkDao;
	private linkMapper: LinkMapper;

	public constructor(linkDao: LinkDao, linkMapper: LinkMapper) {
		this.linkDao = linkDao;
		this.linkMapper = linkMapper;
	}

	public async create(link: Link, username: string): Promise<ActionSuccess> {
		const linkDTO: LinkDTO = this.linkMapper.mapToDTO(link, username);

		return await this.linkDao.create(linkDTO);
	}

	public async update(link: Link, username: string): Promise<ActionSuccess> {
		const linkDTO: LinkDTO = this.linkMapper.mapToDTO(link, username);
		return this.linkDao.update(linkDTO);
	}

	public async delete(linkId: string): Promise<ActionSuccess> {
		return this.linkDao.delete(linkId);
	}

	public async getAllLinksByUsername(username: string): Promise<Array<Link>> {
		const linkDTOs: Array<LinkDTO> = await this.linkDao.getAllLinksByUsername(username);
		return this.linkMapper.mapAllToDomain(linkDTOs);
	}

}
import LinkDao from "../infrastructure/dao/LinkDao.ts";
import LinkAdapter from "../infrastructure/adapter/LinkAdapter.ts";
import LinkMapper from "../infrastructure/mapper/LinkMapper.ts";
import CreateLink from "../domain/usecase/CreateLink.ts";
import LinkRepository from "../domain/port/LinkRepository.ts";
import GetAllLinksByUsername from "../domain/usecase/GetAllLinksByUsername.ts";

const linkDAO: LinkDao = new LinkDao();
const linkMapper: LinkMapper = new LinkMapper();
const linkRepository: LinkRepository = new LinkAdapter(linkDAO, linkMapper);
const createLink: CreateLink = new CreateLink(linkRepository);
const getAllLinksByUsername = new GetAllLinksByUsername(linkRepository);

export {createLink, getAllLinksByUsername};
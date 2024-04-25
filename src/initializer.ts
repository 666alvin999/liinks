import LinkDao from "./infrastructure/dao/LinkDao.ts";
import LinkAdapter from "./infrastructure/adapter/LinkAdapter.ts";
import LinkMapper from "./infrastructure/mapper/LinkMapper.ts";
import CreateLink from "./domain/usecases/CreateLink.ts";
import LinkRepository from "./domain/ports/LinkRepository.ts";

const linkDAO: LinkDao = new LinkDao();
const linkMapper: LinkMapper = new LinkMapper();
const linkRepository: LinkRepository = new LinkAdapter(linkDAO, linkMapper);
const createLink: CreateLink = new CreateLink(linkRepository);

export {createLink};
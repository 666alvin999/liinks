import LinkDao from "../infrastructure/dao/LinkDao.ts";
import LinkAdapter from "../infrastructure/adapter/LinkAdapter.ts";
import LinkMapper from "../infrastructure/mapper/LinkMapper.ts";
import CreateLink from "../domain/usecase/CreateLink.ts";
import LinkRepository from "../domain/port/LinkRepository.ts";
import GetAllLinksByUsername from "../domain/usecase/GetAllLinksByUsername.ts";
import DeleteLink from "../domain/usecase/DeleteLink.ts";
import LinksPresenter from "./presenter/LinksPresenter.ts";
import UserRepository from "../domain/port/UserRepository.ts";
import UserAdapter from "../infrastructure/adapter/UserAdapter.ts";
import UserDao from "../infrastructure/dao/UserDao.ts";
import {Update} from "vite";
import UpdateLink from "../domain/usecase/UpdateLink.ts";

const linkDao: LinkDao = new LinkDao();
const userDao: UserDao = new UserDao();
const linkMapper: LinkMapper = new LinkMapper();
const linkRepository: LinkRepository = new LinkAdapter(linkDao, linkMapper);
const userRepository: UserRepository = new UserAdapter(userDao);
const linksPresenter: LinksPresenter = new LinksPresenter();
const createLink: CreateLink = new CreateLink(linkRepository);
const updateLink: UpdateLink = new UpdateLink(linkRepository);
const deleteLink: DeleteLink = new DeleteLink(linkRepository);
const getAllLinksByUsername = new GetAllLinksByUsername(linkRepository, userRepository);

export {createLink, getAllLinksByUsername, deleteLink, linksPresenter};
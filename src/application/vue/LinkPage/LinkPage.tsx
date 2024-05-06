import {Check, PlusCircle, Xmark, XrayView} from "iconoir-react";
import LinkPresentationDTO from "../../dto/LinkPresentationDTO.ts";
import Liiink from "./components/Liiink.tsx";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {FormEvent, useEffect, useState} from "react";
import LinksPresentationDTO from "../../dto/LinksPresentationDTO.ts";
import {createLink, getAllLinksByUsername, linksPresenter} from "../../initializer.ts";
import User from "../../../domain/bean/User.ts";
import SearchBar from "../component/SearchBar.tsx";
import Input from "../component/Input.tsx";
import Link from "../../../domain/bean/Link.ts"
import {Service} from "../../../domain/bean/Service.ts";
import toast, {Toaster} from "react-hot-toast";

const LinkPage = () => {

	const navigate = useNavigate();
	const locationStateUser = useLocation().state?.currentUser;

	const currentUser: User | null = locationStateUser != null ? new User(
		locationStateUser.email,
		locationStateUser.username,
		locationStateUser.password,
		locationStateUser.firstName,
		locationStateUser.lastName,
		locationStateUser.biography,
		locationStateUser.backgroundColors,
	) : null;

	const {username} = useParams();

	document.title = `Liiinks - ${username}`

	const [reloadLinks, setReloadLinks] = useState<boolean>(false);
	const [links, setLinks] = useState<LinksPresentationDTO>();

	const [creatingNewLink, setCreatingNewLink] = useState<boolean>(false);

	const [createLinkName, setCreateLinkName] = useState<string>("");
	const [createLinkService, setCreateLinkService] = useState<Service>(Service.Other);
	const [createLinkSocialMediaUserName, setCreateLinkSocialMediaUserName] = useState<string | null>(null);
	const [createLinkUrl, setCreateLinkUrl] = useState<string | null>(null);

	const handleNewLinkSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.stopPropagation();
		event.preventDefault();

		const newLink: Link = new Link("", createLinkService, createLinkName, createLinkSocialMediaUserName, createLinkUrl);
		console.log(newLink);
		const result = await createLink.execute(newLink, currentUser!.getUsername);

		if (result.getSuccess) {
			location.reload();
		} else {
			toast(result.getErrorMessage!);
		}
	}

	useEffect(() => {
		const getLinks = async () => {
			const links: LinksPresentationDTO = await getAllLinksByUsername.execute(username!, linksPresenter);
			setLinks(links);
		}

		getLinks();
	}, [reloadLinks]);

	const handleRedirectButton = () => {
		navigate(`/${currentUser!.getUsername}`, {
			state: {
				currentUser: currentUser
			}
		});

		location.reload();
	}

	return (
		<>
			<div
				className="font-inter tracking-tighter leading-normal pt-8 flex flex-col justify-center items-center gap-16 lg:flex-col lg:pb-3 lg:p-12 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
				<Toaster />

				<div className="w-96">
					<SearchBar currentUser={currentUser}></SearchBar>
				</div>

				<main className="min-h-screen w-full flex flex-col justify-start items-center gap-8">
					<div className="flex flex-col w-10/12 lg:w-[800px] p-6 gap-8">
						<div className="flex flex-col justify-center items-center">
							<div className="aspect-square w-40 max-w-40 bg-red-600 mb-8">
								<img className="object-cover w-full h-full" src="https://via.placeholder.com/150" alt="logo" />
							</div>

							<h1 className="text-white !leading-tight text-xl lg:text-2xl font-extrabold leading-heading text-center mb-1">
								{links?.getLinksOwner.getFirstName} {links?.getLinksOwner.getLastName}
							</h1>

							<h2 className="text-white !leading-tight text-l lg:text-xl font-extrabold leading-heading text-center mb-1">
								{links?.getLinksOwner.getUsername}
							</h2>

							<p className="text-white text-center px-10">{links?.getLinksOwner.getBiography}</p>
						</div>

						<div className="flex flex-col justify-center items-center gap-2">
							{
								!creatingNewLink && links?.getLinks.map((link: LinkPresentationDTO) =>
									<Liiink setReloadLinks={setReloadLinks} username={username!} isAdmin={links?.getLinksOwner.isSameUser(currentUser)} link={link} />
								)
							}

							{
								!creatingNewLink && links?.getLinksOwner.isSameUser(currentUser) &&
								<div className="w-[100%] mt-4 flex justify-center items-center">
									<div className="w-96 flex justify-center items-center">
										<button
											className="text-xl lg:text-2xl font-medium bg-white px-4 h-12 text-black inline-flex justify-center items-center gap-2 rounded-full drop-shadow-lg"
											type="button" onClick={() => setCreatingNewLink(true)}>
											<PlusCircle />
											<span className="block text-sm font-semibold">
                                                Créer un nouveau Liiink
                                            </span>
										</button>
									</div>
								</div>
							}

							{
								creatingNewLink &&
								<>
									<form className="w-[100%] flex flex-col justify-center items-center gap-2" onSubmit={handleNewLinkSubmit}>
										<div className="w-[100%] flex flex-row justify-center items-center gap-2">
											<Input type="text" id="linkNameInput" label="Nom du liiink" onChange={(e) => setCreateLinkName(e.target.value)} value={createLinkName} required={true} />

											<select
												className="h-12 flex rounded-md bg-neutral-100 border-solid border-2 overflow-hidde w-full border-neutral-100 transition duration-75 ease-out hover:border-neutral-200focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2"
												onChange={(e) => setCreateLinkService(e.target.value as Service)}
												value={createLinkService}>
												<option value={Service.Facebook}>{Service.Facebook}</option>
												<option value={Service.Instagram}>{Service.Instagram}</option>
												<option value={Service.Twitter}>{Service.Twitter}</option>
												<option value={Service.LinkedIn}>{Service.LinkedIn}</option>
												<option value={Service.Behance}>{Service.Behance}</option>
												<option value={Service.Other} selected>{Service.Other}</option>
											</select>
										</div>

										{
											createLinkService !== Service.Other &&
											<Input type="text" id="socialMediaUserName" label="Nom d'utilisateur sur le réseau social" onChange={(e) => setCreateLinkSocialMediaUserName(e.target.value)} value={createLinkSocialMediaUserName ? createLinkSocialMediaUserName : ""} required={true} />
										}

										{
											createLinkService === Service.Other &&
											<Input type="text" id="linkUrl" label="URL de votre site web" onChange={(e) => setCreateLinkUrl(e.target.value)} value={createLinkUrl ? createLinkUrl : ""} required={true} />
										}

										<div className="w-[100%] mt-4 flex justify-center items-center gap-2">
											<div className="w-96 flex justify-end items-center">
												<button
													className="text-xl lg:text-2xl font-medium bg-white px-4 h-12 text-black inline-flex justify-center items-center gap-2 rounded-full drop-shadow-lg"
													type="submit">
													<Check />
													<span className="block text-sm font-semibold">
                                                    Créer le Liiink
                                                </span>
												</button>
											</div>

											<div className="w-96 flex justify-start items-center">
												<button
													className="text-xl lg:text-2xl font-medium bg-white px-4 h-12 text-black inline-flex justify-center items-center gap-2 rounded-full drop-shadow-lg"
													type="button" onClick={() => setCreatingNewLink(false)}>
													<Xmark />
													<span className="block text-sm font-semibold">
                                                    Annuler la création
                                                </span>
												</button>
											</div>
										</div>
									</form>
								</>
							}
						</div>
					</div>

					{
						currentUser === null && !creatingNewLink &&
						<div className="w-full flex justify-center items-center z-10">
							<a className="text-xl lg:text-2xl font-medium bg-white px-4 h-12 text-black inline-flex justify-center items-center gap-2 rounded-full drop-shadow-lg hover:cursor-pointer" href="/signup">
								<XrayView />
								<span className="block text-sm font-semibold">Créer tes propres Liiinks</span>
							</a>
						</div>
					}
					{
						currentUser !== null && !creatingNewLink &&
						<div className="w-full flex justify-center items-center z-10">
							<a className="text-xl lg:text-2xl font-medium bg-white px-4 h-12 text-black inline-flex justify-center items-center gap-2 rounded-full drop-shadow-lg hover:cursor-pointer" onClick={handleRedirectButton}>
								<XrayView />
								<span className="block text-sm font-semibold">Retourner à tes Liiinks</span>
							</a>
						</div>
					}
				</main>
			</div>
		</>
	);

}

export default LinkPage;
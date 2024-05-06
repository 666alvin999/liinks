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
import Link from "../../../domain/bean/Link.ts";
import {Service} from "../../../domain/bean/Service.ts";
import toast, {Toaster} from "react-hot-toast";

const LinkPage = () => {

	const navigate = useNavigate();
	const locationStateUser = useLocation().state?.currentUser;

	const currentUser: User | null =
		locationStateUser != null ?
			new User(
				locationStateUser.email,
				locationStateUser.username,
				locationStateUser.password,
				locationStateUser.firstName,
				locationStateUser.lastName,
				locationStateUser.biography,
				locationStateUser.backgroundColors
			)
			: null;

	const {username} = useParams();

	document.title = `Liiinks - ${username}`;

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

		const newLink: Link = new Link(
			"",
			createLinkService,
			createLinkName,
			createLinkSocialMediaUserName,
			createLinkUrl
		);

		const result = await createLink.execute(newLink, currentUser!.getUsername);

		if (result.getSuccess) {
			location.reload();
		} else {
			toast(result.getErrorMessage!);
		}
	};

	useEffect(() => {
		const getLinks = async () => {
			const links: LinksPresentationDTO = await getAllLinksByUsername.execute(
				username!,
				linksPresenter
			);
			setLinks(links);
			console.log(links);
		};

		getLinks();
	}, [reloadLinks]);

	const handleRedirectButton = () => {
		navigate(`/${currentUser!.getUsername}`, {
			state: {
				currentUser: currentUser
			}
		});

		location.reload();
	};

	return (
		<>
			<div
				className="flex flex-col items-center justify-center gap-8 bg-gray-900 font-inter leading-normal tracking-tighter lg:px-12 lg:py-3"
				style={{
					backgroundImage: `linear-gradient(${links?.getLinksOwner.getBackgroundColors})`
				}}
			>
				<Toaster
					position="top-right"
					reverseOrder={false}
				/>

				<header className="flex w-11/12 px-4 pt-6 lg:w-[800px]">
					<SearchBar currentUser={currentUser}></SearchBar>
				</header>

				<main className="flex min-h-screen w-full flex-col items-center justify-start gap-8 pb-20">
					<div className="flex w-11/12 flex-col gap-8 p-6 px-4 lg:w-[800px]">
						<div className="flex flex-col items-center justify-center">
							<div className="mb-8 aspect-square w-40 max-w-40 bg-red-600">
								<img
									className="h-full w-full object-cover"
									src="https://via.placeholder.com/150"
									alt="logo"
								/>
							</div>

							<h1 className="leading-heading mb-1 text-center text-2xl font-extrabold !leading-tight text-white lg:text-2xl">
								{links?.getLinksOwner.getFirstName}{" "}
								{links?.getLinksOwner.getLastName}
							</h1>

							<h2 className="text-l leading-heading mb-3 text-center font-extrabold !leading-tight text-white lg:text-xl">
								{links?.getLinksOwner.getUsername}
							</h2>

							<p className="px-11 text-center text-white">
								{links?.getLinksOwner.getBiography}
							</p>
						</div>

						<div className="flex flex-col items-center justify-center gap-2">
							{!creatingNewLink &&
								links?.getLinks.map((link: LinkPresentationDTO) => (
									<Liiink
										setReloadLinks={setReloadLinks}
										username={username!}
										isAdmin={links?.getLinksOwner.isSameUser(currentUser)}
										link={link}
									/>
								))}

							{!creatingNewLink &&
								links?.getLinksOwner.isSameUser(currentUser) && (
									<div className="mt-4 flex w-[100%] items-center justify-center">
										<div className="flex w-96 items-center justify-center">
											<button
												className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-4 text-xl font-medium text-black drop-shadow-lg hover:border-neutral-200 hover:bg-neutral-100 focus-visible:outline-neutral-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 lg:text-2xl"
												type="button"
												onClick={() => setCreatingNewLink(true)}
											>
												<PlusCircle />
												<span className="block text-sm font-semibold">
                          Créer un nouveau Liiink
                        </span>
											</button>
										</div>
									</div>
								)}

							{creatingNewLink && (
								<>
									<form
										className="flex w-[100%] flex-col items-center justify-center gap-2"
										onSubmit={handleNewLinkSubmit}
									>
										<div className="flex w-[100%] flex-row items-center justify-center gap-2">
											<Input
												type="text"
												id="linkNameInput"
												label="Nom du liiink"
												onChange={(e) => setCreateLinkName(e.target.value)}
												value={createLinkName}
												required={true}
											/>

											<select
												className="overflow-hidde hover:border-neutral-200focus-within:ring-2 flex h-12 w-full rounded-md border-2 border-solid border-neutral-100 bg-neutral-100 transition duration-75 ease-out focus-within:ring-black focus-within:ring-offset-2"
												onChange={(e) =>
													setCreateLinkService(e.target.value as Service)
												}
												value={createLinkService}
											>
												<option value={Service.Facebook}>
													{Service.Facebook}
												</option>
												<option value={Service.Instagram}>
													{Service.Instagram}
												</option>
												<option value={Service.Twitter}>
													{Service.Twitter}
												</option>
												<option value={Service.LinkedIn}>
													{Service.LinkedIn}
												</option>
												<option value={Service.Behance}>
													{Service.Behance}
												</option>
												<option
													value={Service.Other}
													selected
												>
													{Service.Other}
												</option>
											</select>
										</div>

										{createLinkService !== Service.Other && (
											<Input
												type="text"
												id="socialMediaUserName"
												label="Nom d'utilisateur sur le réseau social"
												onChange={(e) =>
													setCreateLinkSocialMediaUserName(e.target.value)
												}
												value={
													createLinkSocialMediaUserName
														? createLinkSocialMediaUserName
														: ""
												}
												required={true}
											/>
										)}

										{createLinkService === Service.Other && (
											<Input
												type="text"
												id="linkUrl"
												label="URL de votre site web"
												onChange={(e) => setCreateLinkUrl(e.target.value)}
												value={createLinkUrl ? createLinkUrl : ""}
												required={true}
											/>
										)}

										<div className="mt-4 flex w-[100%] items-center justify-center gap-2">
											<div className="flex w-96 items-center justify-end">
												<button
													className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-4 text-xl font-medium text-black drop-shadow-lg lg:text-2xl"
													type="submit"
												>
													<Check className={"text-green-600"} />
													<span className="block text-sm font-semibold">
                            Créer le Liiink
                          </span>
												</button>
											</div>

											<div className="flex w-96 items-center justify-start">
												<button
													className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-4 text-xl font-medium text-black drop-shadow-lg lg:text-2xl"
													type="button"
													onClick={() => setCreatingNewLink(false)}
												>
													<Xmark className={"text-red-600"} />
													<span className="block text-sm font-semibold">
                            Annuler la création
                          </span>
												</button>
											</div>
										</div>
									</form>
								</>
							)}
						</div>
					</div>
				</main>

				{currentUser === null && !creatingNewLink && (
					<div className="fixed bottom-6 z-10 flex w-full items-center justify-center">
						<a
							className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-4 text-xl font-medium text-black drop-shadow-lg hover:cursor-pointer lg:text-2xl"
							href="/signup"
						>
							<XrayView />
							<span className="block text-sm font-semibold">
                Créer tes propres Liiinks
              </span>
						</a>
					</div>
				)}
				{currentUser !== null && !creatingNewLink && (
					<div className="fixed bottom-6 z-10 flex w-full items-center justify-center">
						<a
							className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-4 text-xl font-medium text-black drop-shadow-lg hover:cursor-pointer lg:text-2xl"
							onClick={handleRedirectButton}
						>
							<XrayView />
							<span className="block text-sm font-semibold">
                Retourner à tes Liiinks
              </span>
						</a>
					</div>
				)}
			</div>
		</>
	);

};

export default LinkPage;

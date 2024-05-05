import LinkPresentationDTO from "../../../dto/LinkPresentationDTO.ts";
import {deleteLink, linkPresentationMapper, updateLink} from "../../../initializer.ts";
import {useState} from "react";
import {Behance, Facebook, Instagram, Linkedin, Twitter, XrayView} from "iconoir-react";
import {ServiceUrl} from "../../../dto/ServiceUrl.ts";

interface ButtonLinksProps {
	setReloadLinks: (reload: boolean) => void;
	username: string;
	isAdmin: boolean;
	link: LinkPresentationDTO;
}

const Link = ({setReloadLinks, username, isAdmin, link}: ButtonLinksProps) => {

	const [isEditing, setEditing] = useState(false);
	const [linkName, setLinkName] = useState(link.getLinkName);

	const deleteFromDB = async () => {
		await deleteLink.execute(link.getId);
		location.reload();
	}

	const editLink = () => {
		if (isEditing && linkName !== link.getLinkName) {
			updateInDB();
		}

		setEditing(!isEditing);
	}

	const updateInDB = async () => {
		const newLink = new LinkPresentationDTO(
			link.getId,
			link.getUrl,
			linkName
		);

		const actionSuccess = await updateLink.execute(linkPresentationMapper.mapToDomain(newLink), username);

		if (actionSuccess.getSuccess) {
			setReloadLinks(true);
			setReloadLinks(false);
		}
	}

	return (
		<div className="w-[100%] flex gap-8">
			{
				!isEditing &&
				<a href="#" className="bg-white border-solid border-2 border-neutral-100 rounded-full px-5 py-4 w-full flex items-center hover:bg-neutral-100 hover:border-neutral-200 focus-visible:ring-2 focus-visible:outline-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-black antialiased">
					{
						link.getUrl.includes(ServiceUrl.Facebook) &&
						<Facebook className="absolute" />
					}
					{
						link.getUrl.includes(ServiceUrl.Twitter) &&
						<Twitter className="absolute" />
					}
					{
						link.getUrl.includes(ServiceUrl.Instagram) &&
						<Instagram className="absolute" />
					}
					{
						link.getUrl.includes(ServiceUrl.LinkedIn) &&
						<Linkedin className="absolute" />
					}
					{
						link.getUrl.includes(ServiceUrl.Behance) &&
						<Behance className="absolute" />
					}
					{
						!link.getUrl.includes(ServiceUrl.LinkedIn) && !link.getUrl.includes(ServiceUrl.Facebook) && !link.getUrl.includes(ServiceUrl.Twitter) && !link.getUrl.includes(ServiceUrl.Instagram) && !link.getUrl.includes(ServiceUrl.Behance) &&
						<XrayView className="absolute" />
					}
					<p className="text-black text-lg px-5 font-semibold text-center w-full">{linkName}</p>
				</a>
			}

			{
				isEditing &&
				<input type="text" className="text-black" value={linkName} onClick={e => e.stopPropagation()} onChange={(e) => setLinkName(e.target.value)} />
			}

			{
				isAdmin &&
				<>
					<button className="border-2 border-black p-4" onClick={editLink}>
						{
							isEditing &&
							"Valider"
						}
						{
							!isEditing &&
							"Modifier"
						}
					</button>
					<button className="border-2 border-black p-4" onClick={deleteFromDB}>Supprimer</button>
				</>
			}
		</div>
	);
}

export default Link
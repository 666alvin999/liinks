import LinkPresentationDTO from "../dto/LinkPresentationDTO.ts";
import {deleteLink, linkPresentationMapper, updateLink} from "../initializer.ts";
import {useState} from "react";
import {XrayView} from "iconoir-react";

interface ButtonLinksProps {
	setReloadLinks: (reload: boolean) => void;
	username: string;
	isAdmin: boolean;
	link: LinkPresentationDTO;
	children?: React.ReactNode;
	position?: "left" | "right";
}

const ButtonLink = ({setReloadLinks, username, isAdmin, link, children, position}: ButtonLinksProps) => {

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
		<div className="w-[100%] flex gap-16">
			{
				!isEditing &&
				<a href="#" className="bg-white border-solid border-2 border-neutral-100 rounded-full px-5 py-4 w-full flex items-center hover:bg-neutral-100 hover:border-neutral-200 focus-visible:ring-2 focus-visible:outline-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-black antialiased">
					<XrayView className="absolute" />
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

export default ButtonLink
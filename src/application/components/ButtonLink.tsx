import LinkPresentationDTO from "../dto/LinkPresentationDTO.ts";
import {deleteLink, linkPresentationMapper, updateLink} from "../initializer.ts";
import {useState} from "react";

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
				<a href={link.getUrl} className="inline-flex justify-center items-center gap-2 relative transition duration-75 ease-out w-full h-12 px-4 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-purple-600 text-white mt-8 hover:bg-purple-800 active:bg-purple-800">
					{position === "left" ? children : ""}
					<span className="block font-semibold text-md">{link.getLinkName}</span>

					{position === "right" ? children : ""}
				</a>
			}

			{
				isEditing &&
				<input type="text" className="text-black" value={linkName} onClick={e => e.stopPropagation()}
					   onChange={(e) => setLinkName(e.target.value)} />
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
import LinkPresentationDTO from "../../../dto/LinkPresentationDTO.ts";
import {deleteLink, linkPresentationMapper, updateLink} from "../../../initializer.ts";
import {useState} from "react";
import {
	Behance,
	Check,
	EditPencil,
	Facebook,
	Instagram,
	Linkedin,
	Trash,
	Twitter,
	Xmark,
	XrayView
} from "iconoir-react";
import {ServiceUrl} from "../../../dto/ServiceUrl.ts";
import ActionButton from "../../component/ActionButton.tsx";

interface ButtonLinksProps {
	setReloadLinks: (reload: boolean) => void;
	username: string;
	isAdmin: boolean;
	link: LinkPresentationDTO;
}

const Liiink = ({setReloadLinks, username, isAdmin, link}: ButtonLinksProps) => {

	const [isEditing, setEditing] = useState(false);
	const [linkName, setLinkName] = useState(link.getLinkName);

	const deleteFromDB = async () => {
		await deleteLink.execute(link.getId);
		location.reload();
	}

	const editLink = () => {
		if (isEditing && linkName !== link.getLinkName) {
			updateInDB();
		} else {
			setLinkName(link.getLinkName);
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
				<a href={link.getUrl} className="bg-white border-solid border-2 border-neutral-100 rounded-full px-5 py-4 w-full flex items-center hover:bg-neutral-100 hover:border-neutral-200 focus-visible:ring-2 focus-visible:outline-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-black antialiased">
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
				<input type="text" className="w-full px-5 py-4 bg-white rounded-full border-2 border-solid border-neutral-100 flex items-center hover:bg-neutral-100 hover:border-neutral-200 focus-visible:ring-2 focus-visible:outline-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-black antialiased" value={linkName} onClick={e => e.stopPropagation()} onChange={(e) => setLinkName(e.target.value)} />
			}

			{
				isAdmin &&
				<>
					{
						isEditing &&
						<>
							{
								linkName !== link.getLinkName &&
								<ActionButton buttonChild={<Check />} type="button" onClick={editLink} />
							}
							<ActionButton buttonChild={<Xmark />} type="button" onClick={editLink} />
						</>
					}

					{
						!isEditing &&
						<>
							<ActionButton buttonChild={<EditPencil />} type="button" onClick={() => setEditing(!isEditing)} />
							<ActionButton buttonChild={<Trash />} type="button" onClick={deleteFromDB} />
						</>
					}
				</>
			}
		</div>
	);

}

export default Liiink
import LinkPresentationDTO from "../../../dto/LinkPresentationDTO.ts";
import {deleteLink, linkPresentationMapper, updateLink} from "../../../initializer.ts";
import {useState} from "react";
import {Behance, Check, EditPencil, Facebook, Instagram, Linkedin, Trash, Twitter, Xmark, XrayView} from "iconoir-react";
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
	};

	const editLink = async () => {
		const newLink = new LinkPresentationDTO(link.getId, link.getUrl, linkName);

		const actionSuccess = await updateLink.execute(
			linkPresentationMapper.mapToDomain(newLink),
			username
		);

		if (actionSuccess.getSuccess) {
			setReloadLinks(true);
			setReloadLinks(false);
		}

		setEditing(false);
	};

	const cancelEditLink = () => {
		setLinkName(link.getLinkName);
		setEditing(false);
	}

	return (
		<div className="flex w-full flex-col items-center justify-center">
			{!isEditing && (
				<a
					href={link.getUrl}
					className="relative flex w-full items-center rounded-full border-2 border-solid border-neutral-100 bg-white px-5 py-4 antialiased hover:border-neutral-200 hover:bg-neutral-100 focus-visible:outline-neutral-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
				>
					{link.getUrl.includes(ServiceUrl.Facebook) && (
						<Facebook className="absolute" />
					)}

					{link.getUrl.includes(ServiceUrl.Twitter) && (
						<Twitter className="absolute" />
					)}

					{link.getUrl.includes(ServiceUrl.Instagram) && (
						<Instagram className="absolute" />
					)}

					{link.getUrl.includes(ServiceUrl.LinkedIn) && (
						<Linkedin className="absolute" />
					)}

					{link.getUrl.includes(ServiceUrl.Behance) && (
						<Behance className="absolute" />
					)}

					{!link.getUrl.includes(ServiceUrl.LinkedIn) &&
						!link.getUrl.includes(ServiceUrl.Facebook) &&
						!link.getUrl.includes(ServiceUrl.Twitter) &&
						!link.getUrl.includes(ServiceUrl.Instagram) &&
						!link.getUrl.includes(ServiceUrl.Behance) && (
							<XrayView className="absolute" />
						)
					}

					<p className="w-full px-8 text-center text-lg font-semibold text-black">
						{linkName}
					</p>
				</a>
			)}

			{isEditing && (
				<div className="mb-4 mt-2 flex w-full justify-center gap-2">
					<input
						type="text"
						className="flex w-full items-center rounded-full border-2 border-solid border-neutral-100 bg-white px-5 py-4 antialiased hover:border-neutral-200 hover:bg-neutral-100 focus-visible:outline-neutral-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
						value={linkName}
						onClick={(e) => e.stopPropagation()}
						onChange={(e) => setLinkName(e.target.value)}
					/>
				</div>
			)}

			{isAdmin && (
				<>
					{isEditing && (
						<>
							<div className="mb-4 mt-2 flex w-full justify-center gap-2">
								{linkName !== link.getLinkName && (
									<ActionButton
										buttonChild={<Check className={"text-green-600"} />}
										type="button"
										onClick={editLink}
										className="!rounded-full"
									/>
								)}

								<ActionButton
									buttonChild={<Xmark className={"text-red-600"} />}
									type="button"
									onClick={cancelEditLink}
									className="!rounded-full"
								/>
							</div>
						</>
					)}

					{!isEditing && (
						<>
							<div className="mb-4 mt-2 flex w-full justify-center gap-2">
								<ActionButton
									buttonChild={<EditPencil />}
									type="button"
									onClick={() => setEditing(!isEditing)}
									className="w-full !rounded-full"
								/>

								<ActionButton
									buttonChild={<Trash className={"text-red-600"} />}
									type="button"
									onClick={deleteFromDB}
									className="!rounded-full"
								/>
							</div>
						</>
					)}
				</>
			)}
		</div>
	);

};

export default Liiink;

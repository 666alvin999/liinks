import {useEffect, useState} from "react";
import {getAllLinksByUsername, linksPresenter} from "../initializer.ts";
import {Service} from "../../domain/bean/Service.ts";
import LinksPresentationDTO from "../dto/LinksPresentationDTO.ts";
import {useLocation, useParams} from "react-router-dom";
import Link from "../../domain/bean/Link.ts";

const App = () => {

	const { username } = useParams();
	const { loginUsername } = useLocation().state;

	const [linkName, setLinkName] = useState("");
	const [service, setService] = useState<Service>(Service.Other);

	const [links, setLinks] = useState<LinksPresentationDTO>();

	useEffect(() => {
		const getLinks = async () => {
			const links: LinksPresentationDTO = await getAllLinksByUsername.execute(username!, linksPresenter);
			setLinks(links);
		}

		getLinks();
	}, []);

	return (
		<>
			{
				links?.getLinks.map((link: Link) =>
					<div className="border-2 border-black p-4">
						{link.getLinkName} {link.getService} {link.getSocialMediaUserName}
						{
							loginUsername === username &&
							<>
								<button>Modifier</button>
								<button>Supprimer</button>
							</>
						}
					</div>
				)
			}
		</>
	);
}

export default App

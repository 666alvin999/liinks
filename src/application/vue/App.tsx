import {useEffect, useState} from "react";
import {getAllLinksByUsername, linksPresenter} from "../initializer.ts";
import LinksPresentationDTO from "../dto/LinksPresentationDTO.ts";
import {useLocation, useParams} from "react-router-dom";
import ButtonLink from "../components/ButtonLink.tsx";
import LinkPresentationDTO from "../dto/LinkPresentationDTO.ts";

const App = () => {

	const {username} = useParams();
	const {loginUsername} = useLocation().state;
	const [reloadLinks, setReloadLinks] = useState<boolean>(false);

	const [links, setLinks] = useState<LinksPresentationDTO>();

	useEffect(() => {
		const getLinks = async () => {
			const links: LinksPresentationDTO = await getAllLinksByUsername.execute(username!, linksPresenter);
			setLinks(links);
		}

		getLinks();
	}, [reloadLinks]);

	return (
		<>
			{
				links?.getLinks.map((link: LinkPresentationDTO) =>
					<ButtonLink setReloadLinks={setReloadLinks} username={username!} isAdmin={username === loginUsername} link={link} />
				)
			}
		</>
	);
}

export default App

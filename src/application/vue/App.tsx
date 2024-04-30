import {useEffect, useState} from "react";
import {createLink, deleteLink, getAllLinksByUsername, linksPresenter} from "../initializer.ts";
import Link from "../../domain/bean/Link.ts";
import {Service} from "../../domain/bean/Service.ts";
import LinksPresentationDTO from "../dto/LinksPresentationDTO.ts";

const App = () => {

	const [linkName, setLinkName] = useState("");
	const [service, setService] = useState<Service>(Service.Other);
	const [username, setUsername] = useState('');

	const [links, setLinks] = useState<LinksPresentationDTO>();

	useEffect(() => {
		const getLinks = async () => {
			const links: LinksPresentationDTO = await getAllLinksByUsername.execute("666alvin999", linksPresenter);
			setLinks(links);
		}

		getLinks();
	}, []);

	const submit = async () => {
		const link: Link = new Link("12", service, linkName, username, null);
		createLink.execute(link, "testusername").then(
			data => console.log(data)
		).catch(err => console.log(err));
	};

	const deleteFromDB = async (event: React.MouseEvent<HTMLButtonElement>) => {
		const rs = await deleteLink.execute(event.target.value);
		console.log(rs);
	}

	return (
		<>
			<input type="text" value={linkName} onChange={(e) => setLinkName(e.target.value)} />
			<select value={service} onChange={(e) => setService(e.target.value as Service)}>
				<option value="">------</option>
				{
					(Object.keys(Service) as Array<keyof typeof Service>)
						.map((key) => <option value={key}>{key}</option>)
				}
			</select>

			<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
			<button onClick={() => submit()}>Test</button>

			<div>
				{
					links?.getLinks.map((link) => <button onClick={deleteFromDB}
					                                      value={link.getId}>{link.getLinkName}</button>)
				}
			</div>
		</>
	);
}

export default App

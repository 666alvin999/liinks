import {useEffect, useState} from "react";
import {createLink, getAllLinksByUsername} from "./initializer.ts";
import Link from "../domain/bean/Link.ts";
import {Service} from "../domain/bean/Service.ts";
import {createLogger} from "vite";

const App = () => {

	const [linkName, setLinkName] = useState("");
	const [service, setService] = useState<Service>("Other");
	const [username, setUsername] = useState('');

	useEffect(() => {
		getAllLinksByUsername.execute("666alvin999")
			.then(data => console.log(data));
	}, []);

	const submit = async () => {
		const link: Link = new Link("12", service, linkName, username, null);
		createLink.execute(link, "testusername").then(
			data => console.log(data)
		)
			.catch(err => console.log(err));
	};

	return (
		<>
			<input type="text" value={linkName} onChange={(e) => setLinkName(e.target.value)} />
			<select value={service} onChange={(e) => setService(e.target.value as Service)}>
				<option value="">------</option>
				<option value="Facebook">Facebook</option>
			</select>
			<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
			<button onClick={() => submit()}>Test</button>
		</>
	);
}

export default App

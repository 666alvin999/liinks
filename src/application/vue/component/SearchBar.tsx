import Input from "./Input.tsx";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import User from "../../../domain/bean/User.ts";
import ActionButton from "./ActionButton.tsx";
import {Search} from "iconoir-react";

interface SearchBarProps {
	currentUser: User | null;
}

const SearchBar = ({currentUser}: SearchBarProps) => {

	const navigate = useNavigate();

	const [search, setSearch] = useState('');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();

		if (search === "" && currentUser instanceof User) {
			navigate(`/${currentUser}`, {
				state: {
					currentUser: currentUser
				}
			});
		} else if (search !== "") {
			navigate(`/${search}`, {
				state: {
					currentUser: currentUser
				}
			});
		}

		location.reload();
	}

	return (
		<>
			<form className="flex flex-row gap-4" onSubmit={handleSubmit}>
				<Input type="text" id="" label="Cherchez quelqu'un !" onChange={(e) => setSearch(e.target.value)} value={search} required={false} />
				<ActionButton buttonChild={<Search />} type="submit" />
			</form>
		</>
	);

}

export default SearchBar;
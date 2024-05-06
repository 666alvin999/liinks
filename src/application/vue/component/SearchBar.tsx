import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import User from "../../../domain/bean/User.ts";
import {Search} from "iconoir-react";
import Input from "./Input.tsx";

interface SearchBarProps {
	currentUser: User | null;
}

const SearchBar = ({currentUser}: SearchBarProps) => {

	const navigate = useNavigate();

	const [search, setSearch] = useState("");

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
	};

	return (
		<>
			<form
				className="flex w-full overflow-hidden rounded-full border-2 border-solidborder-neutral-100 bg-neutral-100 transition duration-75 ease-out focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2 hover:border-neutral-200"
				onSubmit={handleSubmit}
			>
				<Input type="text" id="ssearch" label="Cherchez-quelqu'un" onChange={(e) => setSearch(e.target.value)} value={search} required={true} />

				{/*<div className="relative grow">*/}
				{/*	<input*/}
				{/*		type="text"*/}
				{/*		id="search"*/}
				{/*		onChange={(e) => setSearch(e.target.value)}*/}
				{/*		value={search ? search : ""}*/}
				{/*		className="peer block h-12 w-full rounded-[8px] bg-transparent p-4 pb-6 pl-8 pt-8 text-sm leading-[48px] !tracking-normal text-black placeholder-transparent !outline-none transition duration-75 ease-out placeholder:leading-[48px]"*/}
				{/*	/>*/}

				{/*	<label htmlFor="search" className="peer-focus:left-md pointer-events-none absolute left-8 top-[13px] max-w-[calc(100%-(16px*2))] origin-[0] -translate-y-2.5 scale-[0.85] transform truncate text-sm !tracking-normal text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2.5 peer-focus:scale-[0.85]">*/}
				{/*		Cherchez quelqu'un !*/}
				{/*	</label>*/}
				{/*</div>*/}

				<button type="submit" className="my-[auto] flex aspect-square h-14 items-center justify-center rounded-md bg-transparent pr-4 !outline-none">
					<Search />
				</button>
			</form>
		</>
	);

};

export default SearchBar;

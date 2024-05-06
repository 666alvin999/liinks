import Logo from "../component/Logo.tsx";
import Button from "../component/Button.tsx";
import SearchBar from "../component/SearchBar.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import User from "../../../domain/bean/User.ts";

const ErrorPage = () => {

	document.title = "Liiinks - Erreur";

	const navigate = useNavigate();
	const locationStateUser = useLocation().state?.currentUser;

	const currentUser: User | null = locationStateUser != null ? new User(
		locationStateUser.email,
		locationStateUser.username,
		locationStateUser.password,
		locationStateUser.firstName,
		locationStateUser.lastName,
		locationStateUser.biography,
		locationStateUser.backgroundColors,
	) : null;

	const handleRedirect = () => {
		if (currentUser !== null) {
			navigate(`/${currentUser.getUsername}`, {
				state: {
					currentUser: currentUser,
				}
			});
		} else {
			navigate("/login");
		}
	}

	return (
		<>
			<Logo position="left" />

			<div className="flex flex-col justify-center items-center">
				<div className="w-96 absolute top-20">
					<SearchBar currentUser={null} />
				</div>

				<div className="w-10/12 h-[100vh] p-6 lg:w-[800px] flex flex-col justify-center">
					<h1 className="flex flex-col justify-center items-center leading-heading text-3xl font-extrabold !leading-tight text-black lg:text-5xl">
						<div>Oops !</div>
						<div className="text-xl lg:text-3xl">L'utilisateur que vous cherchez n'existe pas :(</div>
					</h1>

					<div className="w-[100%] flex flex-col justify-center items-center">
						<div className="w-[400px]">
							{
								currentUser !== null &&
								<Button type="button" text="Revenir sur votre page" onClick={handleRedirect} />
							}

							{
								currentUser === null &&
								<Button type="button" text="Revenir sur la page de connexion"
										onClick={handleRedirect} />
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);

}

export default ErrorPage;
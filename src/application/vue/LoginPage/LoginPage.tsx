import Button from "../component/Button.tsx";
import Logo from "../component/Logo.tsx";
import {useNavigate} from "react-router-dom";
import {logUserIn} from "../../initializer.ts";
import {FormEvent, FormEventHandler, useState} from "react";
import Input from "../component/Input.tsx";
import toast, {Toaster} from 'react-hot-toast';
import ActionSuccess from "../../../domain/bean/ActionSuccess.ts";
import User from "../../../domain/bean/User.ts";

const LoginPage = () => {

	document.title = "Liiinks - Connexion";

	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigateToUserPage: FormEventHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();

		const loginResult: User | ActionSuccess = await logUserIn.execute(username, password);

		if (loginResult instanceof User) {
			navigate(`/${username}`, {
				state: {
					currentUser: loginResult
				}
			})
		} else {
			toast(loginResult.getErrorMessage!);
		}
	}

	return (
		<>
			<div className="flex lg:flex-row bg-white relative font-inter tracking-tighter leading-normal">
				<Toaster />

				<Logo position="left" />

				<main className="relative flex w-full min-h-screen justify-center pt-8 lg:pb-3 lg:p-12">
					<div className="flex flex-col lg:!pt-24 w-10/12 lg:w-[640px] pt-16 p-6">
						<div className="mt-6 mb-12">
							<h1 className="text-black !leading-tight text-[32px] lg:text-5xl font-extrabold leading-heading text-center mb-2">
								Connectez-vous !
							</h1>

							<p className="text-gray-500 text-center">Connectez-vous à vos Liiinks</p>
						</div>

						<div>
							<form onSubmit={navigateToUserPage}>
								<div className="mb-4 flex flex-col gap-2">
									<Input type="text" id="username" label="Nom d'utilisateur" onChange={(e) => setUsername(e.target.value)} value={username} required={true} />
									<Input type="password" id="password" label="Mot de passe" onChange={(e) => setPassword(e.target.value)} value={password} required={true} />
								</div>

								<Button type="submit" text="Se connecter" />
							</form>

							<div className="mb-2 mt-4">
								<a className="undefined text-sm text-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline" href="/liiinks">
									<p className="leading-heading mb-2 text-center font-extrabold !leading-tight">
										Continuer en tant qu'invité
									</p>
								</a>
							</div>
						</div>

						<div className="flex justify-center mt-8">
							<p className="text-gray-500 text-sm ">Vous n'avez pas de compte ? <a
								className="undefined text-sm text-purple-600 inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
								href={`/signup`}>S'inscrire
							</a>
							</p>
						</div>
					</div>
				</main>

				<div className="min-h-screen lg:w-[calc(100vw-48%)] hidden lg:flex">
					<img src="/balazs-ketyi-74tfa1hJQws-unsplash.jpg" className="object-cover w-full h-full" alt="" />
				</div>
			</div>
		</>
	);

}

export default LoginPage

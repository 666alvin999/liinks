import Button from "../component/Button.tsx";
import Logo from "../component/Logo.tsx";
import {useNavigate} from "react-router-dom";
import {FormEvent, FormEventHandler, useState} from "react";
import Input from "../component/Input.tsx";
import toast, {Toaster} from 'react-hot-toast';
import User from "../../../domain/bean/User.ts";
import TextArea from "../component/TextArea.tsx";
import {signUpUser} from "../../initializer.ts";


function SignUpPage() {

	const navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [checkPassword, setCheckPassword] = useState("");
	const [biography, setBiography] = useState("");

	const navigateToUserPage: FormEventHandler = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		event.stopPropagation();

		if (password !== checkPassword) {
			toast("Les mots de passes doivent être identiques");
		} else {
			const user: User = new User(
				email,
				username,
				password,
				firstName,
				lastName,
				biography,
				["121212", "232323"]
			);

			const signUpResult = await signUpUser.execute(user);

			if (signUpResult instanceof User) {
				navigate(`/${username}`, {
					state: {
						currentUser: signUpResult
					}
				})
			} else {
				toast(signUpResult.getErrorMessage!);
			}
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
								Inscrivez-vous !
							</h1>

							<p className="text-gray-500 text-center">Créez vos propres Liiinks</p>
						</div>

						<form onSubmit={navigateToUserPage}>
							<fieldset name="identity" className="mb-4 flex flex-col gap-2">
								<div className="flex flex-row gap-2">
									<Input type="text" id="firstName" label="Prénom" onChange={(e) => setFirstName(e.target.value)} value={firstName} required={true} />
									<Input type="text" id="lastName" label="Nom de famille" onChange={(e) => setLastName(e.target.value)} value={lastName} required={false} />
								</div>

								<Input type="text" id="username" label="Nom d'utilisateur" onChange={(e) => setUsername(e.target.value)} value={username} required={true} />
								<Input type="email" id="email" label="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} required={true} />

								<TextArea id="biography" label="Racontez quelque chose sur vous" value={biography} onChange={(e) => setBiography(e.target.value)} required={false} />

								<Input type="password" id="password" label="Mot de passe" onChange={(e) => setPassword(e.target.value)} value={password} required={true} />
								<Input type="password" id="checkPassword" label="Vérifiez votre mot de passe" onChange={(e) => setCheckPassword(e.target.value)} value={checkPassword} required={true} />
							</fieldset>

							<Button type="submit" text="Créer un compte" />
						</form>

						<div className="mb-2 mt-4">
							<a className="undefined text-sm text-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline" href="/links">
								<p className="leading-heading mb-2 text-center font-extrabold !leading-tight">
									Continuer en tant qu'invité
								</p>
							</a>
						</div>

						<div className="flex justify-center mt-6 text-gray-500 px-8">
							<p className="text-center">
								En cliquant sur <strong>Créer un compte</strong>, vous acceptez les conditions générales
								de Linktree et confirmez que vous avez lu notre avis de confidentialité.
							</p>
						</div>

						<div className="flex justify-center mt-8">
							<p className="text-gray-500 text-sm ">Vous avez déjà un compte ? <a
								className="undefined text-sm text-purple-600 inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
								href={`/login`}>Se connecter</a>
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

export default SignUpPage
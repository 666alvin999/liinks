import Logo from "../component/Logo.tsx";
import Button from "../component/Button.tsx";
import {useNavigate} from "react-router-dom";

function WelcomePage() {

	document.title = "Liiinks";

	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};

	return (
		<>
			<div className="relative flex bg-white font-inter leading-normal tracking-tighter lg:flex-row">
				<Logo position="right" />

				<div className="hidden min-h-screen lg:flex lg:w-[calc(100vw-48%)]">
					<img
						src="/balazs-ketyi-74tfa1hJQws-unsplash.jpg"
						className="h-full w-full object-cover"
						alt=""
					/>
				</div>

				<main className="relative flex min-h-screen w-full justify-center pb-8  pt-8 lg:p-12 lg:pb-3">
					<div className="flex w-10/12 flex-col items-center justify-center p-6 lg:w-[800px]">
						<div className="mb-4 mt-6 lg:mb-12">
							<h1 className="leading-heading mb-2 text-center text-3xl font-extrabold !leading-tight text-black lg:text-5xl">
								Tout ce que tu es. <br />
								En un simple lien dans ta bio.
							</h1>
						</div>

						<div className="w-full lg:w-[640px]">
							<Button
								type="button"
								onClick={handleLoginClick}
								text="Se connecter"
							/>
						</div>

						<div className="mb-12 mt-6">
							<a
								className="undefined text-sm text-purple-600 underline hover:text-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:text-purple-800"
								href="/liiinks"
							>
								<p className="leading-heading mb-2 text-center font-extrabold !leading-tight">
									Continuer en tant qu'invité
								</p>
							</a>
						</div>
					</div>
				</main>
			</div>
		</>
	);

}

export default WelcomePage;

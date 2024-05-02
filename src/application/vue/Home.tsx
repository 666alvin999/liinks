import Logo from "../components/Logo";
import Button from "../components/Button.tsx";
import {useNavigate} from "react-router-dom";

function Home() {

	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	}

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
				<main className="relative flex min-h-screen w-full justify-center pt-8 lg:p-12 lg:pb-3">
					<div className="flex w-10/12 flex-col items-center justify-center p-6 lg:w-[640px]">
						<div className="mb-12 mt-6">
							<h1 className="leading-heading mb-2 text-center text-4xl font-extrabold !leading-tight text-black lg:text-5xl">
								Tout ce que tu es. <br />
								En un, simple lien en bio.
							</h1>
						</div>
						<Button onClick={handleLoginClick} text="Se connecter" />
					</div>
				</main>
			</div>
		</>
	);
}

export default Home;

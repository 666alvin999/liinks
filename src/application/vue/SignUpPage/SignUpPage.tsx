import Button from "../component/Button.tsx";
import Logo from "../component/Logo.tsx";
import {useNavigate} from "react-router-dom";
import {logUserIn} from "../../initializer.ts";
import {useState} from "react";
import Input from "../component/Input.tsx";
import toast, { Toaster } from 'react-hot-toast';


function SignUpPage() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecker] = useState("");

    const navigateToUserPage = async () => {
        if(checked) {
            const verifyLogin = await logUserIn.execute(username, password);

            if (verifyLogin.getSuccess) {
                navigate(`/${username}`, {
                    state: {
                        loginUsername: {username}
                    }
                })
            } else {
                console.log(verifyLogin.getErrorMessage!);
                toast(verifyLogin.getErrorMessage!);
            }
        }
    }

    return (
        <>
            <div className="flex lg:flex-row bg-white relative font-inter tracking-tighter leading-normal">
                <Toaster />
                <Logo position="left"/>
                <main className="relative flex w-full min-h-screen justify-center pt-8 lg:pb-3 lg:p-12">
                    <div className="flex flex-col lg:!pt-24 w-10/12 lg:w-[640px] pt-16 p-6">
                        <div className="mt-6 mb-12">
                            <h1 className="text-black !leading-tight text-[32px] lg:text-5xl font-extrabold leading-heading text-center mb-2">
                                Inscrivez-vous !
                            </h1>
                            <p className="text-gray-500 text-center">Log in to your Liiinks</p>
                        </div>
                        <form>
                            <div className="mb-4 flex flex-col gap-2">
                                <Input type="text" id="username" label="Nom d'utilisateur" onChange={(e) => setUsername(e.target.value)}/>
                                <Input type="password" id="password" label="Mot de passe" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="flex items-center mt-4 gap-4 pt-2">
                                <input id="rpgd" type="checkbox" value=""
                                       className="w-6 h-6" onChange={(e) => setChecker(e.target.checked)}/>
                                <label htmlFor="rpgd"
                                       className="text-black text-sm">
                                    J'accepte de recevoir des offres, des actualités et des mises à jour de Linktree.
                                </label>
                            </div>
                            <Button type="button" onClick={navigateToUserPage} text="S'inscrire" />
                        </form>
                        <div className="flex justify-center mt-6 text-gray-500 px-8"><p className="text-center">En cliquant sur <strong>Créer un compte</strong>, vous acceptez les conditions générales de Linktree et confirmez que vous avez lu notre avis de confidentialité.</p></div>
                        <div className="justify-center mt-3 text-gray-500 hidden">OR</div>
                        <div className="flex justify-center mt-8">
                            <p className="text-gray-500 text-sm ">Vous avez déjà un compte ? <a
                                className="undefined text-sm text-purple-600 inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
                                href={`/login`}>Se connecter</a>
                            </p>
                        </div>
                    </div>
                </main>
                <div className="min-h-screen lg:w-[calc(100vw-48%)] hidden lg:flex">
                    <img src="/balazs-ketyi-74tfa1hJQws-unsplash.jpg"
                         className="object-cover w-full h-full" alt=""/>
                </div>
            </div>
        </>
    )
}

export default SignUpPage
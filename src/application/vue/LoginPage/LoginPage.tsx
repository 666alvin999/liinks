import Button from "../component/Button.tsx";
import Logo from "../component/Logo.tsx";
import { useNavigate } from "react-router-dom";
import { logUserIn } from "../../initializer.ts";
import { FormEvent, FormEventHandler, useState } from "react";
import Input from "../component/Input.tsx";
import toast, { Toaster } from "react-hot-toast";
import ActionSuccess from "../../../domain/bean/ActionSuccess.ts";
import User from "../../../domain/bean/User.ts";

const LoginPage = () => {
  document.title = "Liiinks - Connexion";

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigateToUserPage: FormEventHandler = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const loginResult: User | ActionSuccess = await logUserIn.execute(
      username,
      password
    );

    if (loginResult instanceof User) {
      navigate(`/${username}`, {
        state: {
          currentUser: loginResult
        }
      });
    } else {
      toast.error(loginResult.getErrorMessage!);
    }
  };

  return (
    <>
      <div className="relative flex bg-white font-inter leading-normal tracking-tighter lg:flex-row">
        <Toaster />
        <Logo position="left" />

        <main className="relative flex min-h-screen w-full justify-center pb-8 pt-8 lg:p-12 lg:pb-3">
          <div className="flex w-10/12 flex-col p-6 pt-16 lg:w-[640px] lg:!pt-24">
            <div className="mb-12 mt-6">
              <h1 className="leading-heading mb-2 text-center text-[32px] font-extrabold !leading-tight text-black lg:text-5xl">
                Connectez-vous !
              </h1>

              <p className="text-center text-gray-500">
                Connectez-vous à vos Liiinks
              </p>
            </div>

            <div>
              <form onSubmit={navigateToUserPage}>
                <div className="mb-4 flex flex-col gap-2">
                  <Input
                    type="text"
                    id="username"
                    label="Nom d'utilisateur"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required={true}
                  />
                  <Input
                    type="password"
                    id="password"
                    label="Mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required={true}
                  />
                </div>

                <Button
                  type="submit"
                  text="Se connecter"
                />
              </form>

              <div className="mb-2 mt-4">
                <a
                  className="undefined text-sm text-purple-600 underline hover:text-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  href="/liiinks"
                >
                  <p className="leading-heading mb-2 text-center font-extrabold !leading-tight">
                    Continuer en tant qu'invité
                  </p>
                </a>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <p className="text-sm text-gray-500 ">
                Vous n'avez pas de compte ?{" "}
                <a
                  className="undefined inline-flex text-sm text-purple-600 underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  href={`/signup`}
                >
                  S'inscrire
                </a>
              </p>
            </div>
          </div>
        </main>

        <div className="hidden min-h-screen lg:flex lg:w-[calc(100vw-48%)]">
          <img
            src="/balazs-ketyi-74tfa1hJQws-unsplash.jpg"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;

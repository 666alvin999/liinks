import Button from "../component/Button.tsx";
import Logo from "../component/Logo.tsx";
import { useNavigate } from "react-router-dom";
import { FormEvent, FormEventHandler, useState } from "react";
import Input from "../component/Input.tsx";
import toast, { Toaster } from "react-hot-toast";
import User from "../../../domain/bean/User.ts";
import TextArea from "../component/TextArea.tsx";
import { signUpUser } from "../../initializer.ts";

function SignUpPage() {
  document.title = "Liiinks - Inscription";

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [biography, setBiography] = useState("");

  const navigateToUserPage: FormEventHandler = async (
    event: FormEvent<HTMLFormElement>
  ) => {
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
        });
      } else {
        toast.error(signUpResult.getErrorMessage!);
      }
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
                Inscrivez-vous !
              </h1>

              <p className="text-center text-gray-500">
                Créez vos propres Liiinks
              </p>
            </div>

            <form onSubmit={navigateToUserPage}>
              <fieldset
                name="identity"
                className="mb-4 flex flex-col gap-2"
              >
                <div className="flex flex-col gap-2 lg:flex-row">
                  <Input
                    type="text"
                    id="firstName"
                    label="Prénom"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    required={true}
                  />
                  <Input
                    type="text"
                    id="lastName"
                    label="Nom de famille"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    required={false}
                  />
                </div>

                <Input
                  type="text"
                  id="username"
                  label="Nom d'utilisateur"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  required={true}
                />
                <Input
                  type="email"
                  id="email"
                  label="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required={true}
                />

                <TextArea
                  id="biography"
                  label="Racontez quelque chose sur vous"
                  value={biography}
                  onChange={(e) => setBiography(e.target.value)}
                  required={false}
                />

                <Input
                  type="password"
                  id="password"
                  label="Mot de passe"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required={true}
                />
                <Input
                  type="password"
                  id="checkPassword"
                  label="Vérifiez votre mot de passe"
                  onChange={(e) => setCheckPassword(e.target.value)}
                  value={checkPassword}
                  required={true}
                />
              </fieldset>

              <Button
                type="submit"
                text="Créer un compte"
              />
            </form>

            <div className="mb-2 mt-4">
              <a
                className="undefined text-sm text-purple-600 underline hover:text-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:text-purple-800"
                href="/liiinks"
              >
                <p className="leading-heading mb-2 text-center font-extrabold !leading-tight">
                  Continuer en tant qu'invité
                </p>
              </a>
            </div>

            <div className="mt-6 flex justify-center text-gray-500">
              <p className="text-center">
                En cliquant sur <strong>Créer un compte</strong>, vous acceptez
                les conditions générales de Linktree et confirmez que vous avez
                lu notre avis de confidentialité.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <p className="text-sm text-gray-500 ">
                Vous avez déjà un compte ?{" "}
                <a
                  className="undefined inline-flex text-sm text-purple-600 underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  href={`/login`}
                >
                  Se connecter
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
}

export default SignUpPage;

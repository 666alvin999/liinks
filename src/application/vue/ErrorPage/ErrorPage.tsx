import Logo from "../component/Logo.tsx";
import Button from "../component/Button.tsx";
import SearchBar from "../component/SearchBar.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import User from "../../../domain/bean/User.ts";

const ErrorPage = () => {
  document.title = "Liiinks - Erreur";

  const navigate = useNavigate();
  const locationStateUser = useLocation().state?.currentUser;

  const currentUser: User | null =
    locationStateUser != null
      ? new User(
          locationStateUser.email,
          locationStateUser.username,
          locationStateUser.password,
          locationStateUser.firstName,
          locationStateUser.lastName,
          locationStateUser.biography,
          locationStateUser.backgroundColors
        )
      : null;

  const handleRedirect = () => {
    if (currentUser !== null) {
      navigate(`/${currentUser.getUsername}`, {
        state: {
          currentUser: currentUser
        }
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="relative flex bg-white font-inter leading-normal tracking-tighter lg:flex-row">
        <Logo position="left" />

        <main className="relative flex min-h-screen w-full justify-center pb-8 pt-8 lg:p-12 lg:pb-3">
          <div className="flex w-10/12 flex-col p-6 pt-16 lg:w-[640px] lg:!pt-24">
            <div className="mb-12 mt-6">
              <SearchBar currentUser={null} />
            </div>
            <div className="mb-12">
              <h1 className="leading-heading mb-2 text-center text-[32px] font-extrabold !leading-tight text-black lg:text-5xl">
                Oops !
              </h1>
              <p className="text-center text-gray-500">
                L'utilisateur que vous cherchez n'existe pas :(
              </p>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              <div className="w-full">
                {currentUser !== null && (
                  <Button
                    type="button"
                    text="Revenir sur votre page"
                    onClick={handleRedirect}
                  />
                )}

                {currentUser === null && (
                  <Button
                    type="button"
                    text="Revenir sur la page de connexion"
                    onClick={handleRedirect}
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ErrorPage;

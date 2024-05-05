import {XrayView} from "iconoir-react";
import LinkPresentationDTO from "../../dto/LinkPresentationDTO.ts";
import Link from "./components/Link.tsx";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LinksPresentationDTO from "../../dto/LinksPresentationDTO.ts";
import {getAllLinksByUsername, linksPresenter} from "../../initializer.ts";
import User from "../../../domain/bean/User.ts";
import SearchBar from "./components/SearchBar.tsx";

const LinkPage = () => {

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

    const {username} = useParams();

    const [reloadLinks, setReloadLinks] = useState<boolean>(false);
    const [links, setLinks] = useState<LinksPresentationDTO>();

    useEffect(() => {
        const getLinks = async () => {
            const links: LinksPresentationDTO = await getAllLinksByUsername.execute(username!, linksPresenter);
            setLinks(links);
        }

        getLinks();
    }, [reloadLinks]);

    return (
        <>
            <div className="font-inter tracking-tighter leading-normal pt-8 flex flex-col justify-center items-center gap-16 lg:flex-col lg:pb-3 lg:p-12 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
                <div className="w-96">
                    <SearchBar currentUser={currentUser}></SearchBar>
                </div>

                {
                    currentUser === null &&
                    <div className="fixed bottom-8 left-0 w-full flex justify-center items-center z-10">
                        <a className="text-xl lg:text-2xl font-medium bg-white px-4 h-12 text-black inline-flex justify-center items-center gap-2 rounded-full drop-shadow-lg" href="/">
                            <XrayView />
                            <span className="block text-sm font-semibold">Créer tes propres Liiinks</span>
                        </a>
                    </div>
                }
                {
                    currentUser !== null &&
                    <div className="fixed bottom-8 left-0 w-full flex justify-center items-center z-10">
                        <a className="text-xl lg:text-2xl font-medium bg-white px-4 h-12 text-black inline-flex justify-center items-center gap-2 rounded-full drop-shadow-lg"
                           href={`/${currentUser.getUsername}`}>
                            <XrayView />
                            <span className="block text-sm font-semibold">Retourner à tes Liiinks</span>
                        </a>
                    </div>
                }

                <main className="min-h-screen w-full flex flex-col justify-start items-center gap-8">

                    <div className="flex flex-col w-10/12 lg:w-[800px] p-6 gap-8">
                        <div className="flex flex-col justify-center items-center">
                            <div className="aspect-square w-40 max-w-40 bg-red-600 mb-8">
                                <img className="object-cover w-full h-full" src="https://via.placeholder.com/150"
                                     alt="logo" />
                            </div>

                            <h1 className="text-white !leading-tight text-xl lg:text-2xl font-extrabold leading-heading text-center mb-1">
                                {links?.getLinksOwner.getFirstName} {links?.getLinksOwner.getLastName}
                            </h1>

                            <h2 className="text-white !leading-tight text-l lg:text-xl font-extrabold leading-heading text-center mb-1">
                                {links?.getLinksOwner.getUsername}
                            </h2>

                            <p className="text-white text-center px-10">{links?.getLinksOwner.getBiography}</p>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-2">
                            {
                                links?.getLinks.map((link: LinkPresentationDTO) =>
                                    <Link setReloadLinks={setReloadLinks} username={username!}
                                          isAdmin={links?.getLinksOwner.isSameUser(currentUser)} link={link} />
                                )
                            }
                        </div>
                    </div>
                </main>
            </div>
        </>
    );

}

export default LinkPage;
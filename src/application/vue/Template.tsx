import {XrayView} from "iconoir-react";
import LinkPresentationDTO from "../dto/LinkPresentationDTO.ts";
import ButtonLink from "../components/ButtonLink.tsx";
import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import LinksPresentationDTO from "../dto/LinksPresentationDTO.ts";
import {getAllLinksByUsername, linksPresenter} from "../initializer.ts";

const Template = () => {

    const {username} = useParams();
    const loginUsername = useLocation().state.loginUsername;
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
            <div className="flex lg:flex-row bg-white relative font-inter tracking-tighter leading-normal">
                <div className="fixed bottom-8 left-0 w-full flex justify-center items-center z-10">
                    <a className="text-xl lg:text-2xl font-medium bg-white px-4 h-12 text-black inline-flex justify-center items-center gap-2 rounded-full drop-shadow-lg">
                        <XrayView />
                        <span className="block text-sm font-semibold">Create your Liiink</span>
                    </a>
                </div>
                <main className="relative flex w-full min-h-screen justify-center pt-8 lg:pb-3 lg:p-12 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
                    <div className="flex flex-col w-10/12 lg:w-[640px] p-6 gap-8">
                        <div className="flex flex-col justify-center items-center">
                            <div className="aspect-square w-40 max-w-40 bg-red-600 mb-8">
                                <img className="object-cover w-full h-full" src="https://via.placeholder.com/150" alt="logo"/>
                            </div>
                            <h1 className="text-white !leading-tight text-xl lg:text-2xl font-extrabold leading-heading text-center mb-1">
                                Quentin Fabient
                            </h1>
                            <p className="text-white text-center px-10">Log in to your Liiinks</p>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            {
                                links?.getLinks.map((link: LinkPresentationDTO) =>
                                    <ButtonLink setReloadLinks={setReloadLinks} username={username!} isAdmin={username === loginUsername.username} link={link} />
                                )
                            }
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Template;
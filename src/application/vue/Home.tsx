import ButtonLink from "../components/ButtonLink";
import Logo from "../components/Logo";

function Home() {
    return (
        <>
            <div className="flex lg:flex-row bg-white relative font-inter tracking-tighter leading-normal">
                <Logo position="right"/>
                <div className="min-h-screen lg:w-[calc(100vw-48%)] hidden lg:flex">
                    <img src="/balazs-ketyi-74tfa1hJQws-unsplash.jpg" className="object-cover w-full h-full" alt=""/>
                </div>
                <main className="relative flex w-full min-h-screen justify-center pt-8 lg:pb-3 lg:p-12">
                    <div className="flex flex-col items-center justify-center w-10/12 lg:w-[640px] p-6">
                        <div className="mt-6 mb-12">
                            <h1 className="text-black !leading-tight text-4xl lg:text-5xl font-extrabold leading-heading text-center mb-2">
                                Tout ce que tu es. <br/>En un, simple lien en bio.
                            </h1>
                        </div>
                        <ButtonLink text="Créez votre Liiinks" href="/" />
                    </div>
                </main>
            </div>
        </>
    );
}

export default Home;
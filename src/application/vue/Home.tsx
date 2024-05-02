import {XrayView} from "iconoir-react";

function Home() {
    return (
        <>
            <div className="flex lg:flex-row bg-white relative font-inter tracking-tighter leading-normal">
                <a className="absolute z-50 top-12 right-12 text-xl lg:text-2xl font-medium inline-flex justify-center items-center gap-2 ">
                    <span className="block">Liiiks</span>
                    <XrayView color="#4ade80"/>
                </a>
                <div className="min-h-screen lg:w-[calc(100vw-48%)] hidden lg:flex">
                    <img src="/balazs-ketyi-74tfa1hJQws-unsplash.jpg"
                         className="object-cover w-full h-full" alt=""/>
                </div>
                <main className="relative flex w-full min-h-screen justify-center pt-8 lg:pb-3 lg:p-12">
                    <div className="flex flex-col items-center justify-center w-10/12 lg:w-[640px] p-6">
                        <div className="mt-6 mb-12">
                            <h1 className="text-black !leading-tight text-4xl lg:text-5xl font-extrabold leading-heading text-center mb-2">
                                Tout ce que tu es. <br/>En un, simple lien en bio.
                            </h1>
                        </div>
                        <button
                            className="inline-flex justify-center items-center gap-2 relative transition duration-75 ease-out w-full h-12 px-4 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-purple-600 text-white mt-8 hover:bg-purple-800 active:bg-purple-800"
                            type="submit">
                                <span className="flex items-center justify-center">
                                    <span className="block font-semibold text-md">Log in</span>
                                </span>
                        </button>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Home;
import {XrayView} from "iconoir-react";

function Template() {
    return (
        <>
            <div className="flex lg:flex-row bg-white relative font-inter tracking-tighter leading-normal">
                <div className="fixed bottom-8 left-0 w-full flex justify-center items-center z-10">
                    <a className="text-xl lg:text-2xl font-medium bg-white px-4 h-12 text-black inline-flex justify-center items-center gap-2 rounded-full drop-shadow-lg">
                        <XrayView />
                        <span className="block text-sm font-semibold">Create your Linktree</span>
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
                            <a href="#"
                               className="bg-white border-solid border-2 border-neutral-100 rounded-full px-5 py-4 w-full flex items-center hover:bg-neutral-100 hover:border-neutral-200 focus-visible:ring-2 focus-visible:outline-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-black antialiased">
                                <XrayView className="absolute"/>
                                <p className="text-black text-lg px-5 font-semibold text-center w-full">ginrioggroibgr</p>
                            </a>
                            <a href="#"
                               className="bg-white border-solid border-2 border-neutral-100 rounded-full px-5 py-4 w-full flex items-center hover:bg-neutral-100 hover:border-neutral-200 focus-visible:ring-2 focus-visible:outline-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-black antialiased">
                                <XrayView className="absolute"/>
                                <p className="text-black text-lg px-5 font-semibold text-center w-full">ginrioggroibgr</p>
                            </a>
                            <a href="#"
                               className="bg-white border-solid border-2 border-neutral-100 rounded-full px-5 py-4 w-full flex items-center hover:bg-neutral-100 hover:border-neutral-200 focus-visible:ring-2 focus-visible:outline-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-black antialiased">
                                <XrayView className="absolute"/>
                                <p className="text-black text-lg px-5 font-semibold text-center w-full">ginrioggroibgr</p>
                            </a>
                            <a href="#"
                               className="bg-white border-solid border-2 border-neutral-100 rounded-full px-5 py-4 w-full flex items-center hover:bg-neutral-100 hover:border-neutral-200 focus-visible:ring-2 focus-visible:outline-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-black antialiased">
                                <XrayView className="absolute"/>
                                <p className="text-black text-lg px-5 font-semibold text-center w-full">ginrioggroibgr</p>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Template;
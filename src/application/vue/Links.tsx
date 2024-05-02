import {XrayView} from "iconoir-react";
import {Service} from "../../domain/bean/Service.ts";

function Links() {
    return (
        <>
            <div className="flex flex-col lg:flex-row bg-white relative font-inter tracking-tighter leading-normal">
                <a className="absolute z-50 top-11 lg:top-12 right-12 text-xl lg:text-2xl font-medium inline-flex justify-center items-center gap-2">
                    <span className="block">Liiiks</span>
                    <XrayView color="#4ade80"/>
                </a>
                <div className="lg:min-h-screen lg:h-auto lg:w-5/12 flex p-4">
                    <div className="flex shadow-xl border-solid border-2 border-neutral-50 rounded-lg px-4 py-4 flex-row lg:flex-col gap-x-4 gap-y-2 w-full h-full">
                        <a href="#" className="inline-flex h-12 px-4 lg:w-full w-fit items-center gap-1 font-medium bg-neutral-50 rounded-lg hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"><XrayView color="#4ade80"/><span>Links</span></a>
                        <a href="#" className="inline-flex h-12 px-4 lg:w-full w-fit items-center gap-1 font-medium bg-neutral-50 rounded-lg hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"><XrayView color="#4ade80"/><span>Links</span></a>
                    </div>
                </div>
                <main className="relative flex w-full min-h-screen justify-center pt-8 lg:pb-3 lg:p-12">
                    <div className="flex flex-col lg:!pt-12 w-10/12 lg:w-[640px] p-6 gap-12">
                        <button
                            className="inline-flex justify-center items-center gap-2 relative transition duration-75 ease-out w-full h-12 px-4 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-purple-600 text-white hover:bg-purple-800 active:bg-purple-800"
                            type="submit">
                                <XrayView color="#4ade80"/>
                                <span className="flex items-center justify-center">
                                    <span className="block font-semibold text-md">Add</span>
                                </span>
                        </button>
                        <div className="flex flex-col w-full gap-4">
                            <div className="shadow-xl border-solid border-2 border-neutral-50 rounded-lg px-4 py-4 flex-row">
                                <h2 className="text-black !leading-tight text-md font-semibold leading-heading mb-4">
                                    Tout ce que tu es.
                                </h2>
                                <form className="flex flex-col gap-4">
                                    <div
                                        className="flex rounded-md bg-neutral-100 border-solid border-2 overflow-hidden
                                    w-full border-neutral-100 transition duration-75 ease-out hover:border-neutral-200
                                    focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
                                        <div className="relative grow">
                                            <input name="username" required type="text" placeholder="Email or username"
                                                   aria-invalid="false" id="label-111"
                                                   className="!tracking-normal bg-transparent peer leading-[48px] placeholder:leading-[48px] pt-8 placeholder-transparent text-sm h-12 block p-4 w-full rounded-[8px] text-black transition duration-75 ease-out !outline-none"/>
                                            <label htmlFor="label-111"
                                                   className="!tracking-normal absolute pointer-events-none left-4 text-sm transition-all transform -translate-y-2.5 scale-[0.85] top-[13px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 peer-focus:left-md truncate max-w-[calc(100%-(16px*2))] text-gray-500">Email
                                                or username</label>
                                        </div>
                                    </div>
                                    <div
                                        className="flex rounded-md bg-neutral-100 border-solid border-2 overflow-hidden
                                    w-full border-neutral-100 transition duration-75 ease-out hover:border-neutral-200
                                    focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
                                        <div className="relative grow">
                                            <input name="username" required type="text" placeholder="Email or username"
                                                   aria-invalid="false" id="label-111"
                                                   className="!tracking-normal bg-transparent peer leading-[48px] placeholder:leading-[48px] pt-8 placeholder-transparent text-sm h-12 block p-4 w-full rounded-[8px] text-black transition duration-75 ease-out !outline-none"/>
                                            <label htmlFor="label-111"
                                                   className="!tracking-normal absolute pointer-events-none left-4 text-sm transition-all transform -translate-y-2.5 scale-[0.85] top-[13px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 peer-focus:left-md truncate max-w-[calc(100%-(16px*2))] text-gray-500">Email
                                                or username</label>
                                        </div>
                                    </div>
                                    <div
                                        className="flex rounded-md bg-neutral-100 border-solid border-2 overflow-hidden
                                    w-full border-neutral-100 transition duration-75 ease-out hover:border-neutral-200
                                    focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
                                        <div className="relative grow">
                                            <select name="username" required
                                                    aria-invalid="false" id="label-111"
                                                    className="!tracking-normal bg-transparent peer leading-[48px] pt-6 placeholder:leading-[48px] placeholder-transparent text-sm h-12 block px-3 py-2 w-full rounded-[8px] text-black transition duration-75 ease-out !outline-none">
                                                <option value="">------</option>
                                                <option value="2">vivirvbbi</option>
                                            </select>
                                            <label htmlFor="label-111"
                                                   className="!tracking-normal absolute pointer-events-none left-4 text-sm transition-all transform -translate-y-2.5 scale-[0.85] top-[13px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 peer-focus:left-md truncate max-w-[calc(100%-(16px*2))] text-gray-500">Email
                                                or username</label>
                                        </div>
                                    </div>
                                    <button
                                        className="inline-flex justify-center items-center gap-2 relative transition duration-75 ease-out w-full h-12 px-4 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-purple-600 text-white mt-8 hover:bg-purple-800 active:bg-purple-800"
                                        type="submit">
                                        <span className="flex items-center justify-center">
                                            <span className="block font-semibold text-md">Save</span>
                                        </span>
                                    </button>
                                </form>
                            </div>
                            <div
                                className="flex shadow-xl border-solid border-2 border-neutral-50 rounded-lg px-4 py-4 flex-row"></div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Links;
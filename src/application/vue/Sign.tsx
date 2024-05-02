import Button from "../components/Button";
import Logo from "../components/Logo";

function Sign() {
    return (
        <>
            <div className="flex lg:flex-row bg-white relative font-inter tracking-tighter leading-normal">
                <Logo position="left"/>
                <main className="relative flex w-full min-h-screen justify-center pt-8 lg:pb-3 lg:p-12">
                    <div className="flex flex-col lg:!pt-24 w-10/12 lg:w-[640px] pt-16 p-6">
                        <div className="mt-6 mb-12">
                            <h1 className="text-black !leading-tight text-[32px] lg:text-5xl font-extrabold leading-heading text-center mb-2">
                                Tout ce que tu es. <br/>En un, simple lien en bio.
                            </h1>
                            <p className="text-gray-500 text-center">Log in to your Liiinks</p>
                        </div>
                        <form>
                            <div className="mb-4 flex flex-col gap-2">
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
                                    <label htmlFor="label-112"
                                           className="!tracking-normal text-gray-500 h-12 flex items-center pl-4 rounded-sm rounded-r-none text-sm leading-none min-w-fit truncate">Email
                                        or username</label>
                                    <div className="relative grow">
                                        <input name="username" required type="text" placeholder="Email or username"
                                               aria-invalid="false" id="label-112"
                                               className="!tracking-normal bg-transparent peer leading-[48px] placeholder:leading-[48px] pr-1 pl-1 placeholder-transparent text-sm h-12 block p-4 w-full rounded-[8px] text-black transition duration-75 ease-out !outline-none"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mt-4 gap-4 pt-2">
                                <input id="label-113" type="checkbox" value=""
                                       className="w-6 h-6"/>
                                <label htmlFor="label-113"
                                       className="text-black text-sm">
                                    I agree to receive offers, news and updates from Linktree.
                                </label>
                            </div>
                            <Button type="submit" text="S'inscrire" />
                        </form>
                        <div className="flex justify-center mt-6 text-gray-500 px-8"><p className="text-center">By clicking <strong>Create account</strong>, you agree to Linktree's Terms and Conditions and confirm you have read our Privacy Notice.</p></div>
                        <div className="justify-center mt-3 text-gray-500 hidden">OR</div>
                        <div className="flex justify-center mt-8">
                            <p className="text-gray-500 text-sm ">Already have an account ? <a
                                className="undefined text-sm text-purple-600 inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
                                href="#">Log in</a>
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

export default Sign
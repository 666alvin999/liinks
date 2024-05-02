import Button from "../components/Button";
import Logo from "../components/Logo";

function Login() {
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
                            <p className="text-gray-500 text-center">Connectez-vous à vos Liiinks</p>
                        </div>
                        <form>
                            <div className="mb-4 flex flex-col gap-2">
                                
                            </div>
                            <p className="text-purple-600 text-sm flex gap-4 w-full justify-center items-center">
                                <a className="underline text-sm text-purple-600 inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
                                   href="#">Forgot password ?</a>
                                <a className="underline text-sm text-purple-600 inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2"
                                   href="#">Forgot username ?</a>
                            </p>
                            <Button type="submit" text="Log in" />
                        </form>
                        <div className="justify-center mt-3 text-gray-500 hidden">OR</div>
                        <div className="flex justify-center mt-8">
                            <p className="text-gray-500 text-sm ">Don't have an account? <a
                                className="undefined text-sm text-purple-600 inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-black focus-visible:outline-offset-2 underline"
                                href="#">Sign up</a>
                            </p>
                        </div>
                    </div>
                </main>
                <div className="min-h-screen lg:w-[calc(100vw-48%)] hidden lg:flex">
                    <img src="/balazs-ketyi-74tfa1hJQws-unsplash.jpg" className="object-cover w-full h-full" alt=""/>
                </div>
            </div>
        </>
    );
}

export default Login

import {Check} from "iconoir-react";

function Login() {
    return (
        <>
            <div className="flex lg:flex-row bg-red-600 relative">
                <div className="h-md lg:!h-lg absolute top-lg left-lg lg:top-2xl lg:left-2xl z-50">
                    <a className="focus:outline-2 focus:outline-black focus:outline-offset-8">
                        Liiiks
                        <Check />
                    </a>
                </div>
                <main></main>
                <div></div>
            </div>
        </>
    )
}

export default Login
import {ChangeEvent, useState} from "react";
import {EyeSolid, EyeClosed} from "iconoir-react";

interface InputTextProps {
    type: string;
    id: string | undefined;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number | readonly string[] | undefined;
    required: boolean;
}
  
function Input({ id, label, type, onChange, value, required}: InputTextProps) {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    if (type === "password" && !showPassword) {
        return (
            <div
                className="flex rounded-md bg-neutral-100 border-solid border-2 overflow-hidden
            w-full border-neutral-100 transition duration-75 ease-out hover:border-neutral-200
            focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
                <div className="relative grow">
                    <input name={id} required={required} type="password" placeholder="Email or username" onChange={onChange}
                           aria-invalid="false" id={id}
                           className="!tracking-normal bg-transparent peer leading-[48px] placeholder:leading-[48px] pt-8 placeholder-transparent text-sm h-12 block p-4 w-full rounded-[8px] text-black transition duration-75 ease-out !outline-none" value={value}/>

                    <label htmlFor={id} className="!tracking-normal absolute pointer-events-none left-4 text-sm transition-all transform -translate-y-2.5 scale-[0.85] top-[13px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 peer-focus:left-md truncate max-w-[calc(100%-(16px*2))] text-gray-500">{label}</label>
                </div>

                <div className="my-[auto] mr-4">

                <EyeClosed onClick={() => setShowPassword(!showPassword)} />
                </div>
            </div>
        );
    } else if (type === "password" && showPassword) {
        return (
            <div
                className="flex rounded-md bg-neutral-100 border-solid border-2 overflow-hidden
            w-full border-neutral-100 transition duration-75 ease-out hover:border-neutral-200
            focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
                <div className="relative grow">
                    <input name={id} required={required} type="text" placeholder="Email or username" onChange={onChange}
                           aria-invalid="false" id={id}
                           className="!tracking-normal bg-transparent peer leading-[48px] placeholder:leading-[48px] pt-8 placeholder-transparent text-sm h-12 block p-4 w-full rounded-[8px] text-black transition duration-75 ease-out !outline-none"
                           value={value} />

                    <label htmlFor={id}
                           className="!tracking-normal absolute pointer-events-none left-4 text-sm transition-all transform -translate-y-2.5 scale-[0.85] top-[13px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 peer-focus:left-md truncate max-w-[calc(100%-(16px*2))] text-gray-500">{label}</label>
                </div>

                <div className="my-[auto] mr-4">

                    <EyeSolid onClick={() => setShowPassword(!showPassword)} />
                </div>
            </div>
        );
    } else {
        return (
            <div
                className="flex rounded-md bg-neutral-100 border-solid border-2 overflow-hidden
            w-full border-neutral-100 transition duration-75 ease-out hover:border-neutral-200
            focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
                <div className="relative grow">
                    <input name={id} required={required} type={type} placeholder="Email or username" onChange={onChange}
                           aria-invalid="false" id={id}
                           className="!tracking-normal bg-transparent peer leading-[48px] placeholder:leading-[48px] pt-8 placeholder-transparent text-sm h-12 block p-4 w-full rounded-[8px] text-black transition duration-75 ease-out !outline-none"
                           value={value} />

                    <label htmlFor={id}
                           className="!tracking-normal absolute pointer-events-none left-4 text-sm transition-all transform -translate-y-2.5 scale-[0.85] top-[13px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 peer-focus:left-md truncate max-w-[calc(100%-(16px*2))] text-gray-500">{label}</label>
                </div>
            </div>
        );
    }

}

export default Input
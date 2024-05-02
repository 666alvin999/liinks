interface InputTextAltProps {
    id: string | undefined;
    label: string;
}
  
function InputTextAlt({ id, label }: InputTextAltProps) {
    return (
        <div
            className="flex rounded-md bg-neutral-100 border-solid border-2 overflow-hidden
            w-full border-neutral-100 transition duration-75 ease-out hover:border-neutral-200
            focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
            <label htmlFor={id}
                    className="!tracking-normal text-gray-500 h-12 flex items-center pl-4 rounded-sm rounded-r-none text-sm leading-none min-w-fit truncate">{label}</label>
            <div className="relative grow">
                <input name="username" required type="text" placeholder="Email or username"
                        aria-invalid="false" id={id}
                        className="!tracking-normal bg-transparent peer leading-[48px] placeholder:leading-[48px] pr-1 pl-1 placeholder-transparent text-sm h-12 block p-4 w-full rounded-[8px] text-black transition duration-75 ease-out !outline-none"/>
            </div>
        </div>
    );
}

export default InputTextAlt
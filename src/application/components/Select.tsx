import { Children } from 'react';

interface SelectProps {
    id: string | undefined;
    label: string;
    onChange: () => void;
}

function Select({id, label, onChange}: SelectProps, { children }) {
    return (
        <div
            className="flex rounded-md bg-neutral-100 border-solid border-2 overflow-hidden
        w-full border-neutral-100 transition duration-75 ease-out hover:border-neutral-200
        focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
            <div className="relative grow">
                <select name="username" required onChange={onChange}
                        aria-invalid="false" id={id}
                        className="!tracking-normal bg-transparent peer leading-[48px] pt-6 placeholder:leading-[48px] placeholder-transparent text-sm h-12 block px-3 py-2 w-full rounded-[8px] text-black transition duration-75 ease-out !outline-none">
                    <option value="">------</option>
                    {Children.map(children, child =>
                         <option value="">{child}</option>
                    )}
                </select>
                <label htmlFor={id} className="!tracking-normal absolute pointer-events-none left-4 text-sm transition-all transform -translate-y-2.5 scale-[0.85] top-[13px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 peer-focus:left-md truncate max-w-[calc(100%-(16px*2))] text-gray-500">{label}</label>
            </div>
        </div>
    );
}

export default Select
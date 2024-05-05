import {ChangeEvent} from "react";

interface TextAreaProps {
	value: string | number | readonly string[] | undefined;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	id: string;
	required: boolean;
	label: string;
}

const TextArea = ({id, value, onChange, required, label}: TextAreaProps) => {

	return (
		<>
			<div className="flex rounded-md bg-neutral-100 border-solid border-2 overflow-hidden
            w-full border-neutral-100 transition duration-75 ease-out hover:border-neutral-200
            focus-within:ring-2 focus-within:ring-black focus-within:ring-offset-2">
				<div className="relative grow">
					<textarea className="!tracking-normal bg-transparent peer leading-[48px] placeholder:leading-[48px] pt-8 placeholder-transparent text-sm block p-4 w-full rounded-[8px] text-black transition duration-75 ease-out !outline-none resize-none" aria-invalid="false" id={id} onChange={onChange} value={value} required={required} cols={10}>
					</textarea>

					<label htmlFor={id} className="!tracking-normal absolute pointer-events-none left-4 text-sm transition-all transform -translate-y-2.5 scale-[0.85] top-[13px] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[0.85] peer-focus:-translate-y-2.5 peer-focus:left-md truncate max-w-[calc(100%-(16px*2))] text-gray-500">
						{label}
					</label>
				</div>
			</div>
		</>
	)

}

export default TextArea;
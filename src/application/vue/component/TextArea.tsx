import { ChangeEvent } from "react";

interface TextAreaProps {
  value: string | number | readonly string[] | undefined;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  required: boolean;
  label: string;
}

const TextArea = ({ id, value, onChange, required, label }: TextAreaProps) => {
  return (
    <>
      <div
        className="flex w-full overflow-hidden rounded-md border-2 border-solid
            border-neutral-100 bg-neutral-100 transition duration-75 ease-out focus-within:ring-2
            focus-within:ring-black focus-within:ring-offset-2 hover:border-neutral-200"
      >
        <div className="relative grow">
          <textarea
            className="peer block w-full resize-none rounded-[8px] bg-transparent p-4 pt-2 text-sm leading-[48px] !tracking-normal text-black placeholder-transparent !outline-none transition duration-75 ease-out placeholder:leading-[48px]"
            aria-invalid="false"
            id={id}
            onChange={onChange}
            value={value}
            required={required}
            cols={10}
          ></textarea>

          <label
            htmlFor={id}
            className="peer-focus:left-md pointer-events-none absolute left-4 top-[13px] max-w-[calc(100%-(16px*2))] origin-[0] -translate-y-2.5 scale-[0.85] transform truncate text-sm !tracking-normal text-gray-500 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2.5 peer-focus:scale-[0.85]"
          >
            {label}
          </label>
        </div>
      </div>
    </>
  );
};

export default TextArea;

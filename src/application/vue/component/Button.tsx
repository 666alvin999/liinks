import { EventHandler } from "react";

interface ButtonProps {
  type: "submit" | "button" | undefined;
  text: string;
  children?: React.ReactNode;
  position?: "left" | "right";
  onClick?: EventHandler<never>;
}

function Button({ onClick, type, text, children, position }: ButtonProps) {
  if (type === "submit") {
    return (
      <button
        type={type}
        className="relative mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-purple-600 px-4 text-white antialiased outline-none transition duration-75 ease-out hover:border-neutral-200 hover:bg-neutral-100 focus-visible:outline-neutral-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 active:bg-purple-800"
      >
        {position === "left" ? children : ""}
        <span className="text-md block font-semibold">{text}</span>
        {position === "right" ? children : ""}
      </button>
    );
  } else {
    return (
      <button
        type={type}
        className="relative mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-purple-600 px-4 text-white antialiased outline-none transition duration-75 ease-out hover:border-neutral-200 hover:bg-neutral-100 focus-visible:outline-neutral-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 active:bg-purple-800"
        onClick={onClick}
      >
        {position === "left" ? children : ""}
        <span className="text-md block font-semibold">{text}</span>
        {position === "right" ? children : ""}
      </button>
    );
  }
}

export default Button;

interface ButtonProps {
    type: "submit" | "reset" | "button" | undefined;
    text: string;
    children?: React.ReactNode;
    position?: "left" | "right";
}
  
function Button({ type, text, children, position }: ButtonProps) {
    return (
        <button className="inline-flex justify-center items-center gap-2 relative transition duration-75 ease-out w-full h-12 px-4 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-purple-600 text-white mt-8 hover:bg-purple-800 active:bg-purple-800" type={type}>
            {position === "left" ? children : "" }
            <span className="block font-semibold text-md">{text}</span>
            {position === "right" ? children : "" }
        </button>
    );
}

export default Button
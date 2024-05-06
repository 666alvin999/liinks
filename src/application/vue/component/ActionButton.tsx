interface ActionButtonProps {
	buttonChild: React.ReactNode;
	type: "submit" | "reset" | "button" | undefined;
	onClick?: () => void;
}

const ActionButton = ({buttonChild, type, onClick}: ActionButtonProps) => {

	return (
		<div className="flex flex-col justify-center items-center gap-2">
			{
				type === "submit" &&
				<button type={type} className="bg-white h-14 aspect-square flex justify-center items-center rounded-md">
					{buttonChild}
				</button>
			}

			{
				type !== "submit" &&
				<button type={type} className="bg-white h-14 aspect-square flex justify-center items-center rounded-md"
						onClick={onClick}>
					{buttonChild}
				</button>
			}
		</div>
	)

}

export default ActionButton;
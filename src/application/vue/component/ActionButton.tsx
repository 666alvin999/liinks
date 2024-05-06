interface ActionButtonProps {
  buttonChild: React.ReactNode;
  type: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  className?: string;
}

const ActionButton = ({
  buttonChild,
  type,
  onClick,
  className
}: ActionButtonProps) => {
  return (
    <>
      {type === "submit" && (
        <button
          type={type}
          className={
            "flex aspect-square h-14 items-center justify-center rounded-md bg-white hover:border-neutral-200 hover:bg-neutral-100 focus-visible:outline-neutral-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2" +
            className
          }
        >
          {buttonChild}
        </button>
      )}

      {type !== "submit" && (
        <button
          type={type}
          className={
            "flex aspect-square h-14 items-center justify-center rounded-md bg-white hover:border-neutral-200 hover:bg-neutral-100 focus-visible:outline-neutral-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 " +
            className
          }
          onClick={onClick}
        >
          {buttonChild}
        </button>
      )}
    </>
  );
};

export default ActionButton;

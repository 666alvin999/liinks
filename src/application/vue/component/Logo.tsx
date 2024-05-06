import {XrayView} from "iconoir-react";

interface LogoProps {
	position: "left" | "right";
	color?: string;
	text?: string;
}

function Logo({position, color, text}: LogoProps) {

	return (
		<a className={`absolute z-50 top-11 lg:top-12 ${position}-12 text-xl lg:text-2xl font-medium inline-flex justify-center items-center gap-2`} href="/">
			<span className={"block"}>{text ? text : "Liiinks"}</span>
			<XrayView color={color ? color : "#4ade80"} />
		</a>
	);

}

export default Logo
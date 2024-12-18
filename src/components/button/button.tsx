import { MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface Button {
	onclick?: MouseEventHandler<HTMLButtonElement>;
	text: string;
	active: string;
}

export default function Button({ text, onclick, active }: Button) {
	return (
		<button
			onClick={onclick}
			className={`${text === "Sign up" ? styles.button_active : styles.button}`}
		>
			{text}
		</button>
	);
}

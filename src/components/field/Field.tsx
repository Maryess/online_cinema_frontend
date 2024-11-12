import { FormEventHandler } from "react";
import styles from "./Field.module.css";

interface Field {
	placeholder: string;
	type: string;
	text?: string;
	onChange?: FormEventHandler<HTMLInputElement>;
	onSubmit?:FormEventHandler<HTMLInputElement>;
}

export default function Field({ placeholder, type, text, onChange,onSubmit }: Field) {
	return (
		<div>
			<input
				className={styles.field}
				type={type}
				onChange={onChange}
				onSubmit={onSubmit}
				placeholder={placeholder}
			>
				{text}
			</input>
		</div>
	);
}

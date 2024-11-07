import styles from "./Field.module.css";

interface Field {
	placeholder: string;
	type: string;
	text?: string;
	onChange?: React.FormEvent<HTMLInputElement>;
	onSubmit?: React.FormEvent<HTMLInputElement>;
}

export default function Field({ placeholder, type, text, onChange }: Field) {
	return (
		<div>
			<input
				className={styles.field}
				type={type}
				onChange={onChange}
				placeholder={placeholder}
			>
				{text}
			</input>
		</div>
	);
}

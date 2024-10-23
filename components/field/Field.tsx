import styles from './Field.module.css';

interface Field {
	placeholder: string;
	type: string;
	text?: string;
}

export default function Field({ placeholder, type, text }: Field) {
	return (
		<div>
			<input className={styles.field} type={type} placeholder={placeholder}>
				{text}
			</input>
		</div>
	);
}

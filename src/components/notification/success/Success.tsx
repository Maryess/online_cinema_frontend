import styles from "./Success.module.css";

interface Success {
	text: string;
}

export default function Success({ text }: Success) {
	return <div className={styles.success}>{text}</div>;
}

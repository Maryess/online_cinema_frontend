import { FC } from "react";
import styles from "./Info.module.scss";

const Description: FC<{ description: string }> = ({ description }) => {
	return <div className={styles.description}>{description}</div>;
};

export default Description;

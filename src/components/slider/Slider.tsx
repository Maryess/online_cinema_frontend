import styles from "./Slider.module.css";
interface Slider {
	pathToImg?: string;
}

export const Slider = ({ pathToImg }: Slider) => {
	// const [currentIndex, setCurrentIndex] = useState<number>(0);

	// const [isHovered, setIsHovered] = useState<boolean>(false);

	// const prevSlide = (): void => {
	// 	setCurrentIndex(
	// 		(prevIndex) => (prevIndex - 1 + dataImages.length) % dataImages.length
	// 	);
	// 	console.log(currentIndex);
	// };

	// const nextSlide = (): void => {
	// 	setCurrentIndex((prevIndex) => (prevIndex + 1) % dataImages.length);
	// 	console.log(currentIndex);
	// };

	return (
		<div className={styles.slider}>
			<div className={styles.content}>
				<div className={styles.element}></div>
				<div className={styles.element}></div>
				<div className={styles.element}></div>
				<div className={styles.element}></div>
				<div className={styles.element}></div>
			</div>
		</div>
	);
};

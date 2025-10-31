import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode, useRef } from "react";
import { IGalleryItem } from "./gallery.interface";
import styles from "./Gallery.module.scss";

interface TiltProps {
	children: ReactNode;
	className?: string;
}

const GalleryItem: FC<IGalleryItem> = ({ poster, url, name }) => {
	const frameRef = useRef<HTMLDivElement | null>(null);

	const handleMouseLeave = () => {
		const element = frameRef.current;
		gsap.to(element, {
			duration: 0.3,
			rotateX: 0,
			rotateY: 0,
			ease: "power1.inOut",
		});
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = e;
		const element = frameRef.current;

		if (!element) return;

		const rect = element.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -30;
		const rotateY = ((x - centerX) / centerX) * 30;

		gsap.to(element, {
			duration: 0.3,
			rotateX,
			rotateY,
			transformPerspective: 500,
			ease: "power1.inOut",
		});
	};

	return (
		<Link href={url}>
			<Image
				ref={frameRef}
				onMouseLeave={handleMouseLeave}
				onMouseUp={handleMouseLeave}
				onMouseEnter={handleMouseLeave}
				onMouseMove={handleMouseMove}
				src={poster}
				height={80}
				width={100}
				alt={name || ""}
			/>
			<div className={styles.title}></div>
		</Link>
	);
};

export default GalleryItem;


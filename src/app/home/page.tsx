"use client";

import styles from "@/src/assets/home.module.css";
import { Slider } from "@/src/components/slider/Slider";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
	const [data, setData] = useState(null);
	const router = useRouter();

	return (
		<div className={styles.container}>
			<div className={styles.popular}>
				<div
					onClick={() => router.push("/movie")}
					className={styles.movie}
				></div>
				<div className={styles.actor}></div>
			</div>
			<div className={styles.list}>
				<Slider />
			</div>
		</div>
	);
}

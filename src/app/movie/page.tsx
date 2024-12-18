"use client";

import styles from "@/src/assets/movie.module.css";
import { Slider } from "@/src/components/slider/Slider";
import axiosInstance from "@/src/lib/axiosInstance";
import { useEffect, useState } from "react";

export default function Movie() {
	const [newData, setData] = useState(null);

	useEffect(() => {
		axiosInstance
			.get("/movie")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(`Error: ${error}`);
			});
	});

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.img_movie}></div>
			</div>
			<div className={styles.info}>
				dfsfdsgsgsgsd gdsg dsg sg sdg gd hgfh fhdgsf g d dfsfdsgsgsgsd gdsg dsg
				sg sdg gd hgfh fhdgsf g d dfsfdsgsgsgsd gdsg dsg sg sdg gd hgfh fhdgsf g
				d dfsfdsgsgsgsd gdsg dsg sg sdg gd hgfh fhdgsf g d dfsfdsgsgsgsd gdsg
				dsg sg sdg gd hgfh fhdgsf g d dfsfdsgsgsgsd gdsg dsg sg sdg gd hgfh
				fhdgsf g d
			</div>
			<div className={styles.actors}>
				<Slider />
			</div>
		</div>
	);
}

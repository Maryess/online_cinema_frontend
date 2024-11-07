"use client";

import styles from "@/src/assets/movie.module.css";
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
		<div>
			{newData ? (
				<div className={styles.container}>{newData}</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
}

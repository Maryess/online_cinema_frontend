"use client";

import axiosInstance from "@/src/lib/axiosInstance";
import { useEffect, useState } from "react";

export default function Home() {
	const [data, setData] = useState(null);

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

	return <div>{data ? JSON.stringify(data) : <p>Loading...</p>}</div>;
}

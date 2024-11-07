"use client";

import { useState } from "react"

export default function Home() {
	const [data, setData] = useState(null);

	return <div>{data ? JSON.stringify(data) : <p>Loading...</p>}</div>;
}

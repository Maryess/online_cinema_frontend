"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "../../assets/home.module.css";
import stars from "../../public/icons/stars.svg";
import emma from "../../public/images/actors/emma.jpg";
import enkanto from "../../public/images/movies/enkanto.png";
import vampire_diaries from "../../public/images/movies/vampire-diaries.jpg";

export default function Home() {
	const [data, setData] = useState(null);

	return (
		<div>
			<main>
				<div>
					The popularity with 5
					<span>
						<Image src={stars} alt="stars" />
					</span>
				</div>
				<div className={styles.slider}>
					<Image src={enkanto} alt="Enkanto-movie" />
				</div>
				<Image src={emma} alt="Emma-act" />
				<div>
					<Image src={vampire_diaries} alt="vamipe_diarires-movie" />
					{/* array from db	 */}
				</div>
			</main>
		</div>
	);
}

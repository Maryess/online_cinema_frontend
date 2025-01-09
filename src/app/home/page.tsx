// "use client";

// import styles from "@/src/assets/home.module.css";
// import { Slider } from "@/src/components/slider/Slider";
// import axiosInstance from "@/src/lib/axiosInstance";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function Home() {
// 	const [data, setData] = useState(null);
// 	const router = useRouter();
// 	const [movies, setMovies] = useState<any[]>([]);

// 	useEffect(() => {
// 		axiosInstance
// 			.get("/movie")
// 			.then((response) => {
// 				setMovies(response.data);

// 			})
// 			.catch((error) => {
// 				console.log(`Error: ${error}`);
// 			});
// 	},[]);

// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.popular}>
// 				<div
// 					onClick={() => router.push("/movie")}
// 					className={styles.movie}
// 				>
// 						{movies.map((movie:any)=>{
// 						<div key={movie.id}>
// 							{movie.name}
// 						</div>	 
// 					})}

// 				</div>
// 				<div className={styles.actor}></div>
// 			</div>
// 			<div className={styles.list}>
// 				<Slider />
// 			</div>
// 		</div>
// 	);
// }

"use client";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/src/lib/axiosInstance";

export default function  Home()  {
  const [movieData, setData] = useState<any[]>([]);

  useEffect(() => {
    axiosInstance.get("/movie").then((response) => {
      console.log(response);
      setData(response.data);
    });
  }, []);

  return (
    <div>
      {movieData.map((data: any, index: number) => {
        return <p key={index}>{data.name}</p>;
      })}
    </div>
  );
};

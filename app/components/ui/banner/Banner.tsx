import { FC } from "react";
import styles from "./Banner.module.scss";
import Image from "next/image";
import Info from "./Info/Info";
import { IBanner } from "./banner.interface";

const Banner: FC<IBanner> = ({ type, imagePath, info }) => {
	if (type === "movie") {
		return (
			<div className={styles.bannerMovie}>
				<Image
					alt={info.title}
					src={`${imagePath}`}
					layout="fill"
					draggable={false}
					unoptimized
					priority
				/>
				<Info
					type="movie"
					title={info.title}
					genres={info.genres || []}
					actors={info.actors || []}
					description={info.description}
				/>
			</div>
		);
	}

	// Для актера
	return (
		<div className={styles.bannerActor}>
			<div className={styles.photo}>
				<Image
					alt={info.title}
					src={`${imagePath}`}
					height={140}
					width={140}
					draggable={false}
					unoptimized
					priority
					className={styles.photoImage}
				/>
			</div>
			<div className={styles.actorInfo}>
				<h3 className={styles.actorName}>{info.title}</h3>
				<p className={styles.actorDetails}>
					{info.genres && info.genres.length > 0 && (
						<>
							<strong>Жанры: </strong> {info.genres.join(", ")}
							<br />
						</>
					)}
					{info.actors && info.actors.length > 0 && (
						<>
							<strong>Известен с: </strong> {info.actors.join(", ")}
							<br />
						</>
					)}
					{/* Можно добавить больше деталей, если нужно */}
				</p>
				<p className={styles.actorDescription}>{info.description}</p>
			</div>
		</div>
	);
};

export default Banner;


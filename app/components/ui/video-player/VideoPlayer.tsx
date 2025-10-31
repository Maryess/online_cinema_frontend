import { FC } from "react";
import styles from "./VideoPlayer.module.scss";
import { IVideoPlayer } from "./video-player.interface";
import { useVideo } from "./useVideo";
import { useAuth } from "hooks/useAuht";
import AuthPlaceholder from "./AuthPlaceholder/AuthPlaceholder";
import MaterialIcon from "../MaterialIcon";

const VideoPlayer: FC<IVideoPlayer> = ({
	slug,
	videoSource,
	subtitleSource,
}) => {
	const {
		videoRef,
		toggleVideo,
		progress,
		isPlaying,
		forward,
		revert,
		formatVideoTime,
		formatCurrentTime,
		fullScreen,
	} = useVideo();

	const { user } = useAuth();
	// console.log(subtitleSource);
	return (
		<div className={styles.videoPlayer}>
			{user ? (
				<>
					<video
						className={styles.video}
						ref={videoRef}
						src={`${videoSource}#t=0.5`}
						preload="metadata"
					>
						{/* <track
							src={subtitleSource}
							kind="subtitles"
							srcLang="en"
							label="English"
							default
						/> */}
					</video>

					<div className={styles.videoFooter}>
						<div className={styles.progress}>
							<div
								className={styles.progressBar}
								style={{ width: `${progress}%` }}
							/>
						</div>

						<div className={styles.actions}>
							<div className={styles.buttons}>
								<button onClick={revert}>
									<MaterialIcon name="MdHistory" />
								</button>
								<button onClick={toggleVideo}>
									<MaterialIcon name={isPlaying ? "MdPause" : "MdPlayArrow"} />
								</button>
								<button onClick={forward}>
									<MaterialIcon name="MdUpdate" />
								</button>

								<div className={styles.time}>
									<p>{formatCurrentTime}</p>
									<p>/</p>
									<p>{formatVideoTime}</p>
								</div>
							</div>

							<div className={styles.buttons}>
								<button onClick={fullScreen}>
									<MaterialIcon name="MdFullscreen" />
								</button>
							</div>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	);
};

export default VideoPlayer;


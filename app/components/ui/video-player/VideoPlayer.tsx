import { FC } from 'react'
import styles from './VideoPlayer.module.scss'
import { IVideoPlayer } from './video-player.interface'
import { useVideo } from './useVideo'
import { useAuth } from 'hooks/useAuht'
import { DiVim } from 'react-icons/di'
import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import MaterialIcon from '../MaterialIcon'

const VideoPlayer:FC<IVideoPlayer> = ({slug,videoSource}) => {

    const {videoRef, currentTime,videoTime,toggleVideo,
    progress,isPlaying,forward,revert,fullScreen,
    formatVideoTime, formatCurrentTime
    } = useVideo()

    const {user} = useAuth()

  return (
    <div className={styles.videoPlayer}>
        {user? 
        <div>
            <video className={styles.video} ref={videoRef} src={`${videoSource}#t=0.5`}
            preload='metadata'
            />
           <div className={styles.progress}>
						<div
							style={{ width: `${progress}%` }}
							className={styles.progressBar}
						/>
				</div>
            <div className={styles.actions}>
                <div className={styles.buttons}>
                    <button onClick={revert}>
                        <MaterialIcon name='MdHistory'/>
                    </button>
                    <button onClick={toggleVideo}>
                        {
                            isPlaying ?  <MaterialIcon name='MdPause'/> :
                             <MaterialIcon name='MdPlayArrow'/>
                        }
                    </button>
                    <button onClick={forward}>
                        <MaterialIcon name='MdUpdate'/>
                    </button>
                </div>
                <div className={styles.time}>
                        <p>{formatCurrentTime}</p>
                        <p>/</p>
                        <p>{formatVideoTime}</p>
                </div>
            </div>
        </div> : <AuthPlaceholder slug={slug}/>}
    </div>
  )
}

export default VideoPlayer
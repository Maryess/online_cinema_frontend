import { FC } from 'react'
import styles from './VideoPlayer.module.scss'
import { IVideoPlayer } from './video-player.interface'
import { useVideo } from './useVideo'
import { useAuth } from 'hooks/useAuht'
import { DiVim } from 'react-icons/di'
import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import MaterialIcon from '../MaterialIcon'

const VideoPlayer:FC<IVideoPlayer> = ({slug,videoSource}) => {
    console.log("videoSource:", videoSource); // Добавьте это
  const {videoRef, currentTime,videoTime,toggleVideo,
    progress,isPlaying,forward,revert,fullScreen} = useVideo()

    const {user} = useAuth()

  return (
    <div>
        {user? <div>
            <video className={styles.video} ref={videoRef} src={`/${videoSource}#t=8`}
            preload='metadata'
            />
            <div style={{width:`${progress}%`}}></div>
            <div>
                <div>
                    <button onClick={revert}>
                        <MaterialIcon name='MdHistory'/>
                    </button>
                    <button onClick={toggleVideo}>
                        <MaterialIcon name='MdPause'/>
                    </button>
                    <button onClick={forward}>
                        <MaterialIcon name='MdUpdate'/>
                    </button>
                </div>
                <div>

                </div>
            </div>
        </div> : <AuthPlaceholder slug={slug}/>}
    </div>
  )
}

export default VideoPlayer
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { IVideoElement } from "./video-player.interface";

export const useVideo = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<IVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      setVideoTime(videoRef.current.duration || 0);
    }
  }, [videoRef]);

  const toggleVideo = useCallback(() => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isPlaying]);

  const forward = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
      if (videoRef.current.currentTime > videoTime) {
        videoRef.current.currentTime = videoTime;
      }
    }
  }, [videoTime]);

  const revert = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
      if (videoRef.current.currentTime < 0) {
        videoRef.current.currentTime = 0;
      }
    }
  }, []);

  const fullScreen = useCallback(() => {
    const video = videoRef.current;

    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      } else if (video.mozRequestFullscreen) {
        video.mozRequestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      }
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateProgress = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / videoTime) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [videoTime]);

  useEffect(() => {
    const keyBoard = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          forward();
          break;
        case "ArrowLeft":
          revert();
          break;
        case " ":
          e.preventDefault();
          toggleVideo();
          break;
        case "f":
          fullScreen();
          break;
        default:
          return;
      }
    };

    document.addEventListener("keydown", keyBoard);

    return () => {
      document.removeEventListener("keydown", keyBoard);
    };
  }, [toggleVideo, forward, revert, fullScreen]);

  return useMemo(
    () => ({
      videoRef,
      currentTime,
      videoTime,
      isPlaying,
      toggleVideo,
      progress,
      forward,
      revert,
      fullScreen,
    }),
    [
      videoRef,
      currentTime,
      videoTime,
      isPlaying,
      toggleVideo,
      progress,
      forward,
      revert,
      fullScreen,
    ]
  );
};
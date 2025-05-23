export interface IVideoPlayer {
	slug: string;
	videoSource: string;
	subtitleSource: string;
}

export interface IVideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void;
	mozRequestFullscreen?: () => void;
	webkitRequestFullscreen?: () => void;
}

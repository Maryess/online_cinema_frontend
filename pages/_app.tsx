import { AppProps } from "next/app";
import styles from '../styles/global.scss'

export default function App({
	Component,
	pageProps
}:AppProps) {
	return (
		<Component {...pageProps}/>
	);
}
import { AppProps } from "next/app";
import  '../styles/global.scss'
import { QueryClient, QueryClientProvider } from "react-query";
import MainProvider from "providers/MainProvider";

export default function App({
	Component,
	pageProps
}:AppProps) {
	return (
		<MainProvider>
			<Component {...pageProps}/>
		</MainProvider>
	);
}
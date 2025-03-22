import { AppProps } from "next/app";
import  '../styles/global.scss'
import { QueryClient, QueryClientProvider } from "react-query";
import MainProvider from "providers/MainProvider";
import { TypeComponentAuthFields } from "shared/types/auth.types";

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function App({
	Component,
	pageProps
}:TypeAppProps) {
	return (
		<MainProvider Component={Component}> 
			<Component {...pageProps}/>
		</MainProvider>
	);
}
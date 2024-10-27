import { SessionProvider } from "next-auth/react";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider
			session={session}
			basePath="http://localhost:4200/api/auth"
		>
			<Component {...pageProps} />
		</SessionProvider>
	);
}

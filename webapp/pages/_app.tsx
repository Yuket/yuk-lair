import { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import { css, Global } from "@emotion/react";

const globalStyles = (
	<Global
		styles={css`
			html,
			body {
				padding: 3rem 1rem;
				margin: 0;
				min-height: 100%;
				font-family: "Montserrat", sans-serif;
				font-size: 1.5rem;
			}
		`}
	/>
);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CacheProvider value={cache}>
			{globalStyles}
			<Component {...pageProps} />
		</CacheProvider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async appContext => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext)

//   return { ...appProps }
// }

export default MyApp;

import { Global, css } from "@emotion/react";
import { AppProps } from "next/app";
import globalStyles from "../src/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={css(globalStyles)} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

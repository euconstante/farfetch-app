// pages/_app.tsx

import React from "react";
import { AppProps } from "next/app";
import { css, Global } from "@emotion/react";
import globalStyles from "../src/styles/global";
import Layout from "../src/components/Layout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={css(globalStyles)} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;

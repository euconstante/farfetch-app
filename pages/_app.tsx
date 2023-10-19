import React from "react";
import { AppProps } from "next/app";
import { css, Global } from "@emotion/react";
import Layout from "@/components/Layout";

import globalStyles from "@/styles/global";
import "@/styles/design_tokens.css";

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

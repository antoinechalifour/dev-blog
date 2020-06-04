import "reset.css/reset.css";

import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import { PageLayout } from "@/components/PageLayout/PageLayout";
import { Theme } from "@/components/Theme/Theme";

const BlogApp: React.FC<AppProps> = ({ Component, pageProps, router }) => (
  <Theme>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />
    </Head>

    <PageLayout>
      <Component {...pageProps} key={router.pathname} />
    </PageLayout>
  </Theme>
);

export default BlogApp;

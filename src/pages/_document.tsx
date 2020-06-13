import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

const BLOG_TITLE = "Blog | Antoine Chalifour";
const BLOG_DESCRIPTION =
  "Contenu tech par Antoine Chalifour : réflexions sur le développement Web et les bonnes pratiques";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta name="robots" content="index, follow" />
          <meta name="description" content={BLOG_DESCRIPTION} />
          <meta property="og:url" content="https://blog.antoinechalifour.dev" />
          <meta property="og:title" content={BLOG_TITLE} />
          <meta property="og:description" content={BLOG_DESCRIPTION} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:creator" content="@Antoine_Chlfr" />
          <meta name="twitter:title" content={BLOG_TITLE} />
          <meta name="twitter:description" content={BLOG_DESCRIPTION} />

          {process.env.GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GA_TRACKING_ID}');
                    `,
                }}
              />
            </>
          )}
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import Document, { Head, Main, NextScript, Html } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import isProduction from "lib/is-production";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
        </Head>
        <body>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

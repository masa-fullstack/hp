import { Box } from "@chakra-ui/react";
import siteConfig from "config/site";
import * as gtag from "lib/gtag";
import isProduction from "lib/is-production";
import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect } from "react";

const Layout = dynamic(
  import(/* webpackChunkName: "Layouts" */ "components/layouts")
);
const Navbar = dynamic(
  import(/* webpackChunkName: "Navbar" */ "components/navbar")
);
const Footer = dynamic(
  import(/* webpackChunkName: "Footer" */ "components/footer")
);

declare global {
  interface Window {
    gtag: any;
  }
}

export function reportWebVitals({ id, name, label, value }) {
  if (isProduction && window.gtag) {
    window.gtag("send", "event", {
      eventCategory:
        label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
      eventAction: name,
      eventValue: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      eventLabel: id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate.
    });
  }
}

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (isProduction) {
      const handleRouteChange = (url: string) => {
        gtag.pageview(url);
      };

      Router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
        Router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, []);

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={siteConfig.assets.favicon} type="image/png" />
        <link rel="preload" as="image" href="(/images/common/hero.jpeg" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="preload"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NextSeo
        title={`${siteConfig.details.title} - ${siteConfig.details.tagLine}`}
        description={siteConfig.details.description}
        twitter={{
          handle: siteConfig.socialLinks.twitter,
          site: siteConfig.socialLinks.twitter,
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: siteConfig.details.url,
          title: siteConfig.details.title,
          description: siteConfig.details.description,
          images: [
            {
              url: `${siteConfig.details.url}${siteConfig.assets.avatar}`,
              width: 800,
              height: 600,
              alt: siteConfig.details.title,
            },
          ],
          site_name: siteConfig.details.title,
          type: "website",
          locale: "ja",
        }}
      />
      <Navbar />
      <Box minH="calc(100vh - 77px - 148px)">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </Layout>
  );
};

export default PortfolioApp;

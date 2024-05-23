import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Durant Family Charitable Foundation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="durant family foundation, tv" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="DFF Owners" />
        <meta name="theme-color" content="#6F54A4" />
        <meta property="og:title" content="Durant Family Foundation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://durantfamilyfoundation.org/" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="description" property="og:description" content="The Durant Family Foundation's Website."/>
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <script src="/scripts/main.js" defer />
      
      <div className="header">
        <div className="logo"></div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/bio">Bio</Link>
        </div>
      </div>

      <div className="loader">
        <div className="loaderImage">
          <img src="/media/DFF-Shield.webp" />
        </div>
      </div>
      
      <Component {...pageProps} />
    </>
  );
}

import { JSX } from "react";
import Head from "next/head";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>MyTop - наш лучший топ</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="use-credentials"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

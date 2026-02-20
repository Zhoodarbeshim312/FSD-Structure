"use client";
import { AppProps } from "next/app";
import ReactQueryProvider from "@/app/providers/ReactQueryProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <Component {...pageProps} />
    </ReactQueryProvider>
  );
}

export default MyApp;

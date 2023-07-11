import { AppProps } from "next/app";
import "../styles/index.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_GA}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-${process.env.NEXT_PUBLIC_GA}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

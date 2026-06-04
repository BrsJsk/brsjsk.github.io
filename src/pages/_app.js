import '../styles/global.scss';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gaId="G-HJQM65FMC5" />
      <Component {...pageProps} />
    </>
  );
}

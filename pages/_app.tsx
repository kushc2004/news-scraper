// app/_app.tsx or pages/_app.tsx (depending on your structure)

import '@/public/globals.css'; // Import your global styles
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome CSS
import '../lib/fontawesome'; // Import the configuration file

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

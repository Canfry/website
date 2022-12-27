import Layout from '../components/Layout';
import '../styles/globals.css';

import { Titillium_Web } from '@next/font/google';

const titillium = Titillium_Web({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout className={titillium.className}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

import Footer from './Footer';
import Header from './Header';
import styles from '../styles/Layout.module.css';

import { Titillium_Web } from '@next/font/google';

const titillium = Titillium_Web({
  weight: ['200', '300', '400', '600', '700'],
  subsets: ['latin'],
});

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <Header className={titillium.className} />
      <main className={styles.mainLayout}>{children}</main>
      <Footer />
    </div>
  );
}

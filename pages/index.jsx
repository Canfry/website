import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>AnfryDev</title>
        <meta name='description' content='My personal Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={styles.container}>
        <main className={styles.mainContainer}>
          <div className={styles.mainHeader}>
            <h1 className={styles.header}>Hi, I&apos;m Christophe Anfry,</h1>
            <h2>
              I build <span>websites</span> and <span>web applications</span>.
            </h2>
            <p>
              I&apos;m a fullstack developer who turns your projects/business
              into digital content.
            </p>
            <div className={styles.btnContainer}>
              <button
                onClick={() => router.push('/work')}
                className={styles.btnWork}
              >
                See my work
              </button>
              <button
                onClick={() => router.push('/about')}
                className={styles.btnLearn}
              >
                Learn More
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

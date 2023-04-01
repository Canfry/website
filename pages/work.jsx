import Head from 'next/head';
import styles from '../styles/Work.module.css';
import Link from 'next/link';

export default function work() {
  return (
    <>
      <Head>
        <title>Work page</title>
        <meta name='description' content='My work' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={styles.workContainer}>
        <div className={styles.heading}>
          <h1>MY WORK</h1>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.coverImg}></div>
            <div className={styles.cardDescription}>
              <h1 className={styles.descriptionHeader}>My personal blog</h1>
              <p>
                Creation of my personal blog, using Astro framework and
                Tailwindcss.
              </p>
            </div>
            <div className={styles.tagLinks}>
              <div className={styles.languageTags}>
                <Link
                  href='https://astro.build/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Astro
                </Link>
                <Link
                  href='https://tailwindcss.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Tailwindcss
                </Link>
              </div>
              <div className={styles.externalLinks}>
                <Link
                  href='https://fryblog.netlify.app'
                  target='_blank'
                  rel='noreferrer'
                >
                  Blog
                </Link>
                <Link
                  href='https://github.com/Canfry/blog'
                  target='_blank'
                  rel='noreferrer'
                >
                  Repo
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.coverImg}> </div>
            <div className={styles.cardDescription}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                cum sunt aut fugiat nulla explicabo sint laborum iure? Corporis,
                cupiditate.
              </p>
            </div>
            <div>
              <ul>
                <li>MongoDB</li>
                <li>Nextjs</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.coverImg}></div>
            <div className={styles.cardDescription}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                cum sunt aut fugiat nulla explicabo sint laborum iure? Corporis,
                cupiditate.
              </p>
            </div>
            <div>
              <ul>
                <li>Nestjs</li>
                <li>React</li>
                <li>PlanetScale</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

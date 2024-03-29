import styles from '../styles/About.module.css';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { SiHashnode } from 'react-icons/si';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function About() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name='description' content='About me' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={styles.aboutContainer}>
        <h1>
          My name is Christophe Anfry, I&apos;m 40 and I&apos;m a fullstack
          developer. I started 3 years ago learning web development. For most of
          the people COVID-19 has been a negative experience, but for me, it has
          been a rebirth. I took the opportunity to think about learning
          something new and that I love. I&apos;ve worked before as a technical
          support for Google Workspace, and was interested in learning
          programmimg stuff. At this time I had no time for that, so when we
          have been confined at home I took my chance and started learning HTML,
          CSS and Javascript. The more I was learning the more I wanted to
          learn, and to make it my principal job. I&apos;ve been always working
          for customers and my joy is the customer satisfaction. Now, I&apos;m
          comfortable with frontend and backend, and ready to create wonderful
          projects for you.
        </h1>

        <p>FOLLOW ME ON :</p>
        <div className={styles.socialMedia}>
          <Link
            href={'https://github.com/Canfry'}
            target='_blank'
            rel='noreferrer'
            className={styles.github}
          >
            <BsGithub />
          </Link>

          <Link
            href={'https://twitter.com/ChristopheAnfry'}
            target='_blank'
            rel='noreferrer'
            className={styles.twitter}
          >
            <BsTwitter />
          </Link>
          <Link
            href={'https://fryblog.hashnode.dev/'}
            target='_blank'
            rel='noreferrer'
            className={styles.hashnode}
          >
            <SiHashnode />
          </Link>
        </div>
        <div className={styles.btnContainer}>
          <button
            onClick={() => router.push('/contact')}
            className={styles.contact}
          >
            Contact me
          </button>
        </div>
      </div>
    </>
  );
}

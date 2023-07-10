import Head from 'next/head';
import styles from '../styles/Work.module.css';
import Card from '../components/Card';

import { projects } from '../projects';

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
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}

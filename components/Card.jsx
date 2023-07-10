import Link from 'next/link';
import styles from '../styles/Card.module.css';

export default function Card({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.coverImg}></div>
      <div className={styles.cardDescription}>
        <h1 className={styles.descriptionHeader}>{project.header}</h1>
        <p>{project.description}</p>
      </div>
      <div className={styles.tagLinks}>
        <div className={styles.externalLinks}>
          <Link
            href={project.website}
            target='_blank'
            rel='noreferrer'
            className={styles.blog}
          >
            <button>Website</button>
          </Link>
          <Link
            href={project.repo}
            target='_blank'
            rel='noreferrer'
            className={styles.repo}
          >
            <button>Repo</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

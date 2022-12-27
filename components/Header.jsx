import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href='/'>
            <h1>
              Anfry<span>Dev</span>
            </h1>
          </Link>
        </div>
        <div>
          <ul className={styles.navContainer}>
            <li>
              <Link
                href='/'
                className={router.pathname === '/' && styles.active}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className={router.pathname === '/about' && styles.active}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/blog'
                className={router.pathname === '/blog' && styles.active}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={router.pathname === '/contact' && styles.active}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

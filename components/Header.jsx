import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href='/'>
            <h1>
              Anfry<span>Dev</span>
            </h1>
          </Link>
        </div>
        <div className={styles.navContainer}>
          <ul className={styles.navBar}>
            <li>
              <Link
                href='/'
                className={router.pathname === '/' ? styles.active : null}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className={router.pathname === '/about' ? styles.active : null}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/work'
                className={router.pathname === '/work' ? styles.active : null}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href='https://blog.anfrydev.com'
                target='_blank'
                rel='noreferrer'
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={
                  router.pathname === '/contact' ? styles.active : null
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {!isOpen ? (
          <button
            className={styles.menuIconButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiOutlineMenuAlt1 className={styles.menuIcon} />
          </button>
        ) : (
          <div className={styles.menuOpen}>
            <button className={styles.closeIconButton}>
              <AiOutlineClose
                className={styles.closeIcon}
                onClick={() => setIsOpen(!isOpen)}
              />
            </button>
            <ul className={styles.navBarMenu}>
              <li>
                <Link
                  href='/'
                  className={router.pathname === '/' ? styles.active : null}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className={
                    router.pathname === '/about' ? styles.active : null
                  }
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/work'
                  className={router.pathname === '/work' ? styles.active : null}
                  onClick={() => setIsOpen(false)}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href='https://fryblog.netlify.app'
                  className={router.pathname === '/blog' ? styles.active : null}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className={
                    router.pathname === '/contact' ? styles.active : null
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

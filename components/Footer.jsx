import styles from '../styles/Footer.module.css';

const date = new Date().getFullYear();

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h3>Copyright &copy; Christophe Anfry {date}</h3>
    </div>
  );
}

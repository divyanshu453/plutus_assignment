import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMoon}>🌙</span>
              MoonEX
            </Link>
          </div>

          <div className={styles.section}>
            <h4>About Us</h4>
            <Link href="#about">About</Link>
            <Link href="#features">Features</Link>
            <Link href="#faqs">FAQs</Link>
            <Link href="#contact">Contact Us</Link>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; 2024 MoonEX. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="#">𝕏</a>
            <a href="#">f</a>
            <a href="#">in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <h2>Ready to Explore?</h2>
        <p>Check out our users directory with live data and search functionality</p>
        <Link href="/users" className={styles.button}>
          View Users →
        </Link>
      </div>
    </section>
  );
}

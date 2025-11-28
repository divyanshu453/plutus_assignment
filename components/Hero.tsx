import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Trusted Multi-Chain <span className={styles.highlight}>DEX Platform</span>
          </h1>
          <p>
            Trade, earn, and engage on the ultimate multi-chain DEX
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>
              Get Started
            </button>
            <button className={styles.secondaryBtn}>
              Learn More
            </button>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.circle}></div>
          <div className={styles.stars}>
            <span className={styles.star1}>✦</span>
            <span className={styles.star2}>✦</span>
            <span className={styles.star3}>✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import styles from './WhyMoonEX.module.css';

export default function WhyMoonEX() {
  const comparison = [
    { feature: 'Configuration', moonex: true, uniswap: false },
    { feature: 'Fund to own Nft', moonex: true, uniswap: true },
    { feature: 'Fund to own Nft', moonex: true, uniswap: true },
    { feature: 'Fund to own Nft', moonex: true, uniswap: false },
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2>Why MoonEX?</h2>
        
        <div className={styles.comparisonTable}>
          <div className={styles.tableHeader}>
            <div className={styles.feature}>Features</div>
            <div className={styles.column}>
              <div className={styles.logoCell}>🌙 MoonEX</div>
            </div>
            <div className={styles.column}>
              <div className={styles.logoCell}>Uniswap</div>
            </div>
          </div>

          {comparison.map((item, i) => (
            <div key={i} className={styles.tableRow}>
              <div className={styles.feature}>{item.feature}</div>
              <div className={styles.column}>
                {item.moonex ? (
                  <span className={styles.checkmark}>✓</span>
                ) : (
                  <span className={styles.crossmark}>✕</span>
                )}
              </div>
              <div className={styles.column}>
                {item.uniswap ? (
                  <span className={styles.checkmark}>✓</span>
                ) : (
                  <span className={styles.crossmark}>✕</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

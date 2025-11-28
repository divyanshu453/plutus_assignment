import styles from './Features.module.css';

const features = [
  {
    icon: '💰',
    title: 'Cheapest Trs',
    description: 'Lorem Ipsum is simply dummy text of the printing',
  },
  {
    icon: '🔒',
    title: 'DAPP',
    description: 'Lorem Ipsum is simply dummy text of the printing',
  },
  {
    icon: '👥',
    title: 'No Contract Adds',
    description: 'Lorem Ipsum is simply dummy text of the printing',
  },
  {
    icon: '📞',
    title: 'Crossfire Support',
    description: 'Lorem Ipsum is simply dummy text of the printing',
  },
];

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <h2>
          Our <span className={styles.highlight}>Features</span>
        </h2>

        <div className={styles.grid}>
          {features.map((feature, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

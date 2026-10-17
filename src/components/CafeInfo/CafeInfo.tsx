import styles from './CafeInfo.module.css';

export default function CafeInfo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.description}>
        Please leave your feedback about our service!
      </p>
    </div>
  );
}
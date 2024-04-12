import styles from "./StatusMessage.module.scss";

function StatusMessage({ error }) {
  return (
    <section className={styles.error}>
      <p>{error}</p>
    </section>
  );
}

export default StatusMessage;

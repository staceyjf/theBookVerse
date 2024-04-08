import styles from "./ResultsContainer.module.scss";
import CardList from "../../components/CardList/CardList";

function ResultsContainer() {
  return (
    <section className={styles.results}>
      <div className={styles.container}>
        <CardList />
      </div>
    </section>
  );
}

export default ResultsContainer;

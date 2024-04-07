import styles from "./ResultsContainer.module.scss";
import BookList from "../../components/BookList/BookList";

function ResultsContainer() {
  return (
    <section className={styles.results}>
      <div className={styles.container}>
        <BookList />
      </div>
    </section>
  );
}

export default ResultsContainer;

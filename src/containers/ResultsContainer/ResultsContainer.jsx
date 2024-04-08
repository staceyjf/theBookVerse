import styles from "./ResultsContainer.module.scss";
import CardList from "../../components/CardList/CardList";

function ResultsContainer({ booksData }) {
  return (
    <section className={styles.results}>
      <div className={styles.container}>
        {booksData.map((bookData) => {
          return <CardList key={bookData.id} bookData={bookData} />;
        })}
      </div>
    </section>
  );
}

export default ResultsContainer;

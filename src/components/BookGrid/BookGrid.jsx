import styles from "./BookGrid.module.scss";
import Card from "../Card/Card";

function BookGrid({ booksData }) {
  return (
    <section className={styles.results}>
      <div className={styles.container}>
        {booksData.map((bookData) => {
          return <Card key={bookData.id} {...bookData} />;
        })}
      </div>
    </section>
  );
}

export default BookGrid;

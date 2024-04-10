import styles from "./BookGrid.module.scss";
import Card from "../Card/Card";

function BookGrid({ booksData }) {
  return (
    <section>
      <div className={styles.bookGrid_container}>
        {booksData.map((bookData) => {
          return <Card key={bookData.id} {...bookData} />;
        })}
      </div>
    </section>
  );
}

export default BookGrid;

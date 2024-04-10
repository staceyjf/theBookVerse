import Card from "../Card/Card";
import styles from "./BookGrid.module.scss";

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

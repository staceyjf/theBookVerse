import Card from "../Card/Card";
import styles from "./BookGrid.module.scss";

function BookGrid({ booksData, setBookId, setModalOpen }) {
  return (
    <section className={styles.bookGrid_section}>
      <div className={styles.bookGrid_container}>
        {booksData.map((bookData) => {
          return (
            <Card
              key={bookData.id}
              {...bookData}
              setBookId={setBookId}
              setModalOpen={setModalOpen}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BookGrid;

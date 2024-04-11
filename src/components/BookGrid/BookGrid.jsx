import Card from "../Card/Card";
import styles from "./BookGrid.module.scss";

function BookGrid({ booksData, setBookId, setOpenModal }) {
  return (
    <section className={styles.bookGrid_section}>
      <div className={styles.bookGrid_container}>
        {booksData.map((bookData) => {
          return (
            <Card
              key={bookData.id}
              {...bookData}
              setBookId={setBookId}
              setOpenModal={setOpenModal}
            />
          );
        })}
      </div>
    </section>
  );
}

export default BookGrid;

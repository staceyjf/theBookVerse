import styles from "./CardList.module.scss";
import Card from "../Card/Card";

function CardList({ booksData }) {
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

export default CardList;

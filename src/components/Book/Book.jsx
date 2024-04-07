import styles from "./Book.module.scss";

function Book() {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src="" alt="" />
      </div>
      <div className={styles.card_content}>
        <h3>Title</h3>
        <p>Book stuff</p>
        <p>Book stuff</p>
        <p>Book stuff</p>
        <button>More info</button>
      </div>
    </div>
  );
}

export default Book;

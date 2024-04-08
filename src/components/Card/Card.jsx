import styles from "./Card.module.scss";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src="" alt="" />
      </div>
      <div className={styles.card_content}>
        <p>Book stuff</p>
        <h3>Title</h3>
        <p>Book stuff</p>
        <p>Book stuff</p>
        <button>Discover</button>
      </div>
    </div>
  );
}

export default Card;

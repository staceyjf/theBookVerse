import styles from "./Card.module.scss";

function Card({ id, title, subtitle, authors, description, imgURL }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <img src={imgURL} alt="" />
      </div>
      <div className={styles.card_content}>
        <p>{authors}</p>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{description}</p>
        <button>Discover</button>
      </div>
    </div>
  );
}

export default Card;

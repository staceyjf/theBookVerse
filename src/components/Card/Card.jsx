import styles from "./Card.module.scss";

function Card({ id, title, subtitle, authors, description, imgURL }) {
  const truncateDescription = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  // how can i change the transaction  based on window sizes
  let shortenedDescription = description
    ? truncateDescription(description, 35)
    : "";

  return (
    <div className={styles.card}>
      <div className={styles.card_imgContainer}>
        <img src={imgURL} alt="" />
      </div>
      <div className={styles.card_wrapper}>
        <div className={styles.card_content}>
          {authors && authors.map((author) => <p key={author}>{author}</p>)}
          <h4>{title}</h4>
          {/* <p>{subtitle}</p> */}
          {shortenedDescription && <p>{shortenedDescription}</p>}
        </div>

        <button>Discover</button>
      </div>
    </div>
  );
}

export default Card;

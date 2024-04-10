import { useState } from "react";
import styles from "./Card.module.scss";

function Card({ id, title, subtitle, authors, description, imgURL }) {
  const [modal, setModal] = useState(false);

  const calculateMaxLength = () => {
    // based on mobile media queries
    if (window.innerWidth <= 499) return 50;

    // based on tablet media queries
    if (window.innerWidth <= 991) return 75;

    // for bigger screens
    return 100;
  };

  const maxLengthValue = calculateMaxLength();

  const truncateDescription = (str, maxLength) => {
    if (!str) return;

    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_imgContainer}>
        <img src={imgURL} alt="" />
      </div>
      <div className={styles.card_wrapper}>
        <div className={styles.card_content}>
          {authors && authors.map((author) => <p key={author}>{author}</p>)}
          <h4>{title}</h4>
          {description && (
            <p>{truncateDescription(description, maxLengthValue)}</p>
          )}
        </div>

        <button onClick={() => setModal(true)}>Discover</button>
      </div>
    </div>
  );
}

export default Card;

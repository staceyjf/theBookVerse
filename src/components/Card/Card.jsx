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

  const formatDescription = (str, maxLength) => {
    if (!str) return;

    if (str.length > maxLength) {
      return (
        str.charAt(0).toUpperCase() +
        str.substring(1, maxLength).toLowerCase() +
        "..."
      );
    } else {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
  };

  return (
    <div className={styles.card}>
      <div>
        <img src={imgURL} alt={`Book cover for ${title}`} />
      </div>

      <div className={styles.card_right}>
        <div className={styles.card_content}>
          {authors && authors.map((author) => <p key={author}>{author}</p>)}
          <h4>{title}</h4>
          <p>
            {description
              ? formatDescription(description, maxLengthValue)
              : "No description available"}
          </p>
        </div>

        <button onClick={() => setModal(true)}>Discover</button>
      </div>
    </div>
  );
}

export default Card;

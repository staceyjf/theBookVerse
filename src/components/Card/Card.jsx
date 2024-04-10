import { useState } from "react";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  authors,
  description,
  imgURL,
  setBookId,
  setModalOpen,
}) {
  const calculateMaxLength = () => {
    // based on mobile media queries
    if (window.innerWidth <= 499) return 50;

    // based on tablet media queries
    if (window.innerWidth <= 991) return 50;

    // for bigger screens
    return 75;
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

  const handleModalClick = (bookId) => {
    setBookId(bookId);
    setModalOpen(true);
  };

  return (
    <div className={styles.card}>
      <img src={imgURL} alt={`Book cover for ${title}`} />

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

        <button onClick={() => handleModalClick(id)}>Discover</button>
      </div>
    </div>
  );
}

export default Card;

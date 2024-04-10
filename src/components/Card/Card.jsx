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
  const calculateMaxLength = (title) => {
    // based on mobile media queries
    if (window.innerWidth <= 499) {
      return title.length > 25 ? 35 : 100;
    }

    return title.length > 30 ? 40 : 150;
  };

  const maxLengthValue = calculateMaxLength(title);

  const formatDescription = (str, maxLength) => {
    if (!str) str = "No description available";

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
          <h5>{title}</h5>
          <p>{formatDescription(description, maxLengthValue)}</p>
        </div>

        <button onClick={() => handleModalClick(id)}>Discover</button>
      </div>
    </div>
  );
}

export default Card;

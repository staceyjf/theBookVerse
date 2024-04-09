import { useState } from "react";
import styles from "./Card.module.scss";
import Modal from "../Modal/Modal";
import ModalLoader from "../../containers/ModalLoader/ModalLoader";

function Card({ id, title, subtitle, authors, description, imgURL }) {
  const [modal, setModal] = useState(false);

  const truncateDescription = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  // how can i change the transaction  based on window sizes
  let shortenedDescription = description
    ? truncateDescription(description, 50)
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

        <button onClick={() => setModal(true)}>Discover</button>

        <Modal openModal={modal} closeModal={() => setModal(false)} />
      </div>
    </div>
  );
}

export default Card;

import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

function Modal({
  id,
  title,
  authors,
  description,
  length,
  publisher,
  publishedDate,
  averageRating,
  categories,
  googlePlayURL,
  imgURL,
  openModal,
  setModalOpen,
}) {
  const modal = useRef();
  // points to the dialog so we can open and close the modal
  // doesn't cause a rerender

  useEffect(() => {
    openModal ? modal.current?.showModal() : modal.current?.close();
  }, [openModal]);

  return (
    <dialog
      className={styles.modal}
      ref={modal}
      onCancel={() => setModalOpen(false)}
    >
      <div className={styles.card}>
        <img src={imgURL} alt={`Book cover for ${title}`} />
        <div className={styles.card_right}>
          <div className={styles.card_content}>
            {authors && authors.map((author) => <p key={author}>{author}</p>)}
            <h4>{title}</h4>
            <div>{description ? description : "No description available"}</div>

            {categories &&
              categories.map((catergory) => <p key={catergory}>{catergory}</p>)}
            {length && <p>{length}</p>}
            {publisher && <p>{publisher}</p>}
            {publishedDate && <p>{publishedDate}</p>}
            {averageRating && <p>{averageRating}</p>}
            {googlePlayURL && (
              <a href={googlePlayURL} target="_blank" rel="noopener noreferrer">
                <button>Go to Google Play</button>
              </a>
            )}
          </div>
        </div>
      </div>
      <button onClick={() => setModalOpen(false)}>Close</button>
    </dialog>
  );
}

export default Modal;

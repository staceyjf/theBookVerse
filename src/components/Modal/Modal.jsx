import { useEffect, useRef } from "react";
import DOMPurify from "dompurify";
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
  ISBN,
  googlePlayURL,
  imgURL,
  openModal,
  setOpenModal,
}) {
  const modal = useRef();
  // points to the dialog so we can open and close the modal
  // doesn't cause a rerender

  // TODO: Is there a better way to do this?
  // Sanitize the description
  const sanitizedDescription = DOMPurify.sanitize(
    description || "No description available."
  );

  useEffect(() => {
    openModal ? modal.current?.showModal() : modal.current?.close();
  }, [openModal]);

  return (
    <dialog
      className={styles.modal}
      ref={modal}
      onCancel={() => {
        setOpenModal(false);
      }}
      id={id}
    >
      <div className={styles.modal_wrapper}>
        <button
          className={styles.button_close}
          onClick={() => {
            setOpenModal(false);
          }}
        >
          x
        </button>
        <div className={styles.card}>
          <img src={imgURL} alt={`Book cover for ${title}`} />
          <div className={styles.card_right}>
            {authors && authors.map((author) => <p key={author}>{author}</p>)}
            <h4>{title}</h4>
            {publishedDate && (
              <p>
                {new Date(publishedDate).toLocaleDateString("en-AU", {
                  year: "numeric",
                })}
              </p>
            )}
            {publisher && <p>{publisher}</p>}
            {ISBN &&
              ISBN.map(({ identifier }) => (
                <p key={identifier}>ISBN: {identifier}</p>
              ))}
            {length && <p>{length} pages</p>}
            {averageRating && <p>Star rating: {averageRating}</p>}
            {googlePlayURL && (
              <a href={googlePlayURL} target="_blank">
                <button>E-Book</button>
              </a>
            )}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
      </div>
    </dialog>
  );
}

export default Modal;

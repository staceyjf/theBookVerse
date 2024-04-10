import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

function Modal({ bookData, openModal, setModalOpen }) {
  const modal = useRef();
  // points to the dialog so we can open and close the modal
  // doesn't cause a rerender

  useEffect(() => {
    openModal ? modal.current?.showModal() : modal.current?.close();
  }, [openModal]);

  console.log(bookData);

  return (
    <dialog
      className={styles.modal}
      ref={modal}
      onCancel={() => setModalOpen(false)}
    >
      {bookData}
      <button onClick={() => setModalOpen(false)}>Close</button>
    </dialog>
  );
}

export default Modal;

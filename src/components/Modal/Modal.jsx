// Modal as a separate component
import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

function Modal({ openModal, closeModal }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog className={styles.card} ref={ref} onCancel={closeModal}>
      hello
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
}

export default Modal;

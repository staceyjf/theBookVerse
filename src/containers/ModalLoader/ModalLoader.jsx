// Modal as a separate component
import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

function ModalLoader({ openModal, closeModal, children }) {
  const ref = useRef();

  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog className={styles.card_modal} ref={ref} onCancel={closeModal}>
      {children}
      <button onClick={closeModal}>Close</button>
    </dialog>
  );
}

export default ModalLoader;

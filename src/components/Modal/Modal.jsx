// Modal as a separate component
import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

function Modal({ bookData }) {
  return <div>{bookData}</div>;
}

export default Modal;

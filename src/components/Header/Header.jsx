import React from "react";
import styles from "./Header.module.scss";

function Header({ text }) {
  return <h2 className={styles.main_header}>{text}</h2>;
}

export default Header;

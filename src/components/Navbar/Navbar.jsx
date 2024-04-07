import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo_container}>theBookVerse</div>
    </nav>
  );
}

export default Navbar;

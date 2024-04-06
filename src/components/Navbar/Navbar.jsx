import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo_container}>LOGO</div>
      <div className={styles.searchbar_container}>SEARCHBAR</div>
      <div className={styles.icons_container}>ICONS</div>
    </nav>
  );
}

export default Navbar;

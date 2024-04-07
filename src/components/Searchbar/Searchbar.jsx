import styles from "./Searchbar.module.scss";

function Searchbar() {
  return (
    <div className={styles.searchbar}>
      <div className={styles.container}>
        <form>
          <input
            className={styles.search_input}
            type="text"
            placeholder="replace this with a variable"
            name="search"
          />
          <button className={styles.search_button}>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;

import styles from "./Searchbar.module.scss";

function Searchbar({ onSearch, placeholder }) {
  // function to handle capturing user input and updating the searchTerm state in SearchContainer
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchTerm = new FormData(form).get("search");
    onSearch(searchTerm);
    form.reset();
  };

  return (
    <div className={styles.searchbar}>
      <div className={styles.container}>
        <form onSubmit={onSubmit}>
          <input
            className={styles.search_input}
            type="text"
            placeholder={placeholder}
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

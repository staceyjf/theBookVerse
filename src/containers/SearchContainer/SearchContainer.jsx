import styles from "./SearchContainer.module.scss";
import Searchbar from "../../components/Searchbar/Searchbar";

function SearchContainer() {
  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <Searchbar />
      </div>
    </div>
  );
}

export default SearchContainer;

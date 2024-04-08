import { useState } from "react";
import styles from "./SearchContainer.module.scss";
import Searchbar from "../../components/Searchbar/Searchbar";
import BookLoader from "../BookLoader/BookLoader.jsx";

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState(null);

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <Searchbar
          placeholder="Search for books, by Author, by title"
          onSearch={onSearch}
        />
      </div>
      <BookLoader searchTerm={searchTerm} />
    </div>
  );
}

export default SearchContainer;

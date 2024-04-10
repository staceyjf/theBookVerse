import { useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import BookLoader from "../../containers/BookLoader/BookLoader.jsx";

import styles from "./SearchContainer.module.scss";

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState(null);

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchbar_container}>
        <Searchbar placeholder="Search books by topic" onSearch={onSearch} />
      </div>
      <BookLoader searchTerm={searchTerm} />
    </div>
  );
}

export default SearchContainer;

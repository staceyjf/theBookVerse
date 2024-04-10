import { useState } from "react";
import styles from "./SearchContainer.module.scss";
import Searchbar from "../../components/Searchbar/Searchbar";
import BookLoader from "../BookLoader/BookLoader.jsx";
import ModalLoader from "../../containers/ModalLoader/ModalLoader";

function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState(null);

  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <Searchbar placeholder="Search books by topic" onSearch={onSearch} />
      </div>
      <BookLoader searchTerm={searchTerm} />
      <ModalLoader />
    </div>
  );
}

export default SearchContainer;

import { useEffect, useState } from "react";
import {
  getBooksBySearchTerm,
  filterBookData,
} from "../../services/book-services.js";
import CardList from "../../components/CardList/CardList.jsx";

function BookLoader({ searchTerm }) {
  const [booksData, setBooksData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getBooksBySearchTerm("fun")
      .then((resultsData) => filterBookData(resultsData))
      .then((initialBookData) => setBooksData(initialBookData))
      .catch((e) => setErrorMessage(e))
      .finally(() => setIsLoading(false)); // updated with a spinner
  }, []);

  // re-render when searchTerm changes
  useEffect(() => {
    if (searchTerm !== null) {
      setIsLoading(true);
      setErrorMessage(null);

      getBooksBySearchTerm(searchTerm)
        .then((resultsData) => filterBookData(resultsData))
        .then((initialBookData) => setBooksData(initialBookData))
        .catch((e) => setErrorMessage(e))
        .finally(() => setIsLoading(false)); // updated with a spinner
    }
  }, [searchTerm]);

  return (
    <div>
      {isLoading && <p>...Loading</p>}
      {!isLoading && errorMessage && (
        <p style={{ color: "red" }}>{errorMessage.message}</p>
      )}
      {!isLoading && booksData && <CardList booksData={booksData} />}
    </div>
  );
}

export default BookLoader;

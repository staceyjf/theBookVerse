import { useEffect, useState } from "react";
import {
  getBooksBySearchTerm,
  filterBookData,
} from "../../services/book-services.js";
import CardList from "../../components/CardList/CardList.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

function BookLoader({ searchTerm }) {
  const [booksData, setBooksData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getBooksBySearchTerm("fun")
      .then((resultsData) => filterBookData(resultsData))
      .then((initialBookData) => setBooksData(initialBookData))
      .catch((e) => setErrorMessage(e))
      .finally(() => setIsLoading(false)); // my spinner is purely CSS
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
        .finally(() => setIsLoading(false));
    }
  }, [searchTerm]);

  // TODO - is it best to have a component for error messaging
  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && errorMessage && <p>{errorMessage.message}</p>}
      {!isLoading && booksData && <CardList booksData={booksData} />}
    </div>
  );
}

export default BookLoader;

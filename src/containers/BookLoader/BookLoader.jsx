import { useEffect, useState } from "react";
import {
  getBooksBySearchTerm,
  booksDataForRender,
} from "../../services/book-services.js";
import BookGrid from "../../components/BookGrid/BookGrid.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import ModalLoader from "../../containers/ModalLoader/ModalLoader.jsx";

function BookLoader({ searchTerm }) {
  const [booksData, setBooksData] = useState(null);
  const [bookId, setBookId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(null);
    getBooksBySearchTerm("happy")
      .then((resultsData) => booksDataForRender(resultsData))
      .then((initialBookData) => setBooksData(initialBookData))
      .catch((e) => setErrorMessage(e))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (searchTerm !== null) {
      setIsLoading(true);
      setErrorMessage(null);

      getBooksBySearchTerm(searchTerm)
        .then((booksData) => booksDataForRender(booksData))
        .then((cleanedBooksData) => setBooksData(cleanedBooksData))
        .catch((e) => setErrorMessage(e))
        .finally(() => setIsLoading(false));
    }
  }, [searchTerm]);

  // TODO - is it best to have a component for error messaging
  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && errorMessage && <p>{errorMessage.message}</p>}
      {!isLoading && booksData && (
        <BookGrid
          booksData={booksData}
          setBookId={setBookId}
          setModalOpen={setModalOpen}
        />
      )}
      <ModalLoader
        bookId={bookId}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

export default BookLoader;

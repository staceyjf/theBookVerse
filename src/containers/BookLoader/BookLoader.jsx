import { useEffect, useState } from "react";
import {
  getBooksBySearchTerm,
  booksDataForRender,
} from "../../services/book-services.js";
import Spinner from "../../components/Spinner/Spinner.jsx";
import BookGrid from "../../components/BookGrid/BookGrid.jsx";
import StatusMessage from "../../components/StatusMessage/StatusMessage.jsx";
import ModalLoader from "../../containers/ModalLoader/ModalLoader.jsx";

function BookLoader({ searchTerm }) {
  const [booksData, setBooksData] = useState(null);
  const [bookId, setBookId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
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
        .catch((e) => setErrorMessage(e.message))
        .finally(() => setIsLoading(false));
    }
  }, [searchTerm]);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && errorMessage && <StatusMessage error={errorMessage} />}
      {!isLoading && !errorMessage && booksData && (
        <BookGrid
          booksData={booksData}
          setBookId={setBookId}
          setOpenModal={setOpenModal}
        />
      )}
      {openModal && (
        <ModalLoader
          bookId={bookId}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
}

export default BookLoader;

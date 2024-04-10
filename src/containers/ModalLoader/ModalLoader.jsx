import { useEffect, useState } from "react";
import {
  getBookByBookId,
  bookDataForRender,
} from "../../services/book-services.js";
// import Modal from "../../components/Modal/Modal.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

function ModalLoader({ bookId }) {
  const [bookData, setBookData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (bookId !== null) {
      setIsLoading(true);
      setErrorMessage(null);

      getBookByBookId(bookId)
        .then((bookData) => bookDataForRender(bookData))
        .then((cleanedBookData) => setBookData(cleanedBookData))
        .catch((e) => setErrorMessage(e))
        .finally(() => setIsLoading(false));
    }
  }, [bookId]);

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading && errorMessage && <p>{errorMessage.message}</p>}
      {!isLoading && bookData && <Modal bookData={bookData} />}
    </div>
  );
}

export default ModalLoader;

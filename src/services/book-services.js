// const apiKey = import.meta.env.VITE_GOOGLEBOOKS_API_KEY;

export const getBooksBySearchTerm = async (searchTerm) => {
  // const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.warn(response.statusText);
    throw new Error(
      `Error calling calling the Google Books API Volumes search endpoint.`
    );
  }

  const data = await response.json();
  const { items } = data;

  if (items.length === 0) {
    console.warn(response.statusText);
    throw new Error(
      `No books found for the search term "${searchTerm}". Please try a different search term.`
    );
  }

  return items;
};

// zoom controls image quality
const fixBookCoverImgSize = (id, w, h) => {
  return `https://books.google.com/books/publisher/content/images/frontcover/${id}?fife=w${w}-h${h}&source=gbs_api`;
};

// using the nullish operator ?. to return undefined if it isn't present
export const booksDataForRender = (bookArr) => {
  return bookArr.map((book) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo?.subtitle,
      authors: book.volumeInfo?.authors,
      description: book.volumeInfo.description || "No description was found",
      imgURL: book.volumeInfo.imageLinks
        ? fixBookCoverImgSize(book.id, 200, 300)
        : undefined,
    };
  });
};

export const getBookByBookId = async (bookId) => {
  // const url = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`;
  const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.warn(response.statusText);
    throw new Error(
      `Error calling the Google Books API specific Volume endpoint.`
    );
  }

  const data = await response.json();

  if (data === null) {
    console.warn(response.statusText);
    throw new Error(`No book was found with an id of ${bookId}`);
  }

  return data;
};

// using the nullish operator ?. to return undefined if it isn't present
export const bookDataForRender = (book) => {
  const cleanedBook = {
    id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo?.authors,
    description: book.volumeInfo.description,
    publisher: book.volumeInfo.publisher,
    publishedDate: book.volumeInfo.publishedDate,
    ISBN: book.volumeInfo.industryIdentifiers,
    length: book.volumeInfo.pageCount,
    categories: book.volumeInfo.categories,
    averageRating: book.volumeInfo.averageRating,
    googlePlayURL: book.accessInfo.webReaderLink,
    imgURL: book.volumeInfo.imageLinks
      ? fixBookCoverImgSize(book.id, 200, 300)
      : undefined,
  };

  console.log("this is the book data from services");
  console.log(cleanedBook);
  return cleanedBook;
};

// {
//   "error": {
//     "code": 503,
//     "message": "Service temporarily unavailable.",
//     "errors": [
//       {
//         "message": "Service temporarily unavailable.",
//         "domain": "global",
//         "reason": "backendFailed"
//       }
//     ]
//   }
// }

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
const increaseZoomThumbnails = (url) => {
  // http://books.google.com/books/content?id=x6NgAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
  const zoomFactor = 5;
  return url.replace(`zoom=1`, `zoom=${zoomFactor}`);
};

// using the nullish operator ?. to return undefined if it isn't present
export const booksDataForRender = (bookArr) => {
  return bookArr.map((book) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo?.subtitle,
      authors: book.volumeInfo?.authors,
      description: book.volumeInfo?.description,
      imgURL: book.volumeInfo.imageLinks
        ? increaseZoomThumbnails(book.volumeInfo.imageLinks.thumbnail)
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

  if (data !== null) {
    console.warn(response.statusText);
    throw new Error(`No book was found with an id of ${bookId}`);
  }

  return data;
};

// using the nullish operator ?. to return undefined if it isn't present
export const bookDataForRender = (bookObj) => {
  const cleanedBook = {
    id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo?.authors,
    description: book.volumeInfo?.description,
    publisher: book.volumeInfo.publisher,
    publishedDate: book.volumeInfo.publishedDate,
    ISBN: book.industryIdentifiers,
    length: book.pageCount,
    categories: book.categories,
    averageRating: book.averageRating,
    googlePlayURL: book.webReaderLink,
    imgURL: book.volumeInfo.imageLinks
      ? increaseZoomThumbnails(book.volumeInfo.imageLinks.thumbnail)
      : undefined,
  };

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

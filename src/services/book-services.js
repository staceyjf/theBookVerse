// const apiKey = import.meta.env.VITE_GOOGLEBOOKS_API_KEY;

export const getBooksBySearchTerm = async (searchTerm) => {
  if (searchTerm === "") {
    console.warn(
      `Error calling calling the Google Books API Volumes search endpoint.`
    );
    throw new Error(
      `Ooops your search was empty. Please try again but this time don't forget to add a search term.`
    );
  }

  // const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.warn(
      `Error calling calling the Google Books API Volumes search endpoint.`
    );
    throw new Error(`There has been an issue. Please try again.`);
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
      imgURL: fixBookCoverImgSize(book.id, 200, 300) ?? undefined,
    };
  });
};

export const getBookByBookId = async (bookId) => {
  // const url = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`;
  const url = `https://www.googleapis.com/books/v1/volumes/${bookId}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.warn(
      `Error calling the Google Books API specific Volume endpoint.`
    );
    throw new Error(
      `There has been an issue loading this book. Please try again`
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
    averageRating: book.volumeInfo.averageRating,
    googlePlayURL:
      book.saleInfo.saleability !== "NOT_FOR_SALE"
        ? book.accessInfo.webReaderLink
        : null,
    imgURL: fixBookCoverImgSize(book.id, 200, 300) ?? undefined,
  };

  return cleanedBook;
};

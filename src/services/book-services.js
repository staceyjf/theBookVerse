export const getBooksBySearchTerm = async (searchTerm) => {
  const apiKey = import.meta.env.VITE_GOOGLEBOOKS_API_KEY;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;
  // const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.warn(response.statusText);
    throw new Error("Failed to fetch the requested book. Please try again");
  }

  const data = await response.json();
  const { items } = data;

  if (items.length === 0) {
    console.warn(response.statusText);
    throw new Error(`No books found for ${searchTerm}`);
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
export const createBookObjectsFromSearchResults = (bookArr) => {
  return bookArr.map((book) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo?.subtitle,
      authors: book.volumeInfo?.authors,
      // description: book.searchInfo?.textSnippet,
      description: book.volumeInfo?.description,
      imgURL: book.volumeInfo.imageLinks
        ? increaseZoomThumbnails(book.volumeInfo.imageLinks.thumbnail)
        : undefined,
    };
  });
};

export const createBookObjectForModal = (id) => {
  return bookArr.map((book) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo?.subtitle,
      authors: book.volumeInfo?.authors,
      // description: book.searchInfo?.textSnippet,
      description: book.volumeInfo?.description,
      imgURL: book.volumeInfo.imageLinks
        ? increaseZoomThumbnails(book.volumeInfo.imageLinks.thumbnail)
        : undefined,
    };
  });
};

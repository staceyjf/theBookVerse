export const getBooksBySearchTerm = async (searchTerm) => {
  const apiKey = import.meta.env.VITE_GOOGLEBOOKS_API_KEY;

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;
  // const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch the requested book");
  }

  const data = await response.json();
  const { items } = data;

  if (items.length === 0) {
    throw new Error(`No books found for ${searchTerm}`);
  }

  return items;
};

const increaseZoomThumbnails = (url) => {
  // http://books.google.com/books/content?id=x6NgAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
  const zoomFactor = 5;
  return url.replace(`zoom=1`, `zoom=${zoomFactor}`);
};

// textSnippet is a truncated description
// using the nullish operator ?. to return undefined if it isn't present
// need to find a solution for image for rendering
export const filterBookData = (bookArr) => {
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

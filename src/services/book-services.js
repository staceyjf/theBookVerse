export const getBooksBySearchTerm = async (searchTerm) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.VITE_GOOGLEBOOKS_API_KEY}`;

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
  const zoomFactor = 10;
  return url.replace(`zoom=1`, `zoom=${zoomFactor}`);
};

// textSnippet is a truncated description
export const filterBookData = (bookArr) => {
  return bookArr.map((book) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      authors: book.volumeInfo.authors,
      description: book.searchInfo.textSnippet,
      imgURL: increaseZoomThumbnails(book.imageLinks.thumbnail),
    };
  });
};

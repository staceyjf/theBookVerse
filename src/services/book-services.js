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

export const filterBookData = (bookArr) => {
  return bookArr.map((book) => {
    const bookInfo = { ...book.volumeInfo, ...book.searchInfo };
    return {
      id: book.id,
      title: bookInfo.title,
      subtitle: bookInfo.subtitle,
      description: bookInfo.textSnippet,
      authors: bookInfo.authors,
      imgURL: bookInfo.imageLinks.thumbnail,
    };
  });
};

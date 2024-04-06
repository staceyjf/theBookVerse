## MVP

Create a page that allows users to search for books
Page should include the following:

- Header section introducing the page
- Form containing a text input and a submit / search button
- A grid of books

  Instructions:

- When the submit button is clicked you need the request books from the Google books API using the input value as your query string
- The books that you receive should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes
- You should use async / await for your request code, NOT .then

## Bonus (optional, but highly recommended):

- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.

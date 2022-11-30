function findAuthorById(authors, id) {
  const authorid = authors.find((author) => author.id === id);
  return authorid;
}

function findBookById(books, id) {
  const bookid = books.find((book) => book.id === id);
  return bookid;
}

function partitionBooksByBorrowedStatus(books) {
  const statusOne = books.filter((book) => book.borrows[0].returned === false);
  const statusTwo = books.filter((book) => book.borrows[0].returned === true);
  return [statusOne, statusTwo];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      const account = accounts.find((account) => account.id === borrow.id);
      account.returned = borrow.returned;
      return account;
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

//ACCOUNT X ID
function findAccountById(accounts, id) {
  const accountID = accounts.find((account) => account.id === id);
  return accountID;
}

//END

//ACCOUNT X LAST NAME
function sortAccountsByLastName(accounts) {
  accounts.sort((lastNameA, lastNameB) =>
    lastNameA.name.last < lastNameB.name.last ? -1 : 1
  );
  return accounts;
}

//END


// TOTAL # BORROWS // H FUNCTION
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((total, book) => {
    const idCount = borrowCount(book, account);
    return total + idCount;
  }, 0);
}
function borrowCount(book, account) {
  return book.borrows.filter(
    (borrow) => borrow.id === account.id
  ).length;
}
//END

//BOOKS POSSESSED X ACCOUNT
function getBooksPossessedByAccount(account, books, authors) {
  const booksCheckedOut = books.filter(
    (book) =>
      book.borrows[0].returned === false && book.borrows[0].id === account.id
  );
  const booksPossessed = booksCheckedOut.map((book) => {
    const author = authors.find((author) => author.id === book.authorId);

    return { ...book, author };
  });
  return booksPossessed;
}

//END

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

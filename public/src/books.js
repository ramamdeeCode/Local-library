function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = books.filter(
    (book) => book.borrows[0].returned === true
  );
  const borrowedBook = books.filter(
    (book) => book.borrows[0].returned === false
  );
  const borrowStatus = [borrowedBook, returnedBooks];
  return borrowStatus;
}

//function getBorrowersForBook(book, accounts) {
//   let result = book.borrows.map((borrower) => {
//     let result = accounts.find((account) => borrower.id === account.id);
//     result.returned = borrower.returned;
//     return result;
//   });
//   return result.filter(
//     (borrower, i) => result.findIndex((item) => item.id === borrower.id) === i
//   );
// }

function getBorrowersForBook(book, accounts) {
  return accounts.filter((account) => {
    return book.borrows.find((borrow) => {
      let result = account.id === borrow.id;
      account.returned = borrow.returned;
      return result;
    });
  });
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) => {
    return accA.name.last > accB.name.last ? 1 : -1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  const acc_id = account.id;
  let totalBorrows = 0;
  books.map((book) => {
    const borrows = book.borrows;
    borrows.map((borrow) => {
      if (borrow.id === acc_id) totalBorrows++;
    });
  });
  return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accId = account.id;
  return books.filter((book) => {
    const checkBorrows = book.borrows.find((borrow) => {
      return borrow.id === accId && borrow.returned === false;
    });
    book.author = authors.find((author) => book.authorId === author.id);
    return checkBorrows;
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

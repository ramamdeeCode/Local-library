function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowedBookCount = 0;
  books.map(function (book) {
    borrowedBookCount += book.borrows.filter(
      (borrows) => borrows.returned == false
    ).length;
  });
  return borrowedBookCount;
}
function sortDesceResult(result) {
  return result.sort((a, b) => b.count - a.count);
}
function getMostCommonGenres(books) {
  let result = [];
  let genres = books.reduce((acc, book) => {
    // ...acc all the accumulated genres,then key as genre, then check if genre is in acc + 1, if not assign 0 then plus one
    return { ...acc, [book.genre]: (acc[book.genre] || 0) + 1 };
  }, {});
  //creating a new array and asign key as name and count
  for (let [key, value] of Object.entries(genres)) {
    result.push({
      name: key,
      count: value,
    });
  }
  return sortDesceResult(result).slice(0, 5);
}

function getMostPopularBooks(books) {
  let result = [];
  books.map((book) => {
    const { title, borrows } = book;
    result.push({
      name: book.title,
      count: book.borrows.length,
    });
  });
  return sortDesceResult(result).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  books.map((book) => {
    const { authorId, borrows } = book;
    const author = authors.find((author) => author.id === book.authorId);
    let first = author.name.first;
    let last = author.name.last;
    result.push({
      name: first + " " + last,
      count: book.borrows.length,
    });
  });
  return sortDesceResult(result).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

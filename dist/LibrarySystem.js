"use strict";
// 📚 Create a simple Library System where users can add books, borrow books, return books, and check availability.
// 1. Create an enum called BookGenre with at least 5 book genres.
// 2. Create a type alias called Book which contains: bookId (number), title (string), author (string), genre (BookGenre), isAvailable (boolean).
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
// 1. Create an enum called BookGenre with at least 5 book genres.
var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["Fantasy"] = 0] = "Fantasy";
    BookGenre[BookGenre["Comedy"] = 1] = "Comedy";
    BookGenre[BookGenre["Love"] = 2] = "Love";
    BookGenre[BookGenre["Science"] = 3] = "Science";
    BookGenre[BookGenre["Fiction"] = 4] = "Fiction";
    // add 4 more
})(BookGenre || (BookGenre = {}));
var library = [];
// 3. Create a function called addBook which will add a new book into the library array. The function needs to return a Book object.
function addBook(bookId, title, author, genre, isAvailable) {
    library.push({
        bookId: bookId,
        title: title,
        author: author,
        genre: genre,
        isAvaliable: isAvailable
    });
    return library;
}
// 4. Create a function called borrowBook which will change the book’s availability to false if available. The return needs to be a string.
function borrowBook(bookId) {
    var message = "";
    library.forEach(function (book) {
        book.bookId == bookId ? book.isAvaliable == true ? book.isAvaliable = false : "" : "";
        message = "".concat(book.title, " has been borrowed");
    });
    return message;
}
// 5. Create a function called returnBook which will change the book’s availability to true. The return needs to be a string.
function returnBook(bookId) {
    var message = "";
    library.forEach(function (book) {
        book.bookId == bookId ? book.isAvaliable == false ? book.isAvaliable = true : "" : "";
        message = "".concat(book.title, " has been returned");
    });
    return message;
}
// 6. Create a function called checkAvailability which will return true if the book is available and false otherwise.
function checkAvailability(bookId) {
    var message = false;
    library.forEach(function (book) {
        book.bookId == bookId ? book.isAvaliable == false ? message = false : message = true : "";
    });
    return message;
}
// 7. Create a function called removeBook which will remove a book from the library array. The return needs to be a string.
function removeBook(bookId) {
    var message = "";
    library = library.filter(function (book) {
        book.bookId == bookId ? book : "";
        message = "".concat(book.title, " has been removed from library");
    });
    return message;
}
// Test cases (Create more if needed)
console.log(addBook(1, "The Hobbit", "J.R.R. Tolkien", BookGenre.Fantasy, true)); // { bookId: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genre: BookGenre.Fantasy, isAvailable: true }
console.log(borrowBook(1)); // "The Hobbit has been borrowed"
console.log(checkAvailability(1)); // false
console.log(returnBook(1)); // "The Hobbit has been returned"
console.log(removeBook(1)); // "The Hobbit has been removed from the library"

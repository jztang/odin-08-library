const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  myLibrary.push(new Book(author, title, pages, read));
}

// Initial books
addBookToLibrary("J. R. R. Tolkien", "The Fellowship of the Ring", 423, true);
addBookToLibrary("Leo Tolstoy", "War and Peace", 1225, false);
addBookToLibrary("J. K. Rowling", "Harry Potter and the Philosopher's Stone", 223, true);
addBookToLibrary("George Orwell", "Nineteen Eighty-Four", 328, false);
addBookToLibrary("Aldous Huxley", "Brave New World", 311, false);
addBookToLibrary("Margaret Atwood", "The Handmaid's Tale", 311, true);
addBookToLibrary("Leo Tolstoy", "Anna Karenina", 864, true);
addBookToLibrary("Joseph Heller", "Catch-22", 453, false);

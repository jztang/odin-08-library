const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  myLibrary.push(new Book(author, title, pages, read));
  myLibrary.sort((a, b) => a.author.localeCompare(b.author) || a.title.localeCompare(b.title));
}

function displayLibrary() {
  const library = document.querySelector(".library");
  for (const book of myLibrary) {
    const bookCard = document.createElement("div");

    const title = document.createElement("div");
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement("div");
    author.textContent = `by ${book.author}`;
    bookCard.appendChild(author);

    const bottomRow = document.createElement("div");
    const pages = document.createElement("div");
    pages.textContent = `${book.pages} pages`;
    bottomRow.appendChild(pages);
    const read = document.createElement("div");
    if (book.read) {
      read.textContent = "Read";
    } else {
      read.textContent = "Unread";
    }
    bottomRow.appendChild(read);
    bookCard.appendChild(bottomRow);

    library.appendChild(bookCard);
  }
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

displayLibrary();

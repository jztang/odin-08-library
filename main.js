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

function generateCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = book.title;
  card.appendChild(title);

  const author = document.createElement("div");
  author.classList.add("author");
  author.textContent = book.author;
  card.appendChild(author);

  const bottomRow = document.createElement("div");
  bottomRow.classList.add("bottom-row");
  const pages = document.createElement("div");
  pages.classList.add("pages");
  pages.textContent = `${book.pages} pages`;
  bottomRow.appendChild(pages);
  const read = document.createElement("div");
  read.classList.add("read");
  if (book.read) {
    read.textContent = "Read";
  } else {
    read.textContent = "Unread";
  }
  bottomRow.appendChild(read);
  card.appendChild(bottomRow);

  return card;
}

function displayLibrary() {
  const library = document.querySelector(".library");
  for (const book of myLibrary) {
    library.appendChild(generateCard(book));
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

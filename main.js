const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBook(author, title, pages, read) {
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

  const delDiv = document.createElement("div");
  delDiv.classList.add("delete");
  const delBtn = document.createElement("button");
  delBtn.classList.add("del-btn");
  const delSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  delSvg.setAttribute("height", "30");
  delSvg.setAttribute("fill", "#ddd");
  delSvg.setAttribute("viewBox", "0 -960 960 960");
  const delPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  delPath.setAttribute(
    "d",
    "M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"
  );
  delSvg.appendChild(delPath);
  delBtn.appendChild(delSvg);
  delBtn.addEventListener("click", (e) => {
    const index = myLibrary.findIndex(
      (curBook) => curBook.author === book.author && curBook.title === book.title
    );
    myLibrary.splice(index, 1);
    e.currentTarget.parentNode.parentNode.parentNode.remove();
  });
  delDiv.appendChild(delBtn);
  bottomRow.appendChild(delDiv);

  card.appendChild(bottomRow);

  return card;
}

function displayLibrary() {
  const libraryDiv = document.querySelector(".library");
  const newChildren = [];
  for (const book of myLibrary) {
    newChildren.push(generateCard(book));
  }
  libraryDiv.replaceChildren(...newChildren);
}

// New book modal
const modalBackground = document.querySelector(".modal-background");
document.querySelector(".new-book-btn").addEventListener("click", () => {
  modalBackground.style.display = "block";
});

document.querySelector(".close").addEventListener("click", () => {
  modalBackground.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modalBackground) modalBackground.style.display = "none";
});

document.querySelector(".modal").addEventListener("submit", (event) => {
  event.preventDefault();
  const author = event.currentTarget.author.value;
  const title = event.currentTarget.title.value;
  const pages = event.currentTarget.pages.value;
  const read = event.currentTarget.status.value === "Read";
  addBook(author, title, pages, read);
  displayLibrary();
  document.querySelector(".modal").reset();
  modalBackground.style.display = "none";
});

// Initial books
addBook("J. R. R. Tolkien", "The Fellowship of the Ring", 423, true);
addBook("Leo Tolstoy", "War and Peace", 1225, false);
addBook("J. K. Rowling", "Harry Potter and the Philosopher's Stone", 223, true);
addBook("George Orwell", "Nineteen Eighty-Four", 328, false);
addBook("Aldous Huxley", "Brave New World", 311, false);
addBook("Margaret Atwood", "The Handmaid's Tale", 311, true);
addBook("Leo Tolstoy", "Anna Karenina", 864, true);
addBook("Joseph Heller", "Catch-22", 453, false);

displayLibrary();

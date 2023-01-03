const addButton = document.querySelector(".addButton");
const bookShelf = document.querySelector(".bookshelf");

let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  let book = document.createElement("div");
  let spine = document.createElement("div");
  let spineTitle = document.createElement("span");
  let spineAuthor = document.createElement("span");
  let top = document.createElement("div");
  let cover = document.createElement("div");

  book.classList.add("book");
  spine.classList.add("side", "spine");
  spineTitle.classList.add("spine-title");
  spineAuthor.classList.add("spine-author");
  top.classList.add("side", "top");
  cover.classList.add("side", "cover");

  // bookShelf > book > (spine > spineTitle + spineAuthor) + top + cover
  bookShelf.appendChild(book);
  book.appendChild(spine);
  book.appendChild(top);
  book.appendChild(cover);
  spine.appendChild(spineTitle);
  spine.appendChild(spineAuthor);
}

addButton.addEventListener("click", addBookToLibrary);

const addButton = document.querySelector(".addButton");
const bookShelf = document.querySelector(".bookshelf");

let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

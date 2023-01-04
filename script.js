const addButton = document.querySelector(".addButton");
const bookShelf = document.querySelector(".bookshelf");

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}
function displayForm() {}
addButton.addEventListener("click", displayForm);

import { getRootCssStyles } from "./cssUtils.js";

let myLibrary = [];

const bookShelf = document.querySelector(".bookshelf");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const overlay = document.querySelector(".overlay");
const submitButton = document.querySelector(".submitButton");
const body = document.querySelector("body");

// Checks if form has been filled
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

function updateSubmitBtn() {
  const titleVal = title.value.trim();
  const authorVal = author.value.trim();
  const pagesVal = pages.value.trim();

  if (titleVal !== "" && authorVal !== "" && pagesVal !== "") {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
}

title.addEventListener("input", updateSubmitBtn);
author.addEventListener("input", updateSubmitBtn);
pages.addEventListener("input", updateSubmitBtn);

// Pop up form
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
  button.addEventListener("click", updateSubmitBtn);
});

// modal closes when overlay is clicked
overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

submitButton.addEventListener("click", (e) => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.add("active");
  overlay.classList.add("active");

  // Resetting values when modal is opened for a fresh form
  title.value = null;
  author.value = null;
  pages.value = null;
  document.getElementById("read").checked = false;
}

function closeModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// "Pages" input validation

// Not allowing negative pages to be entered using keycodes
// 95, < 106 corresponds to Numpad 0 through 9
// 47, < 58 corresponds to 0 through 9 on the Number Row
// 8 is Backspace.
pages.onkeydown = function (e) {
  if (
    !(
      (e.keyCode > 95 && e.keyCode < 106) ||
      (e.keyCode > 47 && e.keyCode < 58) ||
      e.keyCode == 8 ||
      e.target.value.length > 4
    )
  ) {
    return false;
  }
};
// Not allowing number greater than 5000 or number 0 to be entered
pages.addEventListener("input", () => {
  if (pages.value > 5000) {
    pages.value = 5000;
  } else if (pages.value == 0) {
    pages.value = 1;
  }
});

// Random value functions for random styling
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Creates and Styles Book
function createBook() {
  // Creating book elements
  let book = document.createElement("div");
  let spine = document.createElement("div");
  let spineTitle = document.createElement("span");
  let spineAuthor = document.createElement("span");
  let top = document.createElement("div");
  let cover = document.createElement("div");

  let coverSpineTitle = document.createElement("div");
  let coverSpineAuthor = document.createElement("div");
  let coverSpinePages = document.createElement("div");

  // Add classes to each book component
  book.classList.add("book");
  spine.classList.add("side", "spine");
  spineTitle.classList.add("spine-title");
  spineAuthor.classList.add("spine-author");
  top.classList.add("side", "top");
  cover.classList.add("side", "cover");

  coverSpineTitle.classList.add("spine-title", "cover-title");
  coverSpineAuthor.classList.add("cover-author");
  coverSpinePages.classList.add("pages");

  // bookShelf > book > (spine > spineTitle + spineAuthor) + top + cover
  bookShelf.appendChild(book);
  book.appendChild(spine);
  book.appendChild(top);
  book.appendChild(cover);

  spine.appendChild(spineTitle);
  spine.appendChild(spineAuthor);

  cover.appendChild(coverSpineTitle);
  cover.appendChild(coverSpineAuthor);
  cover.appendChild(coverSpinePages);

  const titleCreate = document.getElementById("title").value;
  const authorCreate = document.getElementById("author").value;
  const pagesCreate = document.getElementById("pages").value;

  const checkbox = document.getElementById("read");

  console.log(authorCreate);
  // Style border depending on whether checkbox was checked
  if (checkbox.checked) {
    spine.style.border = "5px solid green";
  } else {
    spine.style.border = "5px solid red";
  }

  let firstLetters = authorCreate
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  spineTitle.textContent = titleCreate;
  coverSpineTitle.textContent = titleCreate;

  spineAuthor.textContent = firstLetters.toUpperCase();
  coverSpineAuthor.textContent = authorCreate;

  coverSpinePages.textContent = `${pagesCreate} pages`;

  // Toggle between red and green border color when book is clicked (signifying read status)
  let toggle = false;

  function toggleBorderColor() {
    if (toggle) {
      spine.style.borderColor = "red";
    } else {
      spine.style.borderColor = "green";
    }
    toggle = !toggle;
  }
  book.addEventListener("click", toggleBorderColor);

  let availablePatterns = getRootCssStyles();

  let availableColors = [
    "maroon",
    "darkgreen",
    "darkolivegreen",
    "brown",
    "saddlebrown",
    "sienna",
    "midnightblue",
  ];

  // random spine height
  let randomHeight = getRandomInt(180, 250);
  spine.style.height = `${randomHeight}px`;
  spine.style.top = `${280 - randomHeight}px`;

  // random spine pattern
  let randomPattern = randomChoice(availablePatterns);
  spine.style.backgroundImage = `var(${randomPattern})`;

  // random spine color
  let randomColor = randomChoice(availableColors);
  spine.style.backgroundColor = randomColor;

  cover.style.backgroundColor = randomColor;
  // random cover height
  cover.style.height = `${randomHeight}px`;
  cover.style.top = `${280 - randomHeight}px`;

  // random top height
  top.style.top = `${280 - randomHeight}px`;
}

// Constructor Function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Making use of the constructor
function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  renderBooks();
}

// Displaying the books
function renderBooks() {
  // bookShelf.textContent = "";     // INCORRECT CODE, BUT I'LL LEAVE IT FOR LEARNING PURPOSES. Without bookShelf.textContent = "", the whole array myLibrary, is created.
  // myLibrary.map((book) => {       // So if you have 5 elements in myLibrary, 5 books are created.
  //   createBook(book);             // However, with bookShelf.textContent = "", despite only one book being created, the books styling changes every time a new book is created.
  // });                             // Its info (e.g. title, author, pages) and styling dont save and become the same as the latest created book.

  // This block of code fixes the above issues as it gets the last iteration of myLibrary, and creates that.
  //Book limit
  if (myLibrary.length < 40) {
    myLibrary.forEach(function (i, index, array) {
      if (index === array.length - 1) {
        createBook();
      }
    });
  } else {
    let errorText = document.createElement("h1");
    let errorOverlay = document.createElement("div");

    errorOverlay.classList.add("overlay", "active");
    errorText.classList.add("errorText");
    errorText.textContent = "Book limit reached!";

    body.appendChild(errorOverlay);
    errorOverlay.appendChild(errorText);

    setTimeout(() => {
      errorOverlay.remove();
      errorText.remove();
    }, 2000);
  }
}

// Disable enter key
window.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    e.preventDefault();
    return false;
  }
});

submitButton.addEventListener("click", addBookToLibrary);

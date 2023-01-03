import { getRootCssStyles } from "./cssUtils.js";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}
function addBookToLibrary() {
  // Creating book elements
  let book = document.createElement("div");
  let spine = document.createElement("div");
  let spineTitle = document.createElement("span");
  let spineAuthor = document.createElement("span");
  let top = document.createElement("div");
  let cover = document.createElement("div");

  // Add classes to each book component
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

  let spines = Object.values(document.querySelectorAll(".spine")); // GETS IT FROM THE HTML FILE HOW DO WE GET IT FROM THE JS FILE??
  let covers = Object.values(document.querySelectorAll(".cover"));
  let tops = Object.values(document.querySelectorAll(".top"));

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

  // assign a random height, pattern and colour to each book
  spines.map(function (s, i) {
    let randomHeight = getRandomInt(220, 290);
    s.style.height = `${randomHeight}px`;
    s.style.top = `${280 - randomHeight}px`;

    let randomPattern = randomChoice(availablePatterns);
    s.style.backgroundImage = `var(${randomPattern})`;

    let randomColor = randomChoice(availableColors);
    s.style.backgroundColor = randomColor;

    covers[i].style.height = `${randomHeight}px`;
    covers[i].style.top = `${280 - randomHeight}px`;

    tops[i].style.top = `${280 - randomHeight}px`;
  });
}
addButton.addEventListener("click", addBookToLibrary);

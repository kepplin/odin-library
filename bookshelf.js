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
  // creating book elements
  let book = document.createElement("div");
  let spine = document.createElement("div");
  let spineTitle = document.createElement("span");
  let spineAuthor = document.createElement("span");
  let top = document.createElement("div");
  let cover = document.createElement("div");

  // add classes to each book component
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

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const checkbox = document.getElementById("read");

  if (checkbox.checked) {
    spine.style.border = "4px solid green";
  } else {
    spine.style.border = "4px solid red";
  }

  let firstLetters = author
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  spineTitle.textContent = title;
  spineAuthor.textContent = firstLetters.toUpperCase();
  // BELOW THIS (within the funcion) IS NOT MY OWN CODE
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
  let randomHeight = getRandomInt(220, 290);
  spine.style.height = `${randomHeight}px`;
  spine.style.top = `${280 - randomHeight}px`;

  // random spine pattern
  let randomPattern = randomChoice(availablePatterns);
  spine.style.backgroundImage = `var(${randomPattern})`;

  // random spine color
  let randomColor = randomChoice(availableColors);
  spine.style.backgroundColor = randomColor;

  // random cover height
  cover.style.height = `${randomHeight}px`;
  cover.style.top = `${280 - randomHeight}px`;

  // random top height
  top.style.top = `${280 - randomHeight}px`;
}

submitButton.addEventListener("click", addBookToLibrary);

const addButton = document.querySelector(".addButton");
const bookShelf = document.querySelector(".bookshelf");
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const overlay = document.getElementById("overlay");
const submitButton = document.querySelector(".submitButton");

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

// Checks if form has been filled
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");

function updateSubmitBtn() {
  const titleVal = title.value.trim();
  const authorVal = author.value.trim();
  const pagesVal = pages.value.trim();

  if (titleVal && authorVal && pagesVal) {
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
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

submitButton.addEventListener("click", () => {
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
}

function closeModal(modal) {
  if (modal == null) {
    return;
  }
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// Pages validation

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
// Not allowing number greater than 5000 or 0 to be entered
pages.addEventListener("input", () => {
  if (pages.value > 5000) {
    pages.value = 5000;
  } else if (pages.value == 0) {
    pages.value = 1;
  }
});

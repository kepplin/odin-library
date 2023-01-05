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

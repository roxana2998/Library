const inputs = [...document.querySelectorAll("input")];
const addButton = document.querySelector("#add-button");
const booksForm = document.querySelector(".books-form");
const bookInfo = document.querySelector(".book-info");

let myLibrary = [];

// CONSTRUCTOR FUNCTION

function Book(title, author, numPages, isRead) {
  (this.title = title),
    (this.author = author),
    (this.numPages = numPages),
    (this.isRead = isRead),
    (this.provideInfo = function () {
      return `${title} ${author} ${numPages} ${
        this.isRead ? "read" : "not read yet"
      }`;
    });
}

function showBookInfo() {
  const pTitle = document.createElement("p");
  const pAuthor = document.createElement("p");
  const pNumPages = document.createElement("p");
  const pIsRead = document.createElement("p");
  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";

  for (element of myLibrary) {
    pTitle.textContent = element.title;
    bookInfo.appendChild(pTitle);
    pAuthor.textContent = element.author;
    bookInfo.appendChild(pAuthor);
    pNumPages.textContent = element.numPages;
    bookInfo.appendChild(pNumPages);
    pIsRead.textContent = element.isRead;
    bookInfo.appendChild(pIsRead);
  }

  removeButton.textContent = "remove";
  bookInfo.appendChild(removeButton);

  removeButton.addEventListener("click", function () {
    pTitle.remove();
    pAuthor.remove();
    pNumPages.remove();
    pIsRead.remove();
    removeButton.remove();
  });
}

booksForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newBook = new Book(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].checked
  );

  myLibrary.push(newBook);

  for (el of inputs) {
    if (el.type === "checkbox") {
      el.checked = false;
    } else {
      el.value = "";
    }
  }

  showBookInfo();
});





// FACTORY FUNCTION

// function createBook(title, author, numPages, isRead) {
//   return {
//     title: title,
//     author: author,
//     numPages: numPages,
//     isRead: isRead,
//     provideInfo: function () {
//       return `${title} by ${author}, ${numPages} pages, ${isRead}`;
//     },
//   };
// }

// CLASS

// class Book {
//   constructor(title, author, numPages, isRead) {
//     (this.title = title),
//       (this.author = author),
//       (this.numPages = numPages),
//       (this.isRead = isRead);
//   }

//   provideInfo = function () {
//     return `${title} by ${author}, ${numPages} pages, ${isRead}`;
//   };
// }

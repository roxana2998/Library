const inputs = [...document.querySelectorAll("input")];
const addButton = document.querySelector("#add-button");
const booksForm = document.querySelector(".books-form");
const showBook = document.querySelector(".show-book");
const cellTitle = document.querySelector(".cell-title");

let myLibrary = [];

// CONSTRUCTOR FUNCTION

function Book(title, author, numPages, isRead) {
  (this.title = title),
    (this.author = author),
    (this.numPages = numPages),
    (this.isRead = isRead),
    (this.provideInfo = function () {
      return `${title} by ${author}, ${numPages} pages, ${
        this.isRead ? "read" : "not read yet"
      }`;
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

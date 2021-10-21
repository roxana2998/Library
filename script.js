const inputs = [...document.querySelectorAll("input")];
const addButton = document.querySelector("#add-button");
const booksForm = document.querySelector(".books-form");
const bookInfo = document.querySelector(".book-info");
const numPages = document.querySelector("num-pages");

let myLibrary = [];

// CONSTRUCTOR FUNCTION

function Book(title, author, numPages, isRead) {
  (this.title = `${title}`),
    (this.author = ` by ${author}, `),
    (this.numPages = `${numPages} pages, `),
    (this.isRead = isRead);
}

// ..........................DISPLAY INPUT VALUES......................

function showBookInfo(element) {
  const bookContainer = document.createElement("div");
  bookContainer.className = "book-container";
  const pTitle = document.createElement("p");
  const pAuthor = document.createElement("p");
  const pNumPages = document.createElement("p");
  const pIsRead = document.createElement("p");
  const removeButton = document.createElement("button");
  removeButton.className = "remove-button";

  pTitle.textContent = element.title;
  bookContainer.appendChild(pTitle);
  pAuthor.textContent = element.author;
  bookContainer.appendChild(pAuthor);
  pNumPages.textContent = element.numPages;
  bookContainer.appendChild(pNumPages);

  if (element.isRead === false) {
    pIsRead.textContent = "No";
  } else {
    pIsRead.textContent = "Yes";
  }
  bookContainer.appendChild(pIsRead);

// ................CHANGE STATUS........................................

  pIsRead.addEventListener("click", function () {
    if (element.isRead === false) {
      pIsRead.textContent = "Yes";
      element.isRead = true;
    } else {
      pIsRead.textContent = "No";
      element.isRead = false;
    }
  });

// ................ADD REMOVE BUTTON.....................................

  removeButton.textContent = "remove";
  bookContainer.appendChild(removeButton);
  bookInfo.appendChild(bookContainer);

 

  removeButton.addEventListener("click", function () {
   bookContainer.remove();
  });


}

//....................ADD INPUT VALUE IN THE ARRAY........................

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

  showBookInfo(newBook);
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

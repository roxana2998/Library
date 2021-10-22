const inputs = [...document.querySelectorAll("input")];
const addButton = document.querySelector("#add-button");
const booksForm = document.querySelector(".books-form");
const bookInfo = document.querySelector(".book-info");
const numPages = document.querySelector("num-pages");

let myLibrary = [];

// CONSTRUCTOR FUNCTION

function Book(title, author, numPages, isRead) {
  (this.title = `${title}`),
    (this.author = `by ${author}`),
    (this.numPages = `${numPages} pages`),
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
  const removeButton = document.createElement("div");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-button";

  pTitle.textContent = element.title;
  bookContainer.appendChild(pTitle);
  pAuthor.textContent = element.author;
  bookContainer.appendChild(pAuthor);
  pNumPages.textContent = element.numPages;
  bookContainer.appendChild(pNumPages);

  if (element.isRead === false) {
    pIsRead.textContent = "Not read"
    pIsRead.style.backgroundColor = "#A6341B";
  } else {
    pIsRead.textContent = "Read";
    pIsRead.style.backgroundColor = "#4f6908";

  }
  bookContainer.appendChild(pIsRead);

// ................CHANGE STATUS........................................

  pIsRead.addEventListener("click", function () {
    if (element.isRead === false) {
      pIsRead.textContent = "Read";
      element.isRead = true;
      pIsRead.style.backgroundColor = "#4f6908";

    } else {
      pIsRead.textContent = "Not read";
      element.isRead = false;
      pIsRead.style.backgroundColor = "#A6341B";

    }
  });

// ................ADD REMOVE BUTTON.....................................

  removeButton.src = "remove-button.png";
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

addButton.addEventListener("click", function() {
  if (inputs[0].value.trim() === "") {
    inputs[0].value = "";
  } 

  if (inputs[1].value.trim() === "") {
    inputs[1].value = "";
  } 

  if (inputs[2].value.trim() === "") {
    inputs[2].value = "";
  } 

  if (isNaN(parseInt(inputs[2].value))) {
    inputs[2].value = "";
  }
}) 







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

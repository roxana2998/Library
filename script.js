const inputs = [...document.querySelectorAll("input")];
const addButton = document.querySelector("#add-button");
const booksForm = document.querySelector(".books-form");
const bookInfo = document.querySelector(".book-info");
const numPages = document.querySelector("num-pages");
const labelTitle = document.querySelector(".label-title");
const inputTitle = document.querySelector("#title");
const labelAuthor = document.querySelector(".label-author");
const inputAuthor = document.querySelector("#author");
const labelPages = document.querySelector(".label-pages");
const inputPages = document.querySelector("#num-pages");

let myLibrary = [];
let savedLibrary = localStorage.getItem("myLibrary");

if (savedLibrary !== null) {
  myLibrary = JSON.parse(savedLibrary);

  for (let object of myLibrary) {
    showBookInfo(object);
  }
}



// CONSTRUCTOR FUNCTION

function Book(title, author, numPages, isRead) {
  (this.title = `${title}`),
    (this.author = `by ${author}`),
    (this.numPages = `${numPages} pages`),
    (this.isRead = isRead);
}

// ..........................DISPLAY INPUT VALUES......................

function showBookInfo(object) {
  const bookContainer = document.createElement("div");
  bookContainer.className = "book-container";
  const pTitle = document.createElement("p");
  const pAuthor = document.createElement("p");
  const pNumPages = document.createElement("p");
  const pIsRead = document.createElement("p");
  const removeButton = document.createElement("div");
  removeButton.textContent = "Remove";
  removeButton.className = "remove-button";


  pTitle.textContent = object.title;
  bookContainer.appendChild(pTitle);
  pAuthor.textContent = object.author;
  bookContainer.appendChild(pAuthor);
  pNumPages.textContent = object.numPages;
  bookContainer.appendChild(pNumPages);

  if (object.isRead === false) {
    pIsRead.textContent = "Not read";
    pIsRead.style.backgroundColor = "#A6341B";
  } else {
    pIsRead.textContent = "Read";
    pIsRead.style.backgroundColor = "#4f6908";
  }
  bookContainer.appendChild(pIsRead);

  // ................CHANGE STATUS........................................

  pIsRead.addEventListener("click", function () {
    if (object.isRead === false) {
      pIsRead.textContent = "Read";
      object.isRead = true;
      pIsRead.style.backgroundColor = "#4f6908";
    } else {
      pIsRead.textContent = "Not read";
      object.isRead = false;
      pIsRead.style.backgroundColor = "#A6341B";
    }
  });

  // ................ADD REMOVE BUTTON.....................................

  bookContainer.appendChild(removeButton);
  bookInfo.appendChild(bookContainer);

  removeButton.addEventListener("click", function () {
    bookContainer.remove();
    myLibrary.splice(myLibrary.indexOf(object), 1);
    localStorage.setItem("myLibrary" ,JSON.stringify(myLibrary));
  });
}

//....................ADD INPUT VALUE IN THE ARRAY AND DISPLAY THE VALUES........................

booksForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newBook = new Book(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].checked
  );

  myLibrary.push(newBook);
  localStorage.setItem("myLibrary" ,JSON.stringify(myLibrary));


  for (el of inputs) {
    if (el.type === "checkbox") {
      el.checked = false;
    } else {
      el.value = "";
    }
  }

  showBookInfo(newBook);
});






//......................INPUT VALIDATION...............................

addButton.addEventListener("click", function () {
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

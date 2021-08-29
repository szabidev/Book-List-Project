// - Create 2 classes with corespondent constructors(class Book and class UI)
//     - Book class(used for creating book objects)
//     - UI class(methods only here: for add the book to the list, delete the book, validate the input show confirmation message boxes)
// Note: Use arrow functions as much as possible when needed.

// DOM elements
// Display error or success message
let inputMessage = document.querySelector('#input-message');
let inputTitle = document.querySelector('#title');
let inputAuthor = document.querySelector('#author');
let inputIsbn = document.querySelector('#isbn');
let submitBtn = document.querySelector('.submit-btn');

// console.log(inputMessage, inputTitle, inputAuthor, inputIsbn, submitBtn);

// Input values
let bookTitle = inputTitle.value;
let bookAuthor = inputAuthor.value;
let bookIsbn = inputIsbn.value;

// Create book class, every input will be a new book stored in an object
class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// Create the methods - not sure how they will work / ask on monday
class UI {
    addBook() {

    }
    deleteBook() {

    }
    showMessage() {

    }
}


const addBookToList = () => {
    // console.log('works');
    // Check if the input fields are empty or not
    if (bookTitle != '' && bookAuthor != '' && bookIsbn != '') {

    }
}
// Event listener
submitBtn.addEventListener('click', addBookToList);
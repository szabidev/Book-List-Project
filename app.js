// - Create 2 classes with corespondent constructors(class Book and class UI)
//     - Book class(used for creating book objects)
//     - UI class(methods only here: for add the book to the list, delete the book, validate the input show confirmation message boxes)
// Note: Use arrow functions as much as possible when needed.

// DOM elements
const inputMessage = document.querySelector('#input-message');
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputIsbn = document.querySelector('#isbn');
const form = document.querySelector('.book-form');
const submitBtn = document.querySelector('.submit-btn');
const table = document.querySelector('#book-table');



// Create book class, every input will be a new book stored in an object
class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// Create a class for methods
class UI {
    static addBook(book) {
        // create a row element
        const tableRow = document.createElement('tr');
        // create the content of the row elemenet (table data elements with tha input field values)
        tableRow.innerHTML = `
            <td class="first-column column">${book.title}</td>
            <td class="second-column column">${book.author}</td>
            <td class="third-column column">${book.isbn}</td>
            <td class="fourth-column column"><i class="fas fa-trash-alt"></i></td>
        `;
        // append the row to the table
        table.appendChild(tableRow);
    }

    static deleteBook(element) {
        // element will be the icon which will have an event listener for click, when clicked remove the elements parents parent which is the whole table row
        if (element.classList.contains('fa-trash-alt')) {
            element.parentElement.parentElement.remove();
        };
    }
    static showMessage(message, className) {
        // message for diffenerent actions, classname to display the appropiate message, 
        inputMessage.className = `${className}`;
        inputMessage.innerHTML = `${message}`;
        inputMessage.style.visibility = 'visible';
        // setTimeout function to remove the message after 3 seconds
        setTimeout(() => {
            inputMessage.className = '';
            inputMessage.style.visibility = 'hidden';
        }, 3000);
    }

    // clear the inputfields 
    static clearFields() {
        inputTitle.value = '';
        inputAuthor.value = '';
        inputIsbn.value = '';
    }
}


// Event listener
submitBtn.addEventListener('click', (e) => {
    // prevent submit
    e.preventDefault();
    // get input values
    const title = inputTitle.value;
    const author = inputAuthor.value;
    const isbn = inputIsbn.value;

    // check if fields are completed
    if (title === '' || author === '' || isbn === '') {
        UI.showMessage('Please fill in all the fields', 'error-message');
        // isbn number must 15 numbers
    } else if (isbn.length != 15) {
        UI.showMessage('Invalid ISBN number', 'error-message');
    }
    else {
        // create a new book from the input field values
        const newBook = new Book(title, author, isbn);
        // use UI method to display the book
        UI.addBook(newBook);
        // show success message
        UI.showMessage('Book Added', 'message');
        // clear the input fields after the book is added 
        UI.clearFields();
    }
});

table.addEventListener('click', (e) => {
    // console.log(e.target);
    // delete the book, e.target is the icon
    UI.deleteBook(e.target);
    // show delete message
    UI.showMessage('Book deleted', 'error-message');
})
// Exercise 7 : My Book List

// In the js file, create an array called allBooks.
// This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

const allBooks = [
  {
    title: "Book 1",
    author: "Author 1",
    image: "https://example.com/book1.jpg",
    alreadyRead: true,
  },
  {
    title: "Book 2",
    author: "Author 2",
    image: "https://example.com/book2.jpg",
    alreadyRead: false,
  },
  {
    title: "Book 3",
    author: "Author 3",
    image: "https://example.com/book3.jpg",
    alreadyRead: true,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "https://example.com/great-gatsby.jpg",
    alreadyRead: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "https://example.com/to-kill-a-mockingbird.jpg",
    alreadyRead: false,
  },
];

// Get the section element
const section = document.querySelector("section");

// Iterate over each book in the allBooks array
allBooks.forEach((book) => {
  // Create a div element for the book
  const bookDiv = document.createElement("div");

  // Set the width of the image to 100px
  const bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.style.width = "100px";

  // Create a paragraph element for the book details
  const bookDetails = document.createElement("p");

  // Set the text content of the book details based on the book's title and author
  bookDetails.textContent = `${book.title} written by ${book.author}`;

  // Check if the book is already read
  if (book.alreadyRead) {
    // Set the color of the book details to red
    bookDetails.style.color = "red";
  }

  // Append the image and book details to the book div
  bookDiv.appendChild(bookImage);
  bookDiv.appendChild(bookDetails);

  // Append the book div to the section
  section.appendChild(bookDiv);
});

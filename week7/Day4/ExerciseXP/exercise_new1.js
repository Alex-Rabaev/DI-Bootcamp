// 🌟 Exercise 6 : Change The Navbar

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

const divElement = document.getElementById("navBar");
divElement.setAttribute("id", "socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

const ulElement = document.querySelector("ul");
const newLiElement = document.createElement("li");
const textNode = document.createTextNode("Logout");

newLiElement.appendChild(textNode);
ulElement.appendChild(newLiElement);

// Use the firstElementChild and the lastElementChild properties
//    to retrieve the first and last <li> elements from their parent element (<ul>).
// Display the text of each link. (Hint: use the textContent property).

ulElement = document.querySelector("ul");
const firstLiElement = ulElement.firstElementChild;
const lastLiElement = ulElement.lastElementChild;

const firstLinkText = firstLiElement.textContent;
const lastLinkText = lastLiElement.textContent;

console.log("First Link:", firstLinkText);
console.log("Last Link:", lastLinkText);

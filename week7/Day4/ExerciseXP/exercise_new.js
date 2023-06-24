// 🌟 Exercise 5 : Users

// Retrieve the div and console.log it
const divElement = document.getElementById("container");
console.log(divElement);

// Change the name "Pete" to "Richard"
const listElements = document.getElementsByClassName("list");
const secondList = listElements[0];
const nameElement = secondList.getElementsByTagName("li")[1];
nameElement.textContent = "Richard";

// Delete the second <li> of the second <ul>
const firstList = listElements[1];
const secondLi = firstList.getElementsByTagName("li")[1];
firstList.removeChild(secondLi);

// Change the name of the first <li> of each <ul> to your name
const ulElements = document.getElementsByTagName("ul");
for (const ulElement of ulElements) {
  const firstLi = ulElement.getElementsByTagName("li")[0];
  firstLi.textContent = "Your Name";
}

// Add class "student_list" to both <ul> elements
ulElements = document.getElementsByTagName("ul");
for (const ulElement of ulElements) {
  ulElement.classList.add("student_list");
}

// Add classes "university" and "attendance" to the first <ul> element
const firstUl = ulElements[0];
firstUl.classList.add("university", "attendance");

// Add background color and padding to the <div>
divElement = document.getElementById("container");
divElement.style.backgroundColor = "lightblue";
divElement.style.padding = "10px";

// Hide the <li> that contains the text node "Dan"
firstList = document.querySelector("ul.list");
const danLi = firstList.lastElementChild;
danLi.style.display = "none";

// Add a border to the <li> that contains the text node "Richard"
secondLi = firstList.querySelector("li:nth-child(2)");
secondLi.style.border = "1px solid black";

// Change the font size of the whole body
document.body.style.fontSize = "16px";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
const divElement = document.getElementById("container");
const userList = divElement.nextElementSibling;
const users = userList.querySelectorAll("li");
const userNames = Array.from(users).map((user) => user.textContent);

if (divElement.style.backgroundColor === "lightblue") {
  const message = `Hello ${userNames[0]} and ${userNames[1]}`;
  alert(message);
}

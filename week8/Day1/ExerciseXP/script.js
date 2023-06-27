// ------------- Exercise 1 : Change The Article -------------


// 1. Using a DOM property, retrieve the h1 and console.log it.

const h1Element = document.querySelector("h1");
console.log(h1Element);

// 2. Using DOM methods, remove the last paragraph in the <article> tag.

const paragraphs = document.querySelectorAll("article p");
var lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.remove();

// 3. Add a event listener which will change the background color of the h2 to red, 
//    when it’s clicked on.

var h2Element = document.querySelector("h2");
h2Element.addEventListener("click", function() {
    h2Element.style.backgroundColor = "red";
});

// 4. Add an event listener which will hide the h3 when it’s clicked on 
//    (use the display:none property).

var h3Element = document.querySelector("h3");
h3Element.addEventListener("click", function() {
    h3Element.style.display = "none";
});

// 5. Add a <button> to the HTML file, that when clicked on, 
//    should make the text of all the paragraphs, bold.

var boldButton = document.getElementById("boldButton");
boldButton.addEventListener("click", function() {
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontWeight = "bold";
    }
});

// 6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.

h1Element.addEventListener("mouseover", function() {
    var randomSize = 1 + Math.floor(Math.random() * 101);
    h1Element.style.fontSize = randomSize + "px";
});

// 7. BONUS : When you hover on the 2nd paragraph, it should fade out

var secondParagraph = document.querySelectorAll("article p")[1];
secondParagraph.addEventListener("mouseover", function() {
    secondParagraph.classList.add("fade-out");
});
secondParagraph.addEventListener("mouseout", function() {
    secondParagraph.classList.remove("fade-out");
});
// ------------ Exercises XP : Animations ------------

// Part I

// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will alert “Hello World”.

setTimeout(function() {
        alert("Hello World");
    }, 2000);

// Part II

// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

setTimeout(function() {
        const container = document.getElementById("container");
        const paragraph = document.createElement("p");
        paragraph.textContent = "Hello World";
        container.appendChild(paragraph);
    }, 2000);

// Part III

// 1. In your Javascript file, using setInterval, call a function every 2 seconds.
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// 3. The interval will be cleared (ie. clearInterval), when the user will click on the button.
// 4. Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon 
//    as there will be 5 paragraphs inside the <div id="container">.

const intervalId = setInterval(function() {
    const container = document.getElementById("container");
    const paragraphs = container.getElementsByTagName("p");

    if (paragraphs.length < 5) {
        const paragraph = document.createElement("p");
        paragraph.textContent = "Hello World";
        container.appendChild(paragraph);
    } else {
        clearInterval(intervalId);
    }
}, 2000);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
    clearInterval(intervalId);
});
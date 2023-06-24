// ------------- Daily Challenge: Planets -------------

// In this exercise we will be creating a webpage with a black background as the universe 
// and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// 1. Create an array which value is the planets of the solar system.
// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// 3. Each planet should have a different background color. 
//    (Hint: you could add a new class to each planet - each class containing a different background-color).
// 4. Finally append each div to the <section> in the HTML (presented below).
// 5. Bonus: Do the same process to create the moons.
//      - Be careful, each planet has a certain amount of moons. How should you display them?
//      - Should you still use an array for the planets ? Or an array of objects ?


const allPlanets = [
    {name: "Mercury", color : "aqua", moons: 0}, 
    {name: "Venus", color : "aquamarine", moons: 0}, 
    {name: "Earth", color : "azure", moons: 1}, 
    {name: "Mars", color : "beige", moons: 2}, 
    {name: "Jupiter", color : "bisque", moons: 13}, 
    {name: "Saturn", color : "brown", moons: 10}, 
    {name: "Uranus", color : "cadetblue", moons: 5}, 
    {name: "Neptune", color : "crimson", moons: 2}
];

function addPlanet() {
    const section = document.querySelector(".listPlanets");
    for (let planet of allPlanets) {
        const divPlanet = document.createElement("div");
        divPlanet.classList.add("planet");
        const text = document.createTextNode(planet["name"]);

        divPlanet.appendChild(text);
        divPlanet.style.backgroundColor = planet["color"];
        section.appendChild(divPlanet);
        // let counter = 10;
        // for (let i = 0; i < planet["moons"]; i++) {
        //     const divMoon = document.createElement("div");
        //     divMoon.classList.add("moon");
        //     divMoon.style.left += `${counter}rem`; 
        //     counter += 5
        //     section.appendChild(divMoon);
        // }
        addMoon(planet,section);
    }
}

function addMoon(planet, section) {
    let counter = 10;
    for (let i = 0; i < planet["moons"]; i++) {
        const divMoon = document.createElement("div");
        divMoon.classList.add("moon");
        divMoon.style.left += `${counter}rem`; 
        counter += 5
        section.appendChild(divMoon);
    }
}

addPlanet();
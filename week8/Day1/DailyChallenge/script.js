// function getValues(event) {
//     event.preventDefault();
//     let objValues = {}
//     const allInputs = event.target.querySelectorAll("input");
//     for (let inp in allInputs) {
//         if (inp.value === "") {
//             alert("fill the form - missing element");
//             return;
//         }
//         objValues[inp.id] = inp.value;
//     }
//     showStory(objValues);
// }

// function showStory (objValues) {
//     const spanElement = document.getElementById("story");
//     const text = `The ${objValues["noun"]} is ${objValues["verb"]} with ${objValues["person"]}`;
//     const textNode = document.createTextNode(text);
//     spanElement.appendChild(textNode);

// }

const myform = document.forms.libform
myform.addEventListener("submit", getValues);

const shuffleBtn = document.querySelector("#shuffle-button")
shuffleBtn.addEventListener("click", showStory)

let objInfo = {};
let randomNum = 0
let othernum = 0;

function getValues(event) {
    event.preventDefault();
    isFormSubmitted = true;
    const allInputs = event.target.querySelectorAll("input");
    for (let inp of allInputs) {
        if (inp.value === "") {
            alert(`fill the form - missing element in ${inp.id}`)
            objInfo = {}
            return;
        }
        objInfo[inp.id] = inp.value;
    }
    showStory()
}


function showStory () {
    const valuesObj = Object.values(objInfo); //array of values
    const allStories = [`first story ${valuesObj[0]}  ${valuesObj[1]}`,
                        `second story ${valuesObj[1]}  ${valuesObj[2]}`,  
                        `third story ${valuesObj[1]}  ${valuesObj[0]}`]

    do {
        othernum = Math.floor(Math.random() * allStories.length);
    } while(randomNum === othernum)
    
    randomNum = othernum

    const spanElement = document.getElementById("story");
    spanElement.textContent = "";
    const text = allStories[randomNum]
    const textNode = document.createTextNode(text)
    spanElement.appendChild(textNode)
}
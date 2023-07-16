

const gifForm = document.querySelector("#gifForm");
gifForm.addEventListener("submit", fetchGif);

async function fetchGif(event) {
    try {
        event.preventDefault();
        const inputValue = document.querySelector("#category").value;
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${inputValue}`)
        if (response.ok) {
            const dataGif = await response.json();
            displayGif(dataGif);
        } else {
            throw new Error("problem")
        }
    } catch {
        console.log("ERROR", error);
    }
    
}

function displayGif(dataGif) {
    console.log("in displayGif");
    const gifURL = dataGif["data"]["images"]["original"]["url"];
    const div = document.getElementById("container");

    const divGif = document.createElement("div")
    divGif.style.border = "2px solid black"
    const image = document.createElement("img");
    image.src = gifURL;
    const button = document.createElement("button");
    button.addEventListener("click", deleeteGif);
    const text = document.createTextNode("DELETE GIF");
    button.appendChild(text);
    divGif.appendChild(image);
    divGif.appendChild(button)

    div.appendChild(divGif);
    if (div.children.length !== 0) {
        btnDelete.style.display = "block";
    }
}

function deleeteGif (event) {
    const parent = event.target.parentElement;
    parent.remove();
    const div = document.getElementById("container");
    if (div.children.length === 0) {
        btnDelete.style.display = "none";
    }
}

const btnDelete = document.querySelector("#btnDelete");
btnDelete.addEventListener("click", deleteAll);

function deleteAll() {
    const divContainer = document.querySelector("#container");
    // divContainer.textContent = "";
    while (divContainer.firstElementChild) {
        divContainer.firstElementChild.remove();
    }
    btnDelete.style.display = "none";
}
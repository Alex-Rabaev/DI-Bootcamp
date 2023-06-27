function getValues(event) {
    event.preventDefault();
    let objValues = {}
    const allInputs = event.target.querySelectorAll("input");
    for (let inp in allInputs) {
        if (inp.value === "") {
            alert("fill the form - missing element");
            return;
        }
        objValues[inp.id] = inp.value;
    }
    showStory(objValues);
}

function showStory (objValues) {
    const spanElement = document.getElementById("story");
    const text = `The ${objValues["noun"]} is ${objValues["verb"]} with ${objValues["person"]}`;
    const textNode = document.createTextNode(text);
    spanElement.appendChild(textNode);

}
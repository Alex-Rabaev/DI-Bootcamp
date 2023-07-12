// ------------ Daily Challenge : HTML Form ------------

// 1. Create a form with two fields (name, last name) and a submit button.
// 2. When you click the Send button, retrieve the data from the inputs, 
//    and append it on the DOM as a JSON string.


// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const lastname = document.getElementById('lastname').value;

//     const formData = {
//         name: name,
//         lastname: lastname
//     };

//     const jsonData = JSON.stringify(formData);

//     const outputJSON = document.createElement('p');
//     outputJSON.textContent = jsonData;
//     document.body.appendChild(outputJSON);
// });

const form = document.getElementById('myForm');
form.addEventListener('submit', getValue);

function getValue(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const objData = Object.fromEntries(data);
    const jsonData = JSON.stringify(objData);
    displayValues(jsonData);
}

function displayValues(str) {
    const outputJSON = document.createElement('p');
    outputJSON.textContent = str;
    document.body.appendChild(outputJSON);
}
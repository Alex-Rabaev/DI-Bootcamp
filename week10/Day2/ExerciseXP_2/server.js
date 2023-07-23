// Exercise 1 : Express & JSON
// Instructions
// Create a public folder containing two files : index.html and script.js
// Outside of the public folder, create a file named server.js.
// In the server.js file, create an express server. Create a GET request to the route /users.
// The handler function of the /users route should send a stringified version of this javascript object const user = {firstname: 'John',lastname: 'Doe'}.
// In the script.js file, fetch the server at the route /users and get the response.
// The response should be the JSON Object. Console.log this object and display it on the DOM.

const express = require('express');
const cors = require('cors')

const app = express();



const user = {firstname: 'John',lastname: 'Doe'}

app.use(cors())

app.get('/users', (req, res) => {
    res.send(JSON.stringify(user))

})

app.listen(3000)


// Exercise 2 : Express & Parameters
// Instructions
// In the server.js file, create your server using express.
// Create a route /, and use a GET request method.
// The path of the route should contain the route parameter id.
// The handler function of the route should respond with the value of the route parameter. Check out req.params.
// Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234
// The response should be the JSON Object. Console.log this object and display it on the DOM.


// COMMENTED BECAUSE OF CONFLICT WITH THE NEXT EXCERCISE

// app.get('/', (req, res) => {
//     let data = req.params;
//     res.send(data);
//     console.log(data)
// })



// Exercise 3: Express & Static Files
// Instructions
// Create a public folder, that contains an HTML file. This HTML file can contain some CSS and some JavaScript (for example a head tag with some classes for styling, and in the body a button with an onClick attribute calling a Javascript function with an alert).
// In a server.js file create your server using express.
// Your server on http://localhost:3000/ should serve the HTML file. Check out the lesson named Express Routes & Queries in the Course Notes, more specifically the part “How To Serve Static Files In Express”

app.use(express.static('public2'));

app.get('/', (req, res) => {

})


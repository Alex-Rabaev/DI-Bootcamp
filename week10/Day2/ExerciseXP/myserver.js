// Exercise 1 : HTTP
// Instructions
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/

const http = require('http');

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>This is my first response</h1>');
    res.write('<h2>This is my second response</h2>');
    res.end('<h3>This is my third response</h4>')
})

server.listen(3000)
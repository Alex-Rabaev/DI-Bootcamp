const express = require("express");
const app = express();

const PORT = 3000;

app.post("/register", createUser);

app.listen(PORT, () => console.log("Listening on port " + PORT));

function createUser(req, res) {
    console.log("request received");
    res.send({message: "Request received"});
}
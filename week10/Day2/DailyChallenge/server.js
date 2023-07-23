const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())



app.listen(3000)

app.get('/aboutMe/:hobby', (req, res) => {
    let data = req.params;
    if (typeof data.hobby !== 'string'){
        return res.status(404).json({ msg: "Not a string" })
    }
    console.log(data.hobby)
})

app.use(express.static('static'));
app.get('/pic', (req, res) => {
})

app.get('/form', (req, res) => {
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

let message
app.post('/form', (req, res) => {
    message = req.body
})

app.get('/formData', (req, res) => {
    
    console.log(message)
    res.end(`${message.email} sent you a message: ${message.message}`)
})
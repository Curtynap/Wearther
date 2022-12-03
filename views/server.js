/*The most basic Express web server running locally
*/

const express = require("express");

const path = require('path');
const dbPath = path.resolve(__dirname, 'public/js/database.js')
const database = require(dbPath);


// Creates an Express application: https://expressjs.com/en/4x/api.html#app
// Returns the Express application object
const app = express();
const port = 3000;

// Tell express where to find your CSS, JS, and images
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

// A route definition
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/Homepage.html');
    
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/views/Login.html');
    
});

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + '/views/Signup.html');
    
});

// app.post("/user", (req, res) => {
//     console.log(req.body);
//     res.send('<h1>Successful Login</h1>');
// });

// starts web server listening on localhost at port 3000
app.listen(port, () => {
    console.log('Listening on port 3000...');
});

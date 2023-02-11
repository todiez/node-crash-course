const express = require("express");

//express app
const app = express();


//listen for requests
app.listen(3000);

app.get("/", (req, res) => {
    //res.send("<p>homepage</p>");
    res.sendFile("./views/index.html", {root: __dirname});
});

app.get("/about", (req, res) => {
    //res.send("<p>about</p>");
    res.sendFile("./views/about.html", {root: __dirname});
});


//redirect
app.get('/about-us', (req, res) => {
    res.send('/about');
});


//404 (use will just used if not other function was fired)
app.use((req, res) => {
    res.sendFile("./views/404.html", {root: __dirname});
})

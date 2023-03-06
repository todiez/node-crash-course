
const express = require('express');
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
const app = express();

//connect to mongoDB
const dbURI = "mongodb+srv://toby:Test.1234@nodecrashcourse.ufuzor7.mongodb.net/node-tutorial?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static("public"));
app.use(morgan("dev"));

//mongoose and mongo sandbox routes
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "newest newBlog",
    snippet: "best new blog ever",
    body: "you are invited to read more..."
  });

  blog.save()
  .then((result) => res.send(result))
  .catch((err) => console.log(err));
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => console.log(err));
})



app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
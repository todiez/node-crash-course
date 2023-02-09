const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made");
  console.log(req.url, req.method);

  //set header content type
  res.setHeader("Content-Type", "text/html");

  //send a html file
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });
});

// localhost is the default value for 2nd argument
server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

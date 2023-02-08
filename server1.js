
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request made');
  console.log(req.url, req.method);

  //set header content type
  res.setHeader('Content-Type', "text/html")

  res.write("<p>hello, Dogs</p>")
  res.write("<p>hello, Dogs - how r u?</p>")
  res.end();

  
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("here is our history");
  } else {
    res.end(`
  <h1>Oops!</h1>
  <p>we cant seem to find the page you are looking for</p>
  <a href='/'>back home</a>
`);
  }
});
server.listen(5000);

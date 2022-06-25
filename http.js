const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is Home Page");
  }
  if (req.url === "/about") {
    res.end("This is About Page");
  }
});
server.listen(5000);

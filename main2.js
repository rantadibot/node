const http = require("http");
const fs = require("fs");
let url = require("url");
let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  console.log(queryData.id);
  if (_url == "/") {
    _url = "/index.html";
  }
  if (_url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  // response.end(fs.readFileSync(__dirname + url));
  response.end(queryData.id);
});
app.listen(3000);

const http = require("http");
const fs = require("fs");
let url = require("url");
let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let title = queryData.id;
  if (_url == "/") {
    title = "Welcome";
  }
  if (_url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
    let template = `
    <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="index.html">WEB</a></h1>
    <ol>
      <li><a href="/?id=HTML">HTML</a></li>
      <li><a href="/?id=CSS">CSS</a></li>
      <li><a href="/?id=JavaScript">JavaScript</a></li>
    </ol>
    <h2>${title}</h2>
    <p>${description}</p>
  </body>
  </html>`;
    response.end(template);
  });
});
app.listen(3000);

const http = require("http");
const fs = require("fs");
let url = require("url");
let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", function (error, filelist) {
        let title = "Welcome";
        let description = "Hello, Node.js";
        let list = "<ol>";
        let i = 0;
        while (i < filelist.length) {
          list =
            list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i = i + 1;
        }
        list = list + "</ol>";
        let template = `
            <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>`;
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir("./data", function (error, filelist) {
        list = "<ol>";
        i = 0;
        while (i < filelist.length) {
          list =
            list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
          i = i + 1;
        }
        list = list + "</ol>";
        fs.readFile(
          `data/${queryData.id}`,
          "utf-8",
          function (err, description) {
            title = queryData.id;
            template = `
<!doctype html>
<html>
<head>
<title>WEB1 - ${title}</title>
<meta charset="utf-8">
</head>
<body>
<h1><a href="/">WEB</a></h1>
${list}
<h2>${title}</h2>
<p>${description}</p>
</body>
</html>`;
            response.writeHead(200);
            response.end(template);
          }
        );
      });
    }
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);

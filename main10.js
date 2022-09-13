const http = require("http");
const fs = require("fs");
let url = require("url");
const qs = require("querystring");

function templateHTML(title, list, body) {
  return `
    <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href="/create">create</a>
    ${body}
  </body>
  </html>`;
}

function templateList(filelist) {
  let list = "<ol>";
  let i = 0;
  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + "</ol>";
  return list;
}
let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  if (pathname === "/") {
    if (queryData.id === undefined) {
      fs.readdir("./data", function (error, filelist) {
        let title = "Welcome";
        let description = "Hello, Node.js";
        let list = templateList(filelist);
        let template = templateHTML(
          title,
          list,
          `<h2>${title}</h2><p>${description}</p>`
        );
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir("./data", function (error, filelist) {
        let list = templateList(filelist);
        fs.readFile(
          `data/${queryData.id}`,
          "utf-8",
          function (err, description) {
            title = queryData.id;
            template = templateHTML(
              title,
              list,
              `<h2>${title}</h2><p>${description}</p>`
            );

            response.writeHead(200);
            response.end(template);
          }
        );
      });
    }
  } else if (pathname === "/create") {
    fs.readdir("./data", function (error, filelist) {
      title = "Welcome";
      description = "Hello, Node.js";
      let list = templateList(filelist);
      fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
        title = queryData.id;
        template = templateHTML(
          title,
          list,
          `    <form action="http://localhost:3000/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"/></p>
          <p><textarea name="description" cols="30" rows="10" placeholder="description"></textarea></p>
          <p><input type="submit" /></p>
        </form>`
        );

        response.writeHead(200);
        response.end(template);
      });
    });
  } else if (pathname === "/create_process") {
    let body = "";
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      let post = qs.parse(body);
      title = post.title;
      description = post.description;
      fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        response.writeHead(302, { Location: encodeURI(`/?id=${title}`) });
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);

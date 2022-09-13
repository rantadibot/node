const http = require("http");
const fs = require("fs");
let qs = require("querystring");
let path = require("path");
let template = require("./lib/template2.js");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get("/", function (request, response) {
  fs.readdir("./data", function (error, filelist) {
    let title = "Welcome";
    let description = "Hello, Node.js";
    let list = template.List(filelist);
    let html = template.HTML(
      title,
      list,
      `<h2>${title}</h2><p>${description}</p>
      <img src="/iu1.jpg" width="300">`,
      `<a href="/create">create</a>`
    );
    response.send(html);
  });
});
app.get("/page/:pageId", function (request, response) {
  fs.readdir("./data", function (error, filelist) {
    let filteredId = path.parse(request.params.pageId).base;
    let title = request.params.pageId;
    let list = template.List(filelist);
    fs.readFile(`data/${filteredId}`, "utf-8", function (err, description) {
      let html = template.HTML(
        title,
        list,
        `<h2>${title}</h2><p>${description}</p>
        <img src="/${title}.jpg" width="300">`,
        `<a href="/create">create</a> 
      <a href="/update/${title}">update</a>
      <form action="/delete_process" method="post" onsubmit="return confirm('정말로 삭제하시겠습니까?');">
      <input type="hidden" name="id" value="${title}">
      <input type="submit" value="delete">
      </form>`
      );
      response.send(html);
    });
  });
});
app.get("/create", function (request, response) {
  fs.readdir("./data", function (error, filelist) {
    title = "WEB - create";
    list = template.List(filelist);
    html = template.HTML(
      title,
      list,
      `    <form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"/></p>
        <p><textarea name="description" cols="30" rows="10" placeholder="description"></textarea></p>
        <p><input type="submit" /></p>
      </form>`,
      ""
    );
    response.send(html);
  });
});

app.post("/create_process", function (request, response) {
  let post = request.body;
  title = post.title;
  description = post.description;
  fs.writeFile(`data/${title}`, description, "utf8", function (err) {
    response.writeHead(302, { Location: encodeURI(`/?id=${title}`) });
    response.end();
  });
});
app.get("/update/:pageId", function (request, response) {
  fs.readdir("./data", function (error, filelist) {
    let filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`, "utf-8", function (err, description) {
      title = request.params.pageId;
      list = template.List(filelist);
      html = template.HTML(
        title,
        list,
        `    <form action="/update_process" method="post">
        <input type="hidden" name="id" value="${title}">
        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
        <p><textarea name="description" cols="30" rows="10" placeholder="description">${description}</textarea></p>
        <p><input type="submit" /></p>
      </form>`,
        `<a href="/create"></a> <a href="/update/${title}">update</a>`
      );
      response.send(html);
    });
  });
});
app.post("/update_process", function (request, response) {
  let post = request.body;
  let id = post.id;
  title = post.title;
  description = post.description;
  fs.rename(`data/${id}`, `data/${title}`, function (error) {});
  fs.writeFile(`data/${title}`, description, "utf8", function (err) {
    response.redirect(encodeURI(`/?id=${title}`));
  });
});
app.post("/delete_process", function (request, response) {
  let post = request.body;
  let id = post.id;
  let filteredId = path.parse(id).base;

  fs.unlink(`data/${filteredId}`, function (error) {
    response.redirect("/");
  });
});
app.listen(3000, function () {
  console.log("지금 읽는중");
});

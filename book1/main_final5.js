const http = require("http");
const fs = require("fs");
let url = require("url");
const qs = require("querystring");
let template = require("./lib/template3.js");
const cookie = require("cookie");

function authIsOwner(request, response) {
  let isOwner = false;
  let cookies = {};
  if (request.headers.cookie) {
    cookies = cookie.parse(request.headers.cookie);
  }
  if (cookies.email === "rantadi@daum.net" && cookies.password == "123456") {
    isOwner = true;
  }
  return isOwner;
}

function authStatusUI(request, response) {
  let isOwner = authIsOwner(request, response);
  let authStatusUI = '<a href="/login">login</a>';
  if (isOwner) {
    authStatusUI = '<a href="/logout_process">logout</a>';
  }
  return authStatusUI;
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
        let list = template.List(filelist);
        let html = template.HTML(
          title,
          list,
          `<h2>${title}</h2><p>${description}</p>`,
          `<a href="/create">create</a>`,
          authStatusUI(request, response)
        );
        response.writeHead(200);
        response.end(html);
      });
    } else {
      fs.readdir("./data", function (error, filelist) {
        let list = template.List(filelist);
        fs.readFile(
          `data/${queryData.id}`,
          "utf-8",
          function (err, description) {
            title = queryData.id;
            html = template.HTML(
              title,
              list,
              `<h2>${title}</h2><p>${description}</p>`,
              `<a href="/create">create</a> 
              <a href="/update?id=${title}">update</a>
              <form action="delete_process" method="post" onsubmit="return confirm('정말로 삭제하시겠습니까?');">
              <input type="hidden" name="id" value="${title}">
              <input type="submit" value="delete">
              </form>`,
              authStatusUI(request, response)
            );

            response.writeHead(200);
            response.end(html);
          }
        );
      });
    }
  } else if (pathname === "/create") {
    fs.readdir("./data", function (error, filelist) {
      title = "WEB - create";
      let list = template.List(filelist);
      // fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
      //   title = queryData.id;
      html = template.HTML(
        title,
        list,
        `    <form action="/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"/></p>
          <p><textarea name="description" cols="30" rows="10" placeholder="description"></textarea></p>
          <p><input type="submit" /></p>
        </form>`,
        "",
        authStatusUI(request, response)
      );

      response.writeHead(200);
      response.end(html);
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
  } else if (pathname === "/update") {
    fs.readdir("./data", function (error, filelist) {
      fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
        title = queryData.id;
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
          `<a href="/create"></a> <a href="/update?id=${title}">update</a>`,
          authStatusUI(request, response)
        );
        response.writeHead(200);
        response.end(html);
      });
    });
  } else if (pathname === "/update_process") {
    let body = "";
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      let post = qs.parse(body);
      let id = post.id;
      title = post.title;
      description = post.description;
      fs.rename(`data/${id}`, `data/${title}`, function (error) {});
      fs.writeFile(`data/${title}`, description, "utf8", function (err) {
        response.writeHead(302, { Location: encodeURI(`/?id=${title}`) });
        response.end();
      });
    });
  } else if (pathname === "/login") {
    fs.readdir("./data", function (error, filelist) {
      title = "Login";
      let list = template.List(filelist);
      // fs.readFile(`data/${queryData.id}`, "utf-8", function (err, description) {
      //   title = queryData.id;
      html = template.HTML(
        title,
        list,
        `    <form action="/login_process" method="post">
            <p><input type="text" name="email" placeholder="email"/></p>
            <p><input type="password" name="password" placeholder="password"/></p>
            <p><input type="submit" /></p>
          </form>`,
        '<a href="/create">create</a>',
        authStatusUI(request, response)
      );

      response.writeHead(200);
      response.end(html);
    });
  } else if (pathname === "/login_process") {
    let body = "";
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      let post = qs.parse(body);
      if (post.email === "rantadi@daum.net" && post.password === "123456") {
        response.writeHead(302, {
          "Set-Cookie": [
            `email=${post.email}`,
            `password=${post.password}`,
            "nickname=iu",
          ],
          Location: "/",
        });
        response.end();
      } else {
        response.end("Your Id or Password is not correct.Check your Id or Pw");
      }
    });
  } else if (pathname === "/logout_process") {
    let body = "";
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      let post = qs.parse(body);
      response.writeHead(302, {
        "Set-Cookie": [
          `email=;Max-Age=0`,
          `password=;Max-Age=0`,
          "nickname=;Max-Age=0",
        ],
        Location: "/",
      });
      response.end();
    });
  } else if (pathname === "/delete_process") {
    let body = "";
    request.on("data", function (data) {
      body = body + data;
    });
    request.on("end", function () {
      let post = qs.parse(body);
      let id = post.id;
      fs.unlink(`data/${title}`, function (error) {
        response.writeHead(302, { Location: `/` });
        response.end();
      });
    });
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);

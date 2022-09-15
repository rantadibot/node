const http = require("http");
const fs = require("fs");
const DomesticCrawler = require("../../crawler/sucess.js");

async function main() {
  try {
    const domesticCrawler = new DomesticCrawler();
    const result = await domesticCrawler.moef();
    console.log(result);
  } catch (e) {
    console.error("moef failed", e);
  }
}

let app = http.createServer(function (request, response) {
  let url = request.url;
  if (url == "/") {
    url = "/kakao4.html";
  }
  if (url == "/favicon.ico") {
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);

const fs = require("fs");
const DomesticCrawler = require("./sucess.js");

async function main() {
  try {
    const domesticCrawler = new DomesticCrawler();
    const result = await domesticCrawler.moef();
    // console.log(result);
    mains = JSON.stringify(result);
    fs.writeFileSync("../book2/kakao/test.json", mains, "utf-8");
  } catch (e) {
    console.error("moef failed", e);
  }
}

main();

const DomesticCrawler1 = require("./sucess1.1.js");
const fs = require("fs");

async function main() {
  try {
    const domesticCrawler1 = new DomesticCrawler1();
    const result = await domesticCrawler1.moef();
    // console.log(result);
    mains = JSON.stringify(result);
    fs.writeFileSync("../book2/kakao/test1.1.json", mains, "utf-8");
  } catch (e) {
    console.error("moef failed", e);
  }
}

main();

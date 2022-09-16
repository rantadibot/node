const DomesticCrawler6 = require("./sucess6.js");
const fs = require("fs");
async function main() {
  try {
    const domesticCrawler6 = new DomesticCrawler6();
    const result = await domesticCrawler6.me();
    mains = JSON.stringify(result);
    fs.writeFileSync("../book2/kakao/test6.json", mains, "utf-8");
  } catch (e) {
    console.error("me failed", e);
  }
}

main();

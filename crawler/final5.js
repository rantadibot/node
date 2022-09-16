const DomesticCrawler5 = require("./sucess5.js");
const fs = require("fs");
async function main() {
  try {
    const domesticCrawler5 = new DomesticCrawler5();
    const result = await domesticCrawler5.mnd();
    mains = JSON.stringify(result);
    fs.writeFileSync("../book2/kakao/test5.json", mains, "utf-8");
  } catch (e) {
    console.error("mnd failed", e);
  }
}

main();

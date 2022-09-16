const DomesticCrawler2 = require("./sucess2.js");
const fs = require("fs");
async function main() {
  try {
    const domesticCrawler2 = new DomesticCrawler2();
    const result = await domesticCrawler2.motie();
    mains = JSON.stringify(result);
    fs.writeFileSync("../book2/kakao/test2.json", mains, "utf-8");
  } catch (e) {
    console.error("motie failed", e);
  }
}

main();

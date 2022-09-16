const DomesticCrawler4 = require("./sucess4.js");
const fs = require("fs");
async function main() {
  try {
    const domesticCrawler4 = new DomesticCrawler4();
    const result = await domesticCrawler4.mcst();
    mains = JSON.stringify(result);
    fs.writeFileSync("../book2/kakao/test4.json", mains, "utf-8");
  } catch (e) {
    console.error("mcst failed", e);
  }
}

main();

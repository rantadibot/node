const DomesticCrawler3 = require("./sucess3.js");
const fs = require("fs");
async function main() {
  try {
    const domesticCrawler3 = new DomesticCrawler3();
    const result = await domesticCrawler3.mafra();
    mains = JSON.stringify(result);
    fs.writeFileSync("../book2/kakao/test3.json", mains, "utf-8");
  } catch (e) {
    console.error("mafra failed", e);
  }
}

main();

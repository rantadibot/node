const DomesticCrawler7 = require("./sucess7.js");
const fs = require("fs");
async function main() {
  try {
    const domesticCrawler7 = new DomesticCrawler7();
    const result = await domesticCrawler7.good();
    mains = JSON.stringify(result);
    fs.writeFileSync("../book2/kakao/test7.json", mains, "utf-8");
  } catch (e) {
    console.error("good failed", e);
  }
}

main();

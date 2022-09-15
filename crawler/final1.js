const DomesticCrawler = require("./sucess.js");

async function main() {
  try {
    const domesticCrawler = new DomesticCrawler();
    const result = await domesticCrawler.moef();
    console.log(result);
  } catch (e) {
    console.error("moef failed", e);
  }
}

main();

const _ = require("lodash");
const axios = require("axios");
const cheerio = require("cheerio");

class DomesticCrawler7 {
  constructor() {
    this.client = axios.create({
      // ❶ 실제 크롬 웹 브라우저에서 보내는 값과 동일하게 넣기
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
      },
    });
  }

  async good() {
    const url = "https://www.mangoplate.com/search/%EB%8F%84%EB%8B%B4%EB%8F%99";
    const resp = await this.client.get(url);
    const $ = cheerio.load(resp.data);
    return {
      date0: this._getDescs($)[0],
      date1: this._getDescs($)[1],
      date2: this._getDescs($)[2],
      date3: this._getDescs($)[3],
      date4: this._getDescs($)[4],
      thu0: this._getImage($)[0],
      thu1: this._getImage($)[1],
      thu2: this._getImage($)[2],
      thu3: this._getImage($)[3],
      thu4: this._getImage($)[4],
      title0: this._getTitle($)[0],
      title1: this._getTitle($)[1],
      title2: this._getTitle($)[2],
      title3: this._getTitle($)[3],
      title4: this._getTitle($)[4],
      href0: this._getHref($)[0],
      href1: this._getHref($)[1],
      href2: this._getHref($)[2],
      href3: this._getHref($)[3],
      href4: this._getHref($)[4],
      ms: "도담동",
    };
  }
  _getDescs($) {
    let dated = [];
    let dates = $(".etc");
    dates.each((idx, el) => {
      // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      dated.push($(el).text());
    });
    // let date0 = dated[0];
    // console.log(date0);
    return dated;
  }
  _getImage($) {
    let imaged = [];
    let images = $(".restaurant-item img");
    images.each((idx, el) => {
      // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      imaged.push($(el).attr("data-original"));
    });
    return imaged;
  }
  _getTitle($) {
    let titled = [];
    let titles = $(".info h2");
    titles.each((idx, el) => {
      // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      titled.push($(el).text().replace(/\n/gi, "").replace(/ /gi, ""));
    });
    // let title0 = titled[0];
    // console.log(title0);
    return titled;
  }
  _getHref($) {
    let hrefd = [];
    let hrefs = $(".info a");
    hrefs.each((idx, el) => {
      // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      hrefd.push($(el).attr("href"));
    });
    // let href0 = hrefd[0];
    // console.log(href0);
    return hrefd;
  }
}
module.exports = DomesticCrawler7;

const _ = require("lodash");
const axios = require("axios");
const cheerio = require("cheerio");

class DomesticCrawler3 {
  constructor() {
    this.client = axios.create({
      // ❶ 실제 크롬 웹 브라우저에서 보내는 값과 동일하게 넣기
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
      },
    });
  }

  async mafra() {
    const url = "https://www.mafra.go.kr/mafra/293/subview.do";
    const resp = await this.client.get(url);
    const $ = cheerio.load(resp.data);
    return {
      date0: this._getDates($)[1],
      date1: this._getDates($)[2],
      date2: this._getDates($)[3],
      date3: this._getDates($)[4],
      date4: this._getDates($)[5],
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
    };
  }
  _getDates($) {
    let dated = [];
    let dates = $(".date");
    dates.each((idx, el) => {
      // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      dated.push($(el).text());
    });
    // let date0 = dated[0];
    // console.log(date0);
    return dated;
  }

  _getTitle($) {
    let titled = [];
    let titles = $("td p a");
    titles.each((idx, el) => {
      // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      titled.push(
        $(el)
          .text()
          .replace(/\t/gi, "")
          .replace(/\n/gi, "")
          .replace(/새글/gi, "")
      );
    });
    // let title0 = titled[0];
    // console.log(title0);
    return titled;
  }
  _getHref($) {
    let hrefd = [];
    let hrefs = $("td p a");
    hrefs.each((idx, el) => {
      // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      hrefd.push($(el).attr("href"));
    });
    // let href0 = hrefd[0];
    // console.log(href0);
    return hrefd;
  }
}
module.exports = DomesticCrawler3;

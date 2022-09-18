const _ = require("lodash");
const axios = require("axios");
const cheerio = require("cheerio");

class DomesticCrawler {
  constructor() {
    this.client = axios.create({
      // ❶ 실제 크롬 웹 브라우저에서 보내는 값과 동일하게 넣기
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
      },
    });
  }

  async moef() {
    const url =
      "https://www.moef.go.kr/nw/nes/nesdta.do?bbsId=MOSFBBS_000000000028&menuNo=4010100&searchSilDeptId1=1051014&searchKeyword1=&searchCondition3=1";
    const resp = await this.client.get(url);
    const $ = cheerio.load(resp.data);
    return {
      date0: this._getDates($)[0],
      date1: this._getDates($)[1],
      date2: this._getDates($)[2],
      date3: this._getDates($)[3],
      date4: this._getDates($)[4],
      org0: this._getDeparts($)[0],
      org1: this._getDeparts($)[1],
      org2: this._getDeparts($)[2],
      org3: this._getDeparts($)[3],
      org4: this._getDeparts($)[4],
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
      href6:
        "nw/nes/nesdta.do?bbsId=MOSFBBS_000000000028&menuNo=4010100&searchSilDeptId1=1051014&searchKeyword1=&searchCondition3=1",
      ms: "조정국",
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
  _getDeparts($) {
    let departed = [];
    let departs = $(".depart");
    departs.each((idx, el) => {
      // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      departed.push($(el).text());
    });
    // let depart0 = departed[0];
    // console.log(depart0);
    return departed;
  }

  _getTitle($) {
    let titled = [];
    let titles = $(".boardType3.explnList li h3 a");
    titles.each((idx, el) => {
      // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      titled.push($(el).text());
    });
    // let title0 = titled[0];
    // console.log(title0);
    return titled;
  }
  _getHref($) {
    let hrefd = [];
    let hrefs = $(".boardType3.explnList li h3 a");
    hrefs.each((idx, el) => {
      // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
      hrefd.push($(el).attr("href").slice(33, 47));
    });
    // let href0 = hrefd[0];
    // console.log(href0);
    return hrefd;
  }
}
module.exports = DomesticCrawler;

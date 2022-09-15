const axios = require("axios");
const cheerio = require("cheerio");

async function main() {
  // ❶ HTML 로드하기
  const resp = await axios.get(
    "https://www.moef.go.kr/nw/nes/nesdta.do?bbsId=MOSFBBS_000000000028&menuNo=4010100"
  );

  const $ = cheerio.load(resp.data); // ❷ HTML을 파싱하고 DOM 생성하기
  const elements = $(".infoLeft .date"); // ❸ CSS 셀렉터로 원하는 요소 찾기
  const elements2 = $(".infoLeft .depart"); // ❸ CSS 셀렉터로 원하는 요소 찾기
  let date = [];
  let depart = [];
  // ➍ 찾은 요소를 순회하면서 요소가 가진 텍스트를 출력하기
  elements.each((idx, el) => {
    // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
    date.push($(el).text());
  });
  elements2.each((idx, el) => {
    // ❺ text() 메서드를 사용하기 위해 Node 객체인 el을 $로 감싸서 cheerio 객체로 변환
    depart.push($(el).text());
  });
  console.log(date);
}

main();

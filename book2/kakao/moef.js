function readJSON(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}
//함수 사용법
b = [];
readJSON("./test.json", function (text) {
  var Data = JSON.parse(text);
  b.push(Object.values(Data));
  Kakao.init("10427c727cc32d3586ff733617707375");
  Kakao.Share.createCustomButton({
    container: "#moef-btn",
    templateId: 71333,
    templateArgs: {
      date0: b[0][0],
      date1: b[0][1],
      date2: b[0][2],
      date3: b[0][3],
      date4: b[0][4],
      org0: b[0][5],
      org1: b[0][6],
      org2: b[0][7],
      org3: b[0][8],
      org4: b[0][9],
      title0: b[0][10],
      title1: b[0][11],
      title2: b[0][12],
      title3: b[0][13],
      title4: b[0][14],
      href0: b[0][15],
      href1: b[0][16],
      href2: b[0][17],
      href3: b[0][18],
      href4: b[0][19],
      href6: "nw/nes/nesdta.do?bbsId=MOSFBBS_000000000028&menuNo=4010100",
      ms: "기재부",
    },
  });
});

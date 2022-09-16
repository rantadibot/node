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
g = [];
readJSON("./test6.json", function (text) {
  var Data = JSON.parse(text);
  g.push(Object.values(Data));
  Kakao.Share.createCustomButton({
    container: "#me-btn",
    templateId: 71388,
    templateArgs: {
      date0: g[0][0],
      date1: g[0][1],
      date2: g[0][2],
      date3: g[0][3],
      date4: g[0][4],
      org0: g[0][5],
      org1: g[0][6],
      org2: g[0][7],
      org3: g[0][8],
      org4: g[0][9],
      title0: g[0][10],
      title1: g[0][11],
      title2: g[0][12],
      title3: g[0][13],
      title4: g[0][14],
      href0: g[0][15],
      href1: g[0][16],
      href2: g[0][17],
      href3: g[0][18],
      href4: g[0][19],
    },
  });
});

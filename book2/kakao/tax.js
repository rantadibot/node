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
m = [];
readJSON("./test1.1.json", function (text) {
  var Data = JSON.parse(text);
  m.push(Object.values(Data));
  Kakao.Share.createCustomButton({
    container: "#moef3-btn",
    templateId: 71333,
    templateArgs: {
      date0: m[0][0],
      date1: m[0][1],
      date2: m[0][2],
      date3: m[0][3],
      date4: m[0][4],
      org0: m[0][5],
      org1: m[0][6],
      org2: m[0][7],
      org3: m[0][8],
      org4: m[0][9],
      title0: m[0][10],
      title1: m[0][11],
      title2: m[0][12],
      title3: m[0][13],
      title4: m[0][14],
      href0: m[0][15],
      href1: m[0][16],
      href2: m[0][17],
      href3: m[0][18],
      href4: m[0][19],
      href6: m[0][20],
      ms: m[0][21],
    },
  });
});

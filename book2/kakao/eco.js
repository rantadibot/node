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
n = [];
readJSON("./test1.2.json", function (text) {
  var Data = JSON.parse(text);
  n.push(Object.values(Data));
  Kakao.Share.createCustomButton({
    container: "#moef4-btn",
    templateId: 71333,
    templateArgs: {
      date0: n[0][0],
      date1: n[0][1],
      date2: n[0][2],
      date3: n[0][3],
      date4: n[0][4],
      org0: n[0][5],
      org1: n[0][6],
      org2: n[0][7],
      org3: n[0][8],
      org4: n[0][9],
      title0: n[0][10],
      title1: n[0][11],
      title2: n[0][12],
      title3: n[0][13],
      title4: n[0][14],
      href0: n[0][15],
      href1: n[0][16],
      href2: n[0][17],
      href3: n[0][18],
      href4: n[0][19],
      href6: n[0][20],
      ms: n[0][21],
    },
  });
});

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
f = [];
readJSON("./test5.json", function (text) {
  var Data = JSON.parse(text);
  f.push(Object.values(Data));
  Kakao.Share.createCustomButton({
    container: "#mnd-btn",
    templateId: 71331,
    templateArgs: {
      date0: f[0][0],
      date1: f[0][1],
      date2: f[0][2],
      date3: f[0][3],
      date4: f[0][4],
      org0: f[0][5],
      org1: f[0][6],
      org2: f[0][7],
      org3: f[0][8],
      org4: f[0][9],
      title0: f[0][10],
      title1: f[0][11],
      title2: f[0][12],
      title3: f[0][13],
      title4: f[0][14],
      href0: f[0][15],
      href1: f[0][16],
      href2: f[0][17],
      href3: f[0][18],
      href4: f[0][19],
    },
  });
});

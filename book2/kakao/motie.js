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
c = [];
readJSON("./test2.json", function (text) {
  var Data = JSON.parse(text);
  c.push(Object.values(Data));
  Kakao.Share.createCustomButton({
    container: "#send-to-btn2",
    templateId: 71368,
    templateArgs: {
      date0: c[0][0],
      date1: c[0][1],
      date2: c[0][2],
      date3: c[0][3],
      date4: c[0][4],
      org0: c[0][5],
      org1: c[0][6],
      org2: c[0][7],
      org3: c[0][8],
      org4: c[0][9],
      title0: c[0][10],
      title1: c[0][11],
      title2: c[0][12],
      title3: c[0][13],
      title4: c[0][14],
      href0: c[0][15],
      href1: c[0][16],
      href2: c[0][17],
      href3: c[0][18],
      href4: c[0][19],
    },
  });
});

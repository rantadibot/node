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
d = [];
readJSON("./test3.json", function (text) {
  var Data = JSON.parse(text);
  d.push(Object.values(Data));
  Kakao.Share.createCustomButton({
    container: "#send-to-btn3",
    templateId: 71382,
    templateArgs: {
      date0: d[0][0],
      date1: d[0][1],
      date2: d[0][2],
      date3: d[0][3],
      date4: d[0][4],
      title0: d[0][5],
      title1: d[0][6],
      title2: d[0][7],
      title3: d[0][8],
      title4: d[0][9],
      href0: d[0][10],
      href1: d[0][11],
      href2: d[0][12],
      href3: d[0][13],
      href4: d[0][14],
    },
  });
});

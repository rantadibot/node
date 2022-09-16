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
e = [];
readJSON("./test4.json", function (text) {
  var Data = JSON.parse(text);
  e.push(Object.values(Data));
  Kakao.init("10427c727cc32d3586ff733617707375");

  Kakao.Share.createCustomButton({
    container: "#send-to-btn0",
    templateId: 71387,
    templateArgs: {
      date0: e[0][0],
      date1: e[0][1],
      date2: e[0][2],
      date3: e[0][3],
      date4: e[0][4],
      title0: e[0][5],
      title1: e[0][6],
      title2: e[0][7],
      title3: e[0][8],
      title4: e[0][9],
      href0: e[0][10],
      href1: e[0][11],
      href2: e[0][12],
      href3: e[0][13],
      href4: e[0][14],
    },
  });
});

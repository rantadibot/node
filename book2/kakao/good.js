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
h = [];
readJSON("./test7.json", function (text) {
  var Data = JSON.parse(text);
  h.push(Object.values(Data));
  Kakao.Share.createCustomButton({
    container: "#good-btn",
    templateId: 71563,
    templateArgs: {
      date0: h[0][0],
      date1: h[0][1],
      date2: h[0][2],
      date3: h[0][3],
      date4: h[0][4],
      thu0: h[0][5],
      thu1: h[0][6],
      thu2: h[0][7],
      thu3: h[0][8],
      thu4: h[0][9],
      title0: h[0][10],
      title1: h[0][11],
      title2: h[0][12],
      title3: h[0][13],
      title4: h[0][14],
      href0: h[0][15],
      href1: h[0][16],
      href2: h[0][17],
      href3: h[0][18],
      href4: h[0][19],
      ms: "도담동",
    },
  });
});

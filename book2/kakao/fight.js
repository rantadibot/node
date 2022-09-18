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
o = [];
readJSON("./test1.3.json", function (text) {
  var Data = JSON.parse(text);
  o.push(Object.values(Data));
  Kakao.Share.createCustomButton({
    container: "#moef5-btn",
    templateId: 71333,
    templateArgs: {
      date0: o[0][0],
      date1: o[0][1],
      date2: o[0][2],
      date3: o[0][3],
      date4: o[0][4],
      org0: o[0][5],
      org1: o[0][6],
      org2: o[0][7],
      org3: o[0][8],
      org4: o[0][9],
      title0: o[0][10],
      title1: o[0][11],
      title2: o[0][12],
      title3: o[0][13],
      title4: o[0][14],
      href0: o[0][15],
      href1: o[0][16],
      href2: o[0][17],
      href3: o[0][18],
      href4: o[0][19],
      href6: o[0][20],
      ms: o[0][21],
    },
  });
});

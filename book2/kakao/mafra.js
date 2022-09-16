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
  console.log(Data);
  c.push(Object.values(Data));
  Kakao.Share.createCustomButton({
    container: "#send-to-btn3",
    templateId: 71382,
    templateArgs: {
      date0: d[0],
      date1: d[1],
      date2: d[2],
      date3: d[3],
      date4: d[4],
      title0: d[10],
      title1: d[11],
      title2: d[12],
      title3: d[13],
      title4: d[14],
      href0: d[15],
      href1: d[16],
      href2: d[17],
      href3: d[18],
      href4: d[19],
    },
  });
});

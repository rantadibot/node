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
l = [];
readJSON("./test1.json", function (text) {
  var Data = JSON.parse(text);
  l.push(Object.values(Data));
  Kakao.Share.createCustomButton({
    container: "#moef2-btn",
    templateId: 71333,
    templateArgs: {
      date0: l[0][0],
      date1: l[0][1],
      date2: l[0][2],
      date3: l[0][3],
      date4: l[0][4],
      org0: l[0][5],
      org1: l[0][6],
      org2: l[0][7],
      org3: l[0][8],
      org4: l[0][9],
      title0: l[0][10],
      title1: l[0][11],
      title2: l[0][12],
      title3: l[0][13],
      title4: l[0][14],
      href0: l[0][15],
      href1: l[0][16],
      href2: l[0][17],
      href3: l[0][18],
      href4: l[0][19],
      href6:
        "nw/nes/nesdta.do?bbsId=MOSFBBS_000000000028&menuNo=4010100&searchSilDeptId1=1051011&searchKeyword1=&searchCondition3=1",
      ms: "예산실",
    },
  });
});

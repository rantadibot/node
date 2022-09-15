const fs = require("fs");
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

books = JSON.stringify(book);
fs.writeFileSync("test.json", books, "utf-8");

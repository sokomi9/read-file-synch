const reader2 = require("node:fs");

const readableStream = reader2.readFileSync("file1.txt", "utf-8");
console.log(readableStream);
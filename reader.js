const reader = require("node:fs");

const readableStream = reader.readFileSync("./file1.txt", "utf-8");
console.log(readableStream);
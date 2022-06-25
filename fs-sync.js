const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/sub-content/first.txt", "utf-8");
const second = readFileSync("./content/sub-content/second.txt", "utf-8");

console.log(first);
console.log(second);

writeFileSync(
  "content/sub-content/write-sync.txt",
  `This is modified using NodeJS. Here is first text : ${first}, Here is second text : ${second}`,
  { flag: "a" }
);

const writesync = readFileSync("./content/sub-content/write-sync.txt", "utf-8");
console.log(writesync);

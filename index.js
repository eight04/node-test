const assert = require("assert");
const fs = require("fs");
fs.writeFileSync("config.js", "module.exports = () => 'hello'", "utf8");
const hello = require("./config");
assert.equal(hello(), "hello");
fs.unlinkSync("config.js");

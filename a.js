var a = "hello";
module.exports = function() {
  return Promise.resolve(require("./b.js"))
    .then(b => a + " " + b);
};

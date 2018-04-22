define(['require'], function (require) { 'use strict';

  var a = "hello";
  var a_1 = function() {
    return new Promise(function (resolve, reject) { require(["./b.js"], resolve, reject) })
      .then(b => a + " " + b);
  };

  return a_1;

});

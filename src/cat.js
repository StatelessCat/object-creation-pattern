var mammal = require("./mammal.js");

var cat = function (spec) {
  "use strict";

  var that = mammal(spec);
  that.purr = function () {
    return "purr";
  };

  return that;
};

module.exports = cat;

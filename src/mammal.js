var mammal = function (spec) {
  "use strict";

  var that = {};

  that.says = function () {
    return spec.saying || "";
  };

  return that;
};

module.exports = mammal;

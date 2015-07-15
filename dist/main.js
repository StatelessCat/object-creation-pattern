(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./mammal.js":3}],2:[function(require,module,exports){
var cat = require("./cat.js");
var mammal = require("./mammal.js");

var myMammal = mammal({name: 'Kitty', saying: 'grao'});
var myCat = cat({name: 'Jason', saying: 'meow'});
console.log(myMammal.says());
console.log(myCat.says());
console.log(myCat.purr());

},{"./cat.js":1,"./mammal.js":3}],3:[function(require,module,exports){
var mammal = function (spec) {
  "use strict";

  var that = {};

  that.says = function () {
    return spec.saying || "";
  };

  return that;
};

module.exports = mammal;

},{}]},{},[1,2,3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2F0LmpzIiwic3JjL21haW4uanMiLCJzcmMvbWFtbWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBtYW1tYWwgPSByZXF1aXJlKFwiLi9tYW1tYWwuanNcIik7XG5cbnZhciBjYXQgPSBmdW5jdGlvbiAoc3BlYykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgdGhhdCA9IG1hbW1hbChzcGVjKTtcbiAgdGhhdC5wdXJyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcInB1cnJcIjtcbiAgfTtcblxuICByZXR1cm4gdGhhdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY2F0O1xuIiwidmFyIGNhdCA9IHJlcXVpcmUoXCIuL2NhdC5qc1wiKTtcbnZhciBtYW1tYWwgPSByZXF1aXJlKFwiLi9tYW1tYWwuanNcIik7XG5cbnZhciBteU1hbW1hbCA9IG1hbW1hbCh7bmFtZTogJ0tpdHR5Jywgc2F5aW5nOiAnZ3Jhbyd9KTtcbnZhciBteUNhdCA9IGNhdCh7bmFtZTogJ0phc29uJywgc2F5aW5nOiAnbWVvdyd9KTtcbmNvbnNvbGUubG9nKG15TWFtbWFsLnNheXMoKSk7XG5jb25zb2xlLmxvZyhteUNhdC5zYXlzKCkpO1xuY29uc29sZS5sb2cobXlDYXQucHVycigpKTtcbiIsInZhciBtYW1tYWwgPSBmdW5jdGlvbiAoc3BlYykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgdGhhdCA9IHt9O1xuXG4gIHRoYXQuc2F5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3BlYy5zYXlpbmcgfHwgXCJcIjtcbiAgfTtcblxuICByZXR1cm4gdGhhdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFtbWFsO1xuIl19

var cat = require("./cat.js");
var mammal = require("./mammal.js");

var myMammal = mammal({name: 'Kitty', saying: 'grao'});
var myCat = cat({name: 'Jason', saying: 'meow'});
console.log(myMammal.says());
console.log(myCat.says());
console.log(myCat.purr());

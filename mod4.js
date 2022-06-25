//Modules
const { name1, name2 } = require("./mod1");
const { sayHi, sayHello } = require("./mod2");
const data = require("./alt-mod");
require("./mod3");
sayHi(name1);
sayHi(name2);
sayHello(name1);
sayHello(name2);
// console.log(module);

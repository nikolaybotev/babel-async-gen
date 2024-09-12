var runtime = require("regenerator-runtime")

async function *foo() {}

var fooPrototype = Object.getPrototypeOf(foo())
var asyncGeneratorPrototype = Object.getPrototypeOf(fooPrototype)
var asyncIteratorPrototype = Object.getPrototypeOf(asyncGeneratorPrototype)
//var objectPrototype = Object.getPrototypeOf(asyncIteratorPrototype)
//var theEnd = Object.getPrototypeOf(objectPrototype)

runtime.AsyncIterator.prototype.drop = function() {}

console.log(foo().drop)

console.log("AsyncIterator =>", runtime.AsyncIterator)
console.log("AsyncIterator.prototype =>", runtime.AsyncIterator.prototype)
console.log("fooPrototype =>", fooPrototype, fooPrototype === runtime.AsyncIterator.prototype)
console.log("asyncGeneratorPrototype =>", asyncGeneratorPrototype, asyncGeneratorPrototype === runtime.AsyncIterator.prototype)
console.log("asyncIteratorPrototype =>", asyncIteratorPrototype, asyncIteratorPrototype === runtime.AsyncIterator.prototype)

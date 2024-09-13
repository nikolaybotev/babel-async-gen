var runtime = require("regenerator-runtime")

const trace = (obj, j = ",") => obj&&[Object.getOwnPropertyNames(obj),Object.getOwnPropertySymbols(obj).map(x=>x.toString())].flatMap(_=>_).join(j);


async function *foo() { yield 42 }
async function *bar() { yield "hi" }

var fooPrototype = Object.getPrototypeOf(foo())
var barPrototype = Object.getPrototypeOf(bar())
var asyncGeneratorPrototype = Object.getPrototypeOf(fooPrototype)
var asyncIteratorPrototype = Object.getPrototypeOf(asyncGeneratorPrototype)
var objectPrototype = asyncIteratorPrototype ? Object.getPrototypeOf(asyncIteratorPrototype) : null
var theEnd = objectPrototype ? Object.getPrototypeOf(objectPrototype) : null

console.log("foo().__proto__ === foo.prototype", foo().__proto__ === foo.prototype)
console.log("foo() instanceof foo", foo() instanceof foo)
console.log("fooPrototype =>", trace(fooPrototype), fooPrototype === runtime.AsyncIterator.prototype)
console.log("barPrototype =>", trace(barPrototype), barPrototype === fooPrototype)
console.log("asyncGeneratorPrototype =>", trace(asyncGeneratorPrototype), asyncGeneratorPrototype === runtime.AsyncIterator.prototype, asyncGeneratorPrototype === Object.prototype)
console.log("asyncIteratorPrototype =>", trace(asyncIteratorPrototype), asyncIteratorPrototype === runtime.AsyncIterator.prototype)
console.log(objectPrototype)
console.log(theEnd)

var runtime = require("regenerator-runtime")

function trace(obj) {
  if (!obj) {
    return "null"
  }
  return Object.getOwnPropertyNames(obj).join(",") + "," + Object.getOwnPropertySymbols(obj).map(x => x.toString()).join(",")
}

function* foo() {}

var fooPrototype = Object.getPrototypeOf(foo())
var generatorPrototype = Object.getPrototypeOf(fooPrototype)
var iteratorPrototype = generatorPrototype ? Object.getPrototypeOf(generatorPrototype) : null
var objectPrototype = iteratorPrototype ? Object.getPrototypeOf(iteratorPrototype) : null
var theEnd = objectPrototype ? Object.getPrototypeOf(objectPrototype) : null

console.log("Iterator.prototype.constructor === (Object?)", iteratorPrototype.constructor, iteratorPrototype.constructor === Object)
console.log("foo.prototype.__proto__.__proto__ === [].values().__proto__.__proto__", iteratorPrototype === [].values().__proto__.__proto__)
console.log("foo.__proto__.prototype === foo().__proto__.__proto__", foo.__proto__.prototype === foo().__proto__.__proto__)
console.log("foo.prototype.constructor === foo.__proto__", foo.prototype.constructor === foo.__proto__)
console.log("foo.prototype.constructor === foo", foo.prototype.constructor === foo)
console.log("foo().__proto__ === foo.prototype", foo().__proto__ === foo.prototype)
console.log("foo() instanceof foo", foo() instanceof foo)
console.log("fooPrototype - Generator =>", trace(fooPrototype))
console.log("generatorPrototype - GeneratorPrototype =>", trace(generatorPrototype))
console.log("iteratorPrototype - IteratorPrototype =>", trace(iteratorPrototype))
console.log(objectPrototype)
console.log(theEnd)

const Iterator = iteratorPrototype.constructor
// Add an iterator helper
Iterator.prototype.forEach = function() { /* ... */ }

// Make a custom Iterator class
class RepeatIterator extends Iterator { next() { return { value: 42 } } }

// The iterator helper is available here!
new RepeatIterator().forEach();

for (const n of new RepeatIterator()) {
  console.log(n);
  break;
}
// prints 42
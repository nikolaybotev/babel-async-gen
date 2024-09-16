require("./async-iterator-setup.cjs");

require("core-js/actual/promise");
require("core-js/actual/symbol");
require("core-js/actual/async-iterator/drop");
require("core-js/actual/async-iterator/take");
require("core-js/actual/async-iterator/filter");
require("core-js/actual/async-iterator/map");
require("streams/factories/async-iterator.js");

async function* gen() {
  yield* [1, 2, 3, 4, 5];
}

gen()
  .drop(1)
  .take(3)
  .filter(n => n != 3)
  .map(n => n * 10)
  .stream()
  .batch(2)
  .forEach(n => console.log(n));
console.log("Hello world");
import "./async-iterator-setup.cjs";
import "core-js/proposals/async-iterator-helpers.js";
import "streams/factories/index.js";

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

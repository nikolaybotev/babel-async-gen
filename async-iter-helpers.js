//import configurator from "core-js/configurator.js";
{
  const asyncGeneratorInstancePrototype = Object.getPrototypeOf(async function*(){}());
  const AsyncGeneratorPrototype = Object.getPrototypeOf(asyncGeneratorInstancePrototype);
  let AsyncIteratorPrototype;
  if (AsyncGeneratorPrototype === Object.prototype) {
    // Fix-up for babel's transform-async-generator-functions
    console.log("FIXUP");
    AsyncIteratorPrototype = {};
    Object.setPrototypeOf(asyncGeneratorInstancePrototype, AsyncIteratorPrototype);
  } else {
    AsyncIteratorPrototype = Object.getPrototypeOf(AsyncGeneratorPrototype);
  }
  (await import("core-js/configurator.js")).default({ AsyncIteratorPrototype });
}
await import("core-js/proposals/async-iterator-helpers.js");
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

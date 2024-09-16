const asyncGeneratorInstancePrototype = Object.getPrototypeOf(async function*(){}());
const AsyncGeneratorPrototype = Object.getPrototypeOf(asyncGeneratorInstancePrototype);
let AsyncIteratorPrototype;
if (AsyncGeneratorPrototype === Object.prototype) {
  // Fix-up for babel's transform-async-generator-functions
  AsyncIteratorPrototype = {};
  const newAsyncGeneratorPrototype = Object.create(AsyncIteratorPrototype);
  Object.setPrototypeOf(asyncGeneratorInstancePrototype, newAsyncGeneratorPrototype);
} else {
  AsyncIteratorPrototype = Object.getPrototypeOf(AsyncGeneratorPrototype);
}
require("core-js/configurator.js")({ AsyncIteratorPrototype });

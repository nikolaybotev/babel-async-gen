require("core-js/proposals/iterator-helpers-stage-3-2");

console.log(AsyncIterator);
console.log(async function*(){}().__proto__.__proto__.__proto__);
console.log(async function*(){}().__proto__.__proto__.__proto__.constructor);
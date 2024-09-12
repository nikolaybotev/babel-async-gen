import "core-js/actual";

async function* asyncGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

async function main() {
  console.log([1, 20, 30].values().drop(1).toArray().join(","));
  for await (const x of AsyncIterator.from(asyncGenerator()).drop(1)) {
    console.log(x);
  }
}

main().then(() => console.log("done!"));

const gen = asyncGenerator();

console.log(Object.getPrototypeOf(gen)); // function asyncGenerator()
console.log(Object.getPrototypeOf(Object.getPrototypeOf(gen))); // AsyncGenerator
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(gen)))); // AsyncIterator

const myGenerator = function* (){}();
const myAsyncGenerator = async function* (){}();
console.log("drop() on array.values(): ", [].values().drop);
console.log("drop() on generator", myGenerator.drop);
console.log("drop() on async generator", myAsyncGenerator.drop);

console.log("generator proto", myGenerator.__proto__);
console.log("generator proto.proto", myGenerator.__proto__.__proto__);
console.log("generator proto.proto.proto", myGenerator.__proto__.__proto__.__proto__);
console.log("generator proto.proto.proto.proto", myGenerator.__proto__.__proto__.__proto__.__proto__);
console.log("generator proto.proto.proto.proto", myGenerator.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log("array.values() proto", [].values().__proto__);
console.log("array.values() proto.proto", [].values().__proto__.__proto__);
console.log("array.values() proto.proto.proto", [].values().__proto__.__proto__.__proto__);
console.log("array.values() proto.proto.proto.proto", [].values().__proto__.__proto__.__proto__.__proto__);
// console.log("generator proto", myGenerator.__proto__);
// console.log("generator proto", myGenerator.__proto__);
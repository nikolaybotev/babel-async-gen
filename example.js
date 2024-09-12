require("core-js/actual");

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

const myGenerator = function* (){}();
const myAsyncGenerator = async function* (){}();
console.log("drop() on array.values(): ", [].values().drop);
console.log("drop() on generator", myGenerator.drop);
console.log("drop() on async generator", myAsyncGenerator.drop);
console.log();

console.log("generator proto", myGenerator.__proto__);
console.log("generator proto.proto", myGenerator.__proto__.__proto__);
console.log("generator proto.proto.proto", myGenerator.__proto__.__proto__.__proto__);
console.log("generator proto.proto.proto.proto", myGenerator.__proto__.__proto__.__proto__.__proto__);
console.log("generator proto.proto.proto.proto.proto", myGenerator.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log();

console.log("array.values() proto", [].values().__proto__);
console.log("array.values() proto.proto", [].values().__proto__.__proto__);
console.log("array.values() proto.proto.proto", [].values().__proto__.__proto__.__proto__);
console.log("array.values() proto.proto.proto.proto", [].values().__proto__.__proto__.__proto__.__proto__);
console.log();

console.log("async generator proto", myAsyncGenerator.__proto__);
console.log("async generator proto.proto", myAsyncGenerator.__proto__.__proto__);
console.log("async generator proto.proto.proto", myAsyncGenerator.__proto__.__proto__.__proto__);
console.log("async generator proto.proto.proto.proto", myAsyncGenerator.__proto__.__proto__.__proto__?.__proto__);
console.log("async generator proto.proto.proto.proto.proto", myAsyncGenerator.__proto__.__proto__.__proto__?.__proto__?.__proto__);
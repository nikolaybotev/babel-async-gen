import "core-js/actual/index.js";

console.log("drop() on array.values(): ", [].values().drop);
const x: IteratorObject<string> = ["a", "b", "C"].values();
x.drop(1).forEach(console.log);

function* gen() { yield "K", yield "L", yield "M" }
const y: Generator<string> = gen()
y.drop(1).forEach(console.log);
import "core-js/actual";

console.log("drop() on array.values(): ", [].values().drop);
["a", "b", "C"].values().drop(1).forEach(console.log);
(function* () { yield "K", yield "L", yield "M"}()).drop(1).forEach(console.log);
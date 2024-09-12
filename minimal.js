const myGenerator = function* (){}();

console.log("generator proto", myGenerator.__proto__);
console.log("generator proto.proto", myGenerator.__proto__.__proto__);
console.log("generator proto.proto.proto", myGenerator.__proto__.__proto__.__proto__);
console.log("generator proto.proto.proto.proto", myGenerator.__proto__.__proto__.__proto__.__proto__);
console.log("generator proto.proto.proto.proto.proto", myGenerator.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log(globalThis.Generator);
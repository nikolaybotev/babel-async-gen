async function* asyncGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

async function main() {
  for await (const x of asyncGenerator()) {
    console.log(x);
  }
}

main().then(() => console.log("done"));

const gen = asyncGenerator();

console.log(Object.getPrototypeOf(gen)); // function asyncGenerator()
console.log(Object.getPrototypeOf(Object.getPrototypeOf(gen))); // AsyncGenerator
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(gen)))); // AsyncIterator

console.log(typeof null); // object
console.log(typeof NaN); // number
console.log(typeof []); // object
console.log(typeof Array); // function
console.log(typeof (() => {})); // function
console.log(typeof Function); // function

// gpt training

console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof "Hello"); // string
console.log(typeof 42); // number
console.log(typeof Symbol("id")); // symbol
console.log(typeof {}); // object
console.log(typeof null); // object
console.log(typeof /regex/); // object

console.log(typeof function () {}); // function
console.log(typeof class {}); // function
console.log(typeof Math); // object
console.log(typeof new Function()); // function
console.log(
  typeof (function () {
    return arguments;
  })()
); // object

console.log(typeof Object); // ?
console.log(typeof Array); // ?
console.log(typeof Number); // ?
console.log(typeof String); // ?
console.log(typeof Boolean); // ?

console.log(typeof []); // ?
console.log(typeof (() => {})); // ?
console.log(typeof async function () {}); // ?
console.log(typeof new Date()); // ?
console.log(typeof JSON); // ?

console.log(typeof Infinity); // ?
console.log(typeof NaN); // ?
console.log(typeof null === "object"); // ?
console.log(typeof document === "undefined"); // ?
console.log(typeof window === "undefined"); // ?

console.log([] == []); // false - разные объекты в памяти
console.log([] === []); // false - разные объекты в памяти
console.log({} == {}); // false - разные объекты в памяти
console.log({} === {}); // false - разные объекты в памяти
console.log(NaN == NaN); // false - NaN не равен самому себе
console.log(NaN === NaN); // false - NaN не равен самому себе
console.log(undefined == null); // true - нестрогое сравнение считает их равными
console.log(null === undefined); // false - строгие сравнение считает их разными типами

// gpt - train
console.log("5" == 5); // true
console.log("5" === 5); // false
console.log("10" > 2); // true
console.log("10" < 2); // false

console.log({} == "[object Object]"); // false
console.log({} === "[object Object]"); // false
console.log({} == {}); // false
console.log({} === {}); // false
console.log({} == false); // false
console.log({} == true); // false

/* !!!  */ console.log([] == ""); // false (-1) - будет true
console.log([] === ""); // false
console.log([1, 2, 3].toString() == "1,2,3"); // true
/* !!!  */ console.log([1, 2, 3] == "1,2,3"); // false (-1) - будет true

/* !!!  */ console.log(null == 0); // true (-1) - будет false
console.log(null === 0); // false
/* !!!  */ console.log(undefined == 0); // true (-1) - будет false
console.log(undefined === 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

/* !!!  */ console.log(true == 1); // false (-1) - будет true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false
/* !!!  */ console.log(true == "1"); // false (-1) - будет true
console.log(false == "0"); // true

console.log(Symbol("foo") == "foo"); // false
console.log(Symbol("foo") === "foo"); // false
console.log(Symbol("foo") == Symbol("foo")); // false
console.log(Symbol("foo") === Symbol("foo")); // false

//212

function biba() {
  let counter = 0;
  function increment() {
    counter++;
    console.log(counter);
  }

  let message = `Counter is ${counter}`;

  function log() {
    console.log(message);
  }

  return [increment, log];
}

console.log(undefined == null);

const [increment, log] = biba();
increment();
increment();
increment();
log();

// #2

function sumDigits(x) {
  return function (num) {
    return console.log(x + num);
  };
}

const result = sumDigits(10);
result(2);

/// Задача на замыкание с собеса
let i = 0;
while (i++ < 10) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

function curr (fn) {
  return function fn(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function(...next )
    }
  }
}
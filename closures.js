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

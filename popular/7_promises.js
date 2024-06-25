/// не выведется тк тут результат сохраняется в переменную и она будет возвращать промисс всегда
const debounce = async function (callback) {
  const res = await fetch(callback).then((res) => res.json());

  return res;
};

// для того чтобы увидеть результат нужно запустить эту функцию в другой асинхронной функции и уже там ловить результат выполнения промиса
(async () => {
  const kek = await debounce("https://jsonplaceholder.typicode.com/todos/1");
  console.log(kek);
})();

///

async function debounceDeclaration(callback) {
  const res = await fetch(callback).then((res) => res.json());

  await new Promise((resolve) => {
    resolve(console.log(res));
  });

  await new Promise((resolve, reject) => {
    let isError = false;

    setTimeout(() => {
      if (isError) return reject("error");
      return resolve("success");
    }, 2000);
  }).then((res) => {
    console.log(res);
  });

  return res;
}

debounceDeclaration("https://jsonplaceholder.typicode.com/todos/1");

//console.log(debounce("https://jsonplaceholder.typicode.com/todos/1"));

// delay - написать реализацию функции

const delay = (time) => {
  return new Promise((resolve) => {
    return setTimeout(() => {
      resolve();
    }, time);
  });
};

delay(5000).then(() => console.log("5000 sec"));

/// Написать браузерный ПромисАлл

Promise.all([
  Promise.resolve(1),
  fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
    response.json()
  ),
  fetch("https://jsonplaceholder.typicode.com/todos/2").then((response) =>
    response.json()
  ),
  fetch("https://jsonplaceholder.typicode.com/todos/3").then((response) =>
    response.json()
  ),
  Promise.resolve(10),
]).then((result) => {
  console.log(result); // [1, 20, 30, 40, 10]
});

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

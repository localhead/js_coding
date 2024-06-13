const debounce = async function (callback, delay) {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(callback).then((res) => {
          if (res.status !== 200) reject("lox pidr!!");

          return resolve(res.json());
        });
      }, delay * 1000);
    }).then((res) => {
      console.log(res);
    });
  } catch (e) {
    console.error("fuck!!!!1", e);
  }
};

debounce("https://jsonplaceholder.typicode.com/todos/1", 2);

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (res) => res.json()
  );
  //console.log(res);

  return res;
}

const fetchDataPromise = function () {
  new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resolve(data);
      });
  });
};

//fetchDataPromise();

//console.log(fetchData());

const asyncFn1 = async () => {
  await new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve(console.log("2 seconds"));
    }, 2000);
  });

  const data = await fetch("https://jsonplaceholder.typicode.com/posts/2").then(
    (res) => res.json()
  );

  return data;
};

//asyncFn1();

const seeFn1 = async () => {
  console.log(await asyncFn1());
};

seeFn1();

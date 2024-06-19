async function retryFetch(url, { retryCount, timeout }) {
  let counter = 0;

  let timer = 0;

  try {
    const timeOutInterval = setInterval(() => {
      timer++;

      if (timer > timeout) {
        clearInterval(timeOutInterval);
      }
    }, 1000);

    const interval = setInterval(async () => {
      const data = await new Promise((resolve, reject) => {
        console.log(timer);
        if (timer > timeout) reject(new Error("fail"));

        fetch(url).then((res) => {
          resolve(res.json());
        });
      });

      console.log(timer);

      console.log(data);

      counter++;

      if (counter >= retryCount) clearInterval(interval);
    }, 1000);

    //console.log(data);
  } catch (e) {
    //console.log(e);
  }
}

retryFetch("https://jsonplaceholder.typicode.com/posts/2", {
  retryCount: 3,
  timeout: 1,
});

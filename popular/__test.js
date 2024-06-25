function doIT() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Other data fetched in 5 sec");
      console.log("done 2");
      resolve("done");
    }, 5000);
  });
}

async function timeout() {
  console.log("Loading data.. wait");
  setTimeout(() => {
    console.log("Data loaded in 5 sec");
  }, 5000);
}

(async () => {
  console.log("lol");

  const msg = await doIT();
  await timeout();

  //console.log(msg);
})();

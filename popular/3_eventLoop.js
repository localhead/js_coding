////
/*

console.log(1);

const a = new Promise((resolve, reject) => {
  console.log(2);
  reject();
});

setTimeout(() => {
  console.log(3);
});

a.then(() => console.log(4))
  .catch(() => console.log(5))
  .catch(() => console.log(6))
  .then(() => console.log(7));

console.log(8);

//// 1, 2 , 8 , 5, 7 , 3 , 8

/// еще задачка

async function f() {
  console.log(1);

  const promise = new Promise((resolve) => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
      resolve("ГОТОВО!");
      console.log(4);
    });
  });

  console.log(5);

  const result = await promise;
  console.log(6);
  console.log(result);
  return "Result";
}

f();
console.log(7);

// 1 , 2 , 5  , 3 , 4 , 6 , ГОТОВО

// T1
setTimeout(() => {
  console.log("T1_0");
}, 2000);

new Promise((resolve) => {
  console.log("T1_1");
  resolve("T1_resolve_0");
}).then((res) => {
  console.log(res);
});

console.log("T1_2");

setTimeout(() => {
  new Promise((resolve) => {
    console.log("T1_2");
    resolve("T1_resolve_1");
  }).then((res) => {
    console.log(res);
  });
  console.log("T1_6");
}, 3000);

// T1_1,  T1_2 ,  T1_resolve_0, T1_0, T1_2, T1_6, T1_resolve_1


console.log("Task 1");

setTimeout(() => {
  console.log("Task 2");

  Promise.resolve().then(() => {
    console.log("Task 3");
  });

  setTimeout(() => {
    console.log("Task 4");

    Promise.resolve().then(() => {
      console.log("Task 5");
    });
  }, 0);
}, 0);

Promise.resolve().then(() => {
  console.log("Task 6");

  setTimeout(() => {
    console.log("Task 7");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Task 8");
  });
});

setTimeout(() => {
  console.log("Task 9");
}, 0);

console.log("Task 10");

// Task 1 , Task 10, Task 6, Task 8, Task 7 , Task 2, Task 3, Task 4, Task 5, Task 9  - my variant
// Task 1 , Task 10, Task 6, Task 8, Task 2, Task 3, Task 9, Task 7  Task 4, Task 5 - correct variant



// Вывод: когда в  коде полно вложенных макротасок и он вложены по разному в промисы и другие макротаски -
// они всегда выполнятся потом одним списком, друг за другом в порядке появления в коде.

console.log("Task A");

setTimeout(() => {
  console.log("Task B");
}, 0);

Promise.resolve().then(() => {
  console.log("Task C");

  setTimeout(() => {
    console.log("Task D");

    Promise.resolve().then(() => {
      console.log("Task E");
    });

    queueMicrotask(() => {
      console.log("Task F");
    });
  }, 0);

  queueMicrotask(() => {
    console.log("Task G");
  });
});

setTimeout(() => {
  console.log("Task H");

  Promise.resolve().then(() => {
    console.log("Task I");
  });

  setTimeout(() => {
    console.log("Task J");
  }, 0);
}, 0);

queueMicrotask(() => {
  console.log("Task K");
});

console.log("Task L");

// Task A,  Task L,  Task C,  Task G, Task K, Task B, Task H,  Task I,  Task D, Task E, Task F, Task J - мой вариант
// Task A,  Task L,  Task C,  Task K, Task G, Task B, Task H,  Task I,  Task D, Task E, Task F, Task J - правильный вариант.


console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

new Promise((resolve) => {
  console.log("3");
  resolve();
}).then(() => {
  console.log("4");
  new Promise((resolve) => {
    console.log("5");
    setTimeout(() => {
      console.log("6");
      resolve();
    }, 0);
  }).then(() => {
    console.log("7");
  });
});

console.log("8");

queueMicrotask(() => {
  console.log("9");
});

setTimeout(() => {
  console.log("10");
  queueMicrotask(() => {
    console.log("11");
  });
}, 0);

// 1, 3, 8, 4, 9 , 5, 7 , 2 , 10 , 11 , 6

 

console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise 1");
  });

  setTimeout(() => {
    console.log("Timeout 2");
    queueMicrotask(() => {
      console.log("Microtask 1");
    });

    new Promise((resolve) => {
      console.log("Promise 2");
      resolve();
    }).then(() => {
      console.log("Then 1");
    });
  }, 0);

  queueMicrotask(() => {
    console.log("Microtask 2");
  });
}, 0);

new Promise((resolve) => {
  console.log("Promise 3");
  resolve();
}).then(() => {
  console.log("Then 2");
  setTimeout(() => {
    console.log("Timeout 3");
  }, 0);
});

queueMicrotask(() => {
  console.log("Microtask 3");

  setTimeout(() => {
    console.log("Timeout 4");
  }, 0);

  new Promise((resolve) => {
    console.log("Promise 4");
    resolve();
  }).then(() => {
    console.log("Then 3");
  });
});

console.log("End");

// 'Start', 'Promise 3, 'Microtask 3', 'End', 'Then 2', 'Promise 4' , 'Then 3', 'Timeout 1', 'Promise 1', 'Microtask 2', 'Timeout 3',
// 'Timeout 4', 'Timeout 2', 'Promise 2', 'Microtask 1', 'Then 1' - ошибка ток в одном месте

*/

console.log("Step 1: In global scope");

setTimeout(() => console.log("Step 2: In setTimeout"));

new Promise((resolve) => {
  console.log("Step 3: In promise constructor");
  resolve();
})
  .then(() => console.log("Step 4: In then"))
  .then(() => console.log("Step 5: In another then"));

setTimeout(() => console.log("Step 6: In another setTimeout"));

new Promise((resolve) => {
  console.log("Step 7: In promise constructor");
  resolve();
})
  .then(() => console.log("Step 8: In then"))
  .then(() => console.log("Step 9: In another then"));

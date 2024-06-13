const obj = { name: "Ssss", arr: [1, 2, 3] };

const a = { ...obj };

a.name = "ppp";
a.arr[2] = 10;

console.log(a, obj);

const arr = [0, 1];

console.log(arr instanceof Array);

const arr1 = [0, 1, 2];

Array.prototype.groupBy = (arr, num) => {
  const res = [];

  for (const item of arr) {
    res.push(item + num);
  }

  return res;
};

const arr1Res = Array.prototype.groupBy(arr1, 2);

console.log(this);

const resObj = Object.keys(obj);

console.log(resObj);

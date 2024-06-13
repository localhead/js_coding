const obj = {
  name: "bob",
  age: 44,
  gender: "male",
};

const entries = Object.entries(obj);

const res = Object.keys(obj).forEach((item) => {
  console.log(obj[item]);
});

console.log(entries);

console.log(obj.hasOwnProperty("name"));

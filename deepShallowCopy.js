const first = {
  name: "Bob",
  age: 15,
  place: {
    country: "USA",
    city: "Seattle",
  },
};

const secondShallow = { ...first };

secondShallow.name = "Kirk";
secondShallow.age = 20;
secondShallow.place.country = "UK";
secondShallow.place.city = "London";

const kek = {};
const lol = kek;

// объекты будут равны, поскольку ссылаются на один и тот же объект
console.log(kek === lol);

console.log(secondShallow); // все как и ожаидали
console.log(first); // но изменения затронули и первый Объект.

// Arrays

const arr1 = [2, 1, 3, { name: "lox" }];

const arr2 = [...arr1, 5];

arr2[3].name = "down";

console.log(arr1, arr2);

console.log(JSON.parse(JSON.stringify(first)));

//console.log(globalThis);

const str = new String();

console.log(str.prototype);

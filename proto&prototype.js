console.log({}.__proto__ === Object.prototype);

function almera() {}
function nismo() {}
console.log(almera.__proto__ === Function.prototype); // false
console.log(almera.prototype === nismo.prototype);
console.log(almera.__proto__ === nismo.__proto__);

let age = 18;
console.log(age.__proto__ === Number.prototype);
console.log(age.__proto__ === nismo.prototype);

// 1  __proto__ есть у всех объектов
// есть два объекта, они созданы по образу и подобию одного и того же объекта Object. Значит их __proto__ равный
// __proto__ у классов, функций (всех 3 видов) тоже равны

// 2 prototype - есть только у классов либо функций

// 3 __proto__ ссылается на прототип того объекта, с помощью которого был создан объект или прототип

// 4 prototype - появляется у кастомных классов или функций конструкторов. но их нет у
// всего что создано так: let i = true, const num = 12 и т.д.
// У этих ребят есть только __proto__ которое ссылается на prototype, того от чего было создано.
// В данном случае на Boolean.prototype Number.prototype

// вот примеры:
const wordOne = "lox";

function Dog(name) {
  this.name = name;
}
let fromDog = new Dog("Bax");

class Cat {
  constructor(name) {
    this.name = name;
  }
}
let newCat = new Cat("Murka");

console.log(wordOne.__proto__ === String.prototype); // true
// поскольку

console.log(fromDog.__proto__ === Dog.prototype); // true

console.log(Dog.__proto__ === Function.prototype); // true

console.log(Cat.__proto__ === Function.prototype); // true

console.log(newCat.__proto__ === Cat.prototype); // true

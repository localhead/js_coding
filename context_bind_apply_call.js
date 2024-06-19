// call
// Метод call вызывает функцию с заданным значением this и аргументами, переданными по отдельности.

const person = {
  name: "Alice",
};

function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

greet.call(person, "lox");

const newName = {
  firstName: "Lox",
};

const obj0 = {
  firstName: "Petr",
  allNames: ["Bob", "Michael"],

  getNames: function (name) {
    console.log(name, this.firstName);
  },
};

obj0.getNames.call(newName, "kirk");

// apply
// Метод apply похож на call, но принимает аргументы в виде массива.

const someone = {
  name: "Bob",
  age: 30,
};

function introduce(greeting, punctuation) {
  console.log(
    greeting +
      ", " +
      this.name +
      ". I am " +
      this.age +
      " years old" +
      punctuation
  );
}

introduce.apply(someone, ["hi!", " !!!"]);

// bind
const personNew = {
  name: "Ken",
  age: 30,
};

function introduce(greeting, punctuation) {
  console.log(
    greeting +
      ", " +
      this.name +
      ". I am " +
      this.age +
      " years old" +
      punctuation
  );
}

const fnBinded = introduce.bind(personNew, "hello!", " bitch!!!!");

fnBinded();

///////////////////////////---------------//////////////////////////

const obj1 = {
  name: "Colin",
  prop: {
    name: "Rox",
    getname: function () {
      return this.name;
    },
    arrow: () => this.name,
    arrowInsideFunction: function () {
      return () => console.log(this.name);
    },
  },
};

console.log(obj1.prop.getname()); // 'Rox'

// контекст потеряется
const test = obj1.prop.getname;
console.log(test()); // 'undefined'

console.log(test.call(obj1.prop)); // ? 'Rox'
console.log(test.apply(obj1)); // ? 'Colin'
console.log(test.bind(obj1)()); // ? 'Colin'
// послдующий чейнинг байндов никак не влияет на изменение контекста и он будет равен 1 байнду
console.log(test.bind(obj1).bind(obj1.prop)()); // ? 'Colin'

// Объяснение: Стрелочная функция не имеет собственного контекста this, она захватывает this из внешней области видимости.
// В данном случае внешняя область видимости - это глобальный объект,
// где this.name не определен. Поэтому результат - undefined.

console.log(obj1.prop.arrow()); // ? 'undefined'

// Объяснение: arrowInsideFunction возвращает стрелочную функцию, которая захватывает this из контекста вызова arrowInsideFunction.
// Так как arrowInsideFunction вызывается в контексте obj.prop,
// this ссылается на obj.prop. Таким образом, this.name будет "Rox".

obj1.prop.arrowInsideFunction()(); // ? 'Rox'

// call
const person = {
  name: "Alice",
};

function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

greet.call(person, "lox");

const someone = {
  name: "Bob",
  age: 30,
};

// apply
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

const fnBinded = introduce.bind(personNew, "hello!", " bitch!!!!");
fnBinded();

const newName = {
  firstName: "Lox",
};

const obj = {
  firstName: "Petr",
  allNames: ["Bob", "Michael"],

  getNames: function (name) {
    console.log(name, this.firstName);
  },
};

obj.getNames.call(newName, "kirk");

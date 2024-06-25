function camel(str) {
  const arr = str.split("");

  const arrWithSpaces = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-" || arr[i] === "_") {
      arrWithSpaces.push(" ");
    } else {
      arrWithSpaces.push(arr[i]);
    }
  }

  const newStr = arrWithSpaces.join("");

  const newStrArr = newStr.split(" ");

  const newCamelCase = [];

  for (let i = 0; i < newStrArr.length; i++) {
    if (i === 0) {
      newCamelCase.push(newStrArr[i]);
      continue;
    }
    const innerArr = newStrArr[i].split("");

    const newResWord = [];

    //    console.log(innerArr);

    for (let j = 0; j < innerArr.length; j++) {
      //console.log(i);
      if (j === 0) {
        newResWord.push(innerArr[j].toUpperCase());
        continue;
      }
      newResWord.push(innerArr[j]);
    }

    newCamelCase.push(newResWord.join(""));
  }

  return newCamelCase.join("");
}

console.log(camel("what-a-nice-day-today"));
console.log(camel("What_a_nice_Day_Today"));
console.log(camel("What_a_nice-Day-Today"));

// решено за 22 минуты

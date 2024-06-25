// решено за 8 минут

function sequence(str) {
  const res = [];
  if (typeof str === "object") {
    for (let i = 0; i < str.length; i++) {
      if (!res.includes(str[i])) res.push(str[i]);
    }

    console.log(res);
    return res;
  } else {
    const strArr = str.split("");

    for (let i = 0; i < strArr.length; i++) {
      if (!res.includes(strArr[i])) res.push(strArr[i]);
    }

    console.log(res);
    return res;
  }
}

sequence("AAABBBCCCLLLLLLEEEE");
sequence("AABBBcCssA");
sequence([1, 2, 2, 4, 8, 6, 6, 6, 8]);

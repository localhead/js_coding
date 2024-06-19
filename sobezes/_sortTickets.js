const tickets = [
  {
    from: "Ufa",
    to: "Omsk",
  },
  {
    from: "Kazan",
    to: "Moscow",
  },
  {
    from: "Omsk",
    to: "Almaty",
  },
  {
    from: "Moscow",
    to: "Ufa",
  },
];

const sortTickets = (init) => {
  const fromArr = [];
  const toArr = [];

  for (let i = 0; i < init.length; i++) {
    fromArr.push(init[i].from);
    toArr.push(init[i].to);
  }

  let firstCityName = "";
  let lastCityName = "";

  for (let i = 0; i < init.length; i++) {
    if (!toArr.includes(fromArr[i])) firstCityName = fromArr[i];

    if (!fromArr.includes(toArr[i])) lastCityName = toArr[i];
  }

  const first = init.find((item) => {
    return item.from === firstCityName;
  });

  const last = init.find((item) => {
    return item.to === lastCityName;
  });

  //console.log(first, last);

  const res = [];

  let nextCityToVisit = first.to;

  for (let i = 0; i < init.length; i++) {
    if (i === 0) {
      continue;
    }
    if (i === init.length - 1) break;

    const city = init.find((item) => {
      return item.from === nextCityToVisit;
    });
    console.log(city, nextCityToVisit, init[i].to, i);

    nextCityToVisit = init[i].to;

    res.push(city);
  }

  res.unshift(first);
  res.push(last);

  console.log(res);
};

sortTickets(tickets);

// написать рассчитать функцию расчет проживания посетителя в отеле
// принимает 2 аргумента. 1 - кол-во ночей. 2 - необязательный, отсчет от какого дня. Если нет дня - то от текущего дня.
// в буднии дни - 1500, в выходные - 2200

const calcHotelPrice = (days, startFrom) => {
  let tomorrow = new Date(startFrom);

  let weekends = 0;

  for (let i = 0; i < days; i++) {
    tomorrow.setDate(tomorrow.getDate() + 1);
    const isWeekend = tomorrow.getDay() % 6 == 0;

    if (isWeekend) {
      weekends++;
    }
  }

  console.log(weekends);

  let weekendPrice = weekends * 2200;
  let weekdaysPrice = (days - weekends) * 1500;

  console.log(weekendPrice, weekdaysPrice);
  // calc
};

const date = new Date("2024-06-13");

calcHotelPrice(3, date);

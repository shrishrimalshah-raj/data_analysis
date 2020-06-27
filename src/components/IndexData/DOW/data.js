
const data = [
  {
    date: '8 MAY 2020',
    uv: 455,
  },
  {
    date: '11 MAY 2020',
    uv: -109,
  },
  {
    date: '12 MAY 2020',
    uv: -457,
  },
  {
    date: '13 MAY 2020',
    uv: -516,
  },
  {
    date: '14 MAY 2020',
    uv: 377,
  },
  {
    date: '15 MAY 2020',
    uv: 60,
  },
  {
    date: '18 MAY 2020',
    uv: 912,
  },
  {
    date: '19 MAY 2020',
    uv: -390,
  },
  {
    date: '20 MAY 2020',
    uv: 369,
  },
  {
    date: '21 MAY 2020',
    uv: -101,
  },
  {
    date: '22 MAY 2020',
    uv: -9,
  },
  {
    date: '26 MAY 2020',
    uv: 573,
  },
  {
    date: '27 MAY 2020',
    uv: 60,
  },
  {
    date: '28 MAY 2020',
    uv: 162,
  },
  {
    date: '29 MAY 2020',
    uv: -205,
  },
  {
    date: '1 JUN 2020',
    uv: 59,
  },
  {
    date: '2 JUN 2020',
    uv: 267,
  },
  {
    date: '3 JUN 2020',
    uv: 527,
  },
  {
    date: '4 JUN 2020',
    uv: 11,
  },
  {
    date: '5 JUN 2020',
    uv: 829,
  },
  {
    date: '8 JUN 2020',
    uv: 461,
  },
  {
    date: '9 JUN 2020',
    uv: -260,
  },
  {
    date: '10 JUN 2020',
    uv: -80,
  },  
  {
    date: '11 JUN 2020',
    uv: -1861,
  },
  {
    date: '12 JUN 2020',
    uv: 477,
  },
  {
    date: '15 JUN 2020',
    uv: 157,
  },
  {
    date: '16 JUN 2020',
    uv: 526,
  },
  {
    date: '17 JUN 2020',
    uv: -170,
  },
  {
    date: '18 JUN 2020',
    uv: -39,
  },
  {
    date: '19 JUN 2020',
    uv: -208,
  },
];
const returnLatestTenValuesOfArray = (array) => {
  return array.slice(array.length - 14, array.length)
}

const niftyValueForPastTenDays = returnLatestTenValuesOfArray(data);
export { niftyValueForPastTenDays };


const data = [
  {
    date: '8 MAY 2020',
    uv: 177,
  },
  {
    date: '11 MAY 2020',
    uv: -137,
  },
  {
    date: '12 MAY 2020',
    uv: -42,
  },
  {
    date: '13 MAY 2020',
    uv: 187,
  },
  {
    date: '14 MAY 2020',
    uv: -240,
  },
  {
    date: '15 MAY 2020',
    uv: -5,
  },
  {
    date: '18 MAY 2020',
    uv: -313,
  },
  {
    date: '19 MAY 2020',
    uv: 55,
  },
  {
    date: '20 MAY 2020',
    uv: 187,
  },
  {
    date: '21 MAY 2020',
    uv: 39,
  },
  {
    date: '22 MAY 2020',
    uv: -67,
  },
  {
    date: '26 MAY 2020',
    uv: -10,
  },
  {
    date: '27 MAY 2020',
    uv: 285,
  },
  {
    date: '28 MAY 2020',
    uv: 175,
  },
  {
    date: '29 MAY 2020',
    uv: 90,
  },
  {
    date: '1 JUN 2020',
    uv: 245,
  },
  {
    date: '2 JUN 2020',
    uv: 152,
  },
  {
    date: '3 JUN 2020',
    uv: 82,
  },
  {
    date: '4 JUN 2020',
    uv: -32,
  },
  {
    date: '5 JUN 2020',
    uv: 113,
  },
  {
    date: '8 JUN 2020',
    uv: 25,
  },
  {
    date: '9 JUN 2020',
    uv: -120,
  },
  {
    date: '10 JUN 2020',
    uv: 69,
  },
  {
    date: '11 JUN 2020',
    uv: -214,
  },
  {
    date: '12 JUN 2020',
    uv: 70,
  },
  {
    date: '15 JUN 2020',
    uv: -159,
  },
  {
    date: '16 JUN 2020',
    uv: 100,
  },
  {
    date: '17 JUN 2020',
    uv: -32,
  },
  {
    date: '18 JUN 2020',
    uv: 210,
  },
  {
    date: '19 JUN 2020',
    uv: 152,
  },
];

const returnLatestTenValuesOfArray = (array) => {
    return array.slice(array.length - 14, array.length)
}

const niftyValueForPastTenDays = returnLatestTenValuesOfArray(data);
export { niftyValueForPastTenDays };

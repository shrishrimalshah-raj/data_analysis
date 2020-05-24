
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
    uv:   -9,
  },
];
const returnLatestTenValuesOfArray = (array) => {
    return array.slice(array.length - 10, array.length)
}

const niftyValueForPastTenDays = returnLatestTenValuesOfArray(data);
export { niftyValueForPastTenDays };


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
];

const returnLatestTenValuesOfArray = (array) => {
    return array.slice(array.length - 10, array.length)
}

const niftyValueForPastTenDays = returnLatestTenValuesOfArray(data);
export { niftyValueForPastTenDays };

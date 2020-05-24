
const data = [
  {
    date: '8 MAY 2020',
    uv: 57,
  },
  {
    date: '11 MAY 2020',
    uv: -98,
  },
  {
    date: '12 MAY 2020',
    uv: -39,
  },
  {
    date: '13 MAY 2020',
    uv: 223,
  },
  {
    date: '14 MAY 2020',
    uv: -281,
  },
  {
    date: '15 MAY 2020',
    uv: -10,
  },
  {
    date: '18 MAY 2020',
    uv: -288,
  },
  {
    date: '19 MAY 2020',
    uv: 38,
  },
  {
    date: '20 MAY 2020',
    uv: 259,
  },
  {
    date: '21 MAY 2020',
    uv: -2,
  },
  {
    date: '22 MAY 2020',
    uv: -45,
  },
];

const returnLatestTenValuesOfArray = (array) => {
    return array.slice(array.length - 10, array.length)
}

const niftyValueForPastTenDays = returnLatestTenValuesOfArray(data);
export { niftyValueForPastTenDays };


const data = [
  {
    name: '10 MAY 2020',
    uv: 52,
  },
  {
    name: '11 MAY 2020',
    uv: -12,
  },
  {
    name: '12 MAY 2020',
    uv: -42,
  },
  {
    name: '13 MAY 2020',
    uv: 187,
  },
  {
    name: '14 MAY 2020',
    uv: -240,
  },
  {
    name: '15 MAY 2020',
    uv: -5,
  },
  {
    name: '18 MAY 2020',
    uv: -313,
  },
  {
    name: '19 MAY 2020',
    uv: 55,
  },
  {
    name: '20 MAY 2020',
    uv: 187,
  },
  {
    name: '21 MAY 2020',
    uv: 39,
  },
  {
    name: '22 MAY 2020',
    uv: -67,
  },
];

const returnLatestTenValuesOfArray = (array) => {
    return array.slice(array.length - 10 ,array.length)
}

const niftyValueForPastTenDays = returnLatestTenValuesOfArray(data);
export { niftyValueForPastTenDays };


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
  {
    date: '26 MAY 2020',
    uv: 55,
  }, 
  {
    date: '27 MAY 2020',
    uv: 174,
  },
  {
    date: '28 MAY 2020',
    uv: 193,
  },
  {
    date: '29 MAY 2020',
    uv: 193,
  },
  {
    date: '1 JUN 2020',
    uv: 320,
  },
  {
    date: '2 JUN 2020',
    uv: 56,
  },
  {
    date: '3 JUN 2020',
    uv: 111,
  },
  {
    date: '4 JUN 2020',
    uv: -65,
  },
  {
    date: '5 JUN 2020',
    uv: 139,
  },
  {
    date: '8 JUN 2020',
    uv: -1,
  },
  {
    date: '9 JUN 2020',
    uv: -151,
  },
  {
    date: '10 JUN 2020',
    uv: 12,
  },
  {
    date: '11 JUN 2020',
    uv: -258,
  },
  {
    date: '12 JUN 2020',
    uv: 46,
  },
  {
    date: '15 JUN 2020',
    uv: -103,
  },
  {
    date: '16 JUN 2020',
    uv: 108,
  },
  {
    date: '17 JUN 2020',
    uv: -40,
  },
  {
    date: '18 JUN 2020',
    uv: 169,
  },
  {
    date: '19 JUN 2020',
    uv: 203,
  },
];

const returnLatestTenValuesOfArray = (array) => {
    return array.slice(array.length - 14, array.length)
}

const niftyValueForPastTenDays = returnLatestTenValuesOfArray(data);
export { niftyValueForPastTenDays };

let fno_index_data = [];
let fno_future_data = [];
let fno_call_data = [];
let fno_put_data = [];


// FINDING DIFFERENCE IN OI currentDay - prevDay and return it
const reduceArrayValues = (arr) => {
  let prevItem = {};
  let newArray = [];
  let long = 0;
  let short = 0;

    newArray = arr.map((item, id) => {
    if (id >= 1) {
      prevItem = arr[id - 1];
      long = item.FII_LONG - prevItem.FII_LONG;
      short = item.FII_SHORT - prevItem.FII_SHORT;

      return { ...item, FII_LONG: long, FII_SHORT: short }
    }
  })

  newArray = newArray.filter((item, id) => id !== 0);
  return newArray;
}

 const returnLatestTenValuesOfArray = (array) => {
  return array.slice(array.length - 10 ,array.length)
}

const splitArray = (arr, clientCode) => {
  const newArr = arr.filter((item, id) => id !== 0);
  newArr.forEach((element, idx) => {

    const currentDate = element.splice(0, 1);

    // PROCESS EACH ROW OF .CSV FILE
    splitDataInSpecificArray(currentDate, element, clientCode);
  });

  // console.log('BEFORE *********** ', fno_index_data)
  fno_index_data = reduceArrayValues(fno_index_data)
  fno_future_data = reduceArrayValues(fno_future_data)
  fno_call_data = reduceArrayValues(fno_call_data)
  fno_put_data = reduceArrayValues(fno_put_data)

  // return latest 10 values of an array 
  // TODO: returnLatestTenValuesOfArray call function after completing array of 10 values
  console.log('AFTER *****************', fno_index_data)
  console.log('AFTER *****************', fno_future_data)
  console.log('AFTER *****************', fno_call_data)
  console.log('AFTER *****************', fno_put_data)

  return ({
    fno_index_data,
    fno_future_data,
    fno_call_data,
    fno_put_data
  })
}

const returnLongOrShort = (id) => {
  if (id % 2 === 0) {
    return 'LONG';
  } else {
    return 'SHORT';
  }
}

const splitDataInSpecificArray = (currentDate, element, clientCode) => {
  let temp = {};
  for (let i = 0; i < element.length; i++) {

    // CONDITION FOR FNO_INDEX DATA
    if (i >= 0 && i <= 1) {
      const fullCode = `${clientCode}_${returnLongOrShort(i)}`;
      temp = {
        ...temp,
        [fullCode]: Number(element[i]),
      }

      if (i % 2 !== 0) {
        fno_index_data.push({
          date: currentDate[0],
          [`${clientCode}_LONG`]: temp[`${clientCode}_LONG`],
          [fullCode]: Number(element[i]),
        })
      }
    }

    // CONDITION FOR FNO_FUTURE DATA
    if (i > 1 && i <= 3) {
      const fullCode = `${clientCode}_${returnLongOrShort(i)}`;
      temp = {
        ...temp,
        [fullCode]: Number(element[i]),
      }

      if (i % 2 !== 0) {
        fno_future_data.push({
          date: currentDate[0],
          [`${clientCode}_LONG`]: temp[`${clientCode}_LONG`],
          [fullCode]: Number(element[i]),
        })
      }
    }

    // CONDITION FOR FNO_CALL DATA
    if (i > 3 && i <= 5) {
      const fullCode = `${clientCode}_${returnLongOrShort(i)}`;
      temp = {
        ...temp,
        [fullCode]: Number(element[i]),
      }

      if (i % 2 !== 0) {
        fno_call_data.push({
          date: currentDate[0],
          [`${clientCode}_LONG`]: temp[`${clientCode}_LONG`],
          [fullCode]: Number(element[i]),
        })
      }
    }

    // CONDITION FOR FNO_PUT DATA
    if (i > 5 && i <= 7) {
      const fullCode = `${clientCode}_${returnLongOrShort(i)}`;
      temp = {
        ...temp,
        [fullCode]: Number(element[i]),
      }

      if (i % 2 !== 0) {
        fno_put_data.push({
          date: currentDate[0],
          [`${clientCode}_LONG`]: temp[`${clientCode}_LONG`],
          [fullCode]: Number(element[i]),
        })
      }
    }
  }
}

export { splitArray };
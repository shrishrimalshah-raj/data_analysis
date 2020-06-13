/* eslint-disable */
let fno_index_data = { FII_DATA: [], PRO_DATA: [], CLIENT_DATA: [] };
let fno_future_data = { FII_DATA: [], PRO_DATA: [], CLIENT_DATA: [] };
let fno_call_data = { FII_DATA: [], PRO_DATA: [], CLIENT_DATA: [] };
let fno_put_data = { FII_DATA: [], PRO_DATA: [], CLIENT_DATA: [] };
let newArr;
let allDates = [];

// FINDING DIFFERENCE IN OI currentDay - prevDay and return it
const reduceArrayValues = (arr, clientDataCode) => {
  let prevItem = {};
  let newArray = [];
  let long = 0;
  let short = 0;

  newArray = arr[clientDataCode].map((item, id) => {
    if (id >= 1) {
      prevItem = arr[clientDataCode][id - 1];
      long = item.FII_LONG - prevItem.FII_LONG;
      short = item.FII_SHORT - prevItem.FII_SHORT;

      return { ...item, FII_LONG: long, FII_SHORT: short }
    }
  })

  newArray = newArray.filter((item, id) => id !== 0);
  return newArray;
}

const returnLatestTenValuesOfArray = (array) => {
  return array.slice(array.length - 14, array.length)
}

const splitArray = (arr, clientCode, clientDataCode) => {
  newArr = arr.filter((item, id) => id !== 0);

  // RESET ARRAY TO 0 IF SAME FILE IS PROCESSED AGAIN
  if(newArr.length - 1 === fno_index_data[clientDataCode].length) {
    fno_index_data[clientDataCode].splice(0, fno_index_data[clientDataCode].length)
    fno_future_data[clientDataCode].splice(0, fno_future_data[clientDataCode].length)
    fno_call_data[clientDataCode].splice(0, fno_call_data[clientDataCode].length)
    fno_put_data[clientDataCode].splice(0, fno_put_data[clientDataCode].length)
  }

  newArr.forEach((element, idx) => {

    const currentDate = element.splice(0, 1);
    //PUSH ALL DATES TO NEW ARRAY USED IN BASIC DATA SHEET
    allDates.push(currentDate[0])

    // PROCESS EACH ROW OF .CSV FILE
    splitDataInSpecificArray(currentDate, element, clientCode, clientDataCode);
  });

  let reduce_fno_index_data = reduceArrayValues(fno_index_data, clientDataCode)
  let reduce_fno_future_data = reduceArrayValues(fno_future_data, clientDataCode)
  let reduce_fno_call_data = reduceArrayValues(fno_call_data, clientDataCode)
  let reduce_fno_put_data = reduceArrayValues(fno_put_data, clientDataCode)

  // return latest 10 values of an array 
  // TODO: returnLatestTenValuesOfArray call function after completing array of 10 values


  console.log('INSIDE *****************', fno_index_data[clientDataCode])
  console.log('INSIDE *****************', fno_future_data[clientDataCode])
  console.log('INSIDE *****************', fno_call_data[clientDataCode])
  console.log('INSIDE *****************', fno_put_data[clientDataCode])


  return ({
    reduce_fno_index_data:  returnLatestTenValuesOfArray(reduce_fno_index_data),
    reduce_fno_future_data: returnLatestTenValuesOfArray(reduce_fno_future_data),
    reduce_fno_call_data:   returnLatestTenValuesOfArray(reduce_fno_call_data),
    reduce_fno_put_data:    returnLatestTenValuesOfArray(reduce_fno_put_data),
    allDates,
  })
}

const returnLongOrShort = (id) => {
  if (id % 2 === 0) {
    return 'LONG';
  } else {
    return 'SHORT';
  }
}

const splitDataInSpecificArray = (currentDate, element, clientCode, clientDataCode) => {
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
        fno_index_data[clientDataCode].push({
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
        fno_future_data[clientDataCode].push({
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
        fno_call_data[clientDataCode].push({
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
        fno_put_data[clientDataCode].push({
          date: currentDate[0],
          [`${clientCode}_LONG`]: temp[`${clientCode}_LONG`],
          [fullCode]: Number(element[i]),
        })
      }
    }
  }
}

export { splitArray };
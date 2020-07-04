import React, { useState, useEffect } from "react";
import Chart from 'react-google-charts'
import moment from 'moment'
import { Box } from '@material-ui/core';

import { ChipComponent } from '../../../components/Chip'

const formatDate = (date, netChange) => {
  const dateFormat = moment(date).subtract(1, 'days').format('MMM Do YYYY');
  return `${dateFormat}, NetChange: ${netChange}`
}

const changeNiftyData = (data) => {
  if (data.length === 0) {
    return ([])
  }

  const filterColumn = ["date", "low", "open", "close", "high"];
  let newArray = [];
  newArray.push(filterColumn);

    data.forEach((res, idx) => {
    let temp = [
      formatDate(res[filterColumn[0]], res["netChange"],),
        res[filterColumn[1]],
        res[filterColumn[2]],
        res[filterColumn[3]],
        res[filterColumn[4]],
    ];

    newArray.push(temp)
  })

  return newArray;
}

// LOW HIGH OPEN CLOSE
const NiftyChart = ({ name, data }) => {
  return (
    <Box mt="50px">
        <ChipComponent name={name} />

    <Chart
      width={'100%'}
      height={350}
      chartType="CandlestickChart"
      loader={<div>Loading Chart</div>}
      data={changeNiftyData(data)}
      options={{
        legend: 'none',
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
          risingColor: { strokeWidth: 0, fill: '#0f9d58' }, // green
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
    </Box>
  )
}

export default NiftyChart

import React from 'react'
import Chart from 'react-google-charts'
import moment from 'moment'
import { Box } from '@material-ui/core';

import { ChipComponent } from '../../../components/Chip'

const formatDate = (date, dailyLongPercentage, dailyShortPercentage) => {
  const dateFormat = moment(date).subtract(1, 'days').format('MMM Do YYYY');
  return `${dateFormat}, DailyLongPercentage: ${dailyLongPercentage}, DailyShortPercentage: ${dailyShortPercentage}`
}

const changeMixedChartData = (data) => {

  if (data.length === 0) {
    return data;
  }

  const filterColumn = ["date", "longPosition", "shortPosition",]
  let newArray = [];
  newArray.push(filterColumn);

  data.forEach((res) => {
    let temp = [
      formatDate(res[filterColumn[0]], res["dailyLongPercentage"], res["dailyShortPercentage"]),
      res[filterColumn[1]],
      res[filterColumn[2]]
    ];

    newArray.push(temp)
  })

  return newArray;
}

const MixedChartOI = ({ name, data }) => {
  return (
    <div>
      <Box mt="50px">
        <ChipComponent name={name} />
        <Chart
          width={'100%'}
          height={'400px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={changeMixedChartData(data)}
          options={{
            hAxis: {
              title: 'Mixed Chart OI',
            },
            series: {
              1: { curveType: 'function' },
            },
            colors: ['#0f9d58', '#a52714']
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </Box>
    </div>
  )
}

export default MixedChartOI

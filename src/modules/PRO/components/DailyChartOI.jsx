import React from 'react'
import Chart from 'react-google-charts'
import moment from 'moment'
import { Box } from '@material-ui/core';

import { ChipComponent } from '../../../components/Chip'

const changeDailyChartData = (data) => {

  if (data.length === 0) {
    return data;
  }

  const filterColumn = ["date", "dailyLongPosition", "dailyShortPosition"]
  let newArray = [];
  newArray.push(filterColumn);

  data.forEach((res) => {
    let temp = [
      moment(res[filterColumn[0]]).subtract(1, 'days').format('MMM Do YYYY'),
      res[filterColumn[1]],
      res[filterColumn[2]]
    ];

    newArray.push(temp)
  })

  return newArray;
}

const DailyChartOI = ({ name, data, title }) => {
  return (
    <div>
      <Box mt="50px">
        <ChipComponent name={name} />
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={changeDailyChartData(data)}
          options={{
            // Material design options
            chart: {
              title: title,
            },
            colors: ['#0f9d58', '#a52714']
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />
      </Box>
    </div>
  )
}

export default DailyChartOI

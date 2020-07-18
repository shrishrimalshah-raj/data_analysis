import React from 'react'
import Chart from 'react-google-charts'
import moment from 'moment'
import { Box } from '@material-ui/core';

import { ChipComponent } from '../../../components/Chip'

const formatDate = (date, dailyLongPercentage = 0, dailyShortPercentage = 0) => {
  const dateFormat = moment(date).subtract(1, 'days').format('MMM Do YYYY');
  if (dailyLongPercentage || dailyShortPercentage) {
    return `${dateFormat}, LongPercentage: ${dailyLongPercentage}, ShortPercentage: ${dailyShortPercentage}`
  }

  return `${dateFormat}`;
}

const changeMixedChartData = (data, totalColumn, extraColumn = [0, 0]) => {

  if(data.length === 0 ) {
    return data;
  }

  const filterColumn = totalColumn;

  let newArray = [];
  newArray.push(filterColumn);

  data.forEach((res) => {
    let temp = [];
    
    filterColumn.forEach((item, id) => {
      if(id === 0) {
        temp.push(formatDate(res[item], res[extraColumn[0]], res[extraColumn[1]]));
      }
      if(id !== 0) {
        temp.push( res[item])
      }
    })

    newArray.push(temp)
  })
  
  return newArray;
}


const MixedChartOI = ({ name, data, filterColumn, extraColumn, color }) => {
  return (
    <div>
      <Box mt="50px">
        <ChipComponent name={name} />
      
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={changeMixedChartData(data, filterColumn, extraColumn)}
        options={{
          hAxis: {
            title: 'Mixed Chart OI',
          },
          series: {
            1: { curveType: 'function' },
          },
          colors: color ? color : ['#0f9d58', '#a52714', 'blue']
        }}
        rootProps={{ 'data-testid': '2' }}
      />
      </Box>
    </div>
  )
}

export default MixedChartOI

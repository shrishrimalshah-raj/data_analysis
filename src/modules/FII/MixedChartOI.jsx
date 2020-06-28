import React from 'react'
import Chart from 'react-google-charts'
import moment from 'moment'


const changeMixedChartData = (data) => {

  if(data.length === 0 ) {
    return data;
  }

  const filterColumn = ["date", "longPosition", "shortPosition",]
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

const MixedChartOI = ({ data }) => {
  return (
    <div>
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
    </div>
  )
}

export default MixedChartOI

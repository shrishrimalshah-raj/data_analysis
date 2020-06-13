import React from 'react';

// BARCHAR WITH FILLED DATA COMMENTED BELOW 

// import NIFTYComponent from './NIFTY';
// import SGXNiftyComponent from './SGXNIFTY';
// import DOWJONESComponent from './DOW';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import { niftyValueForPastTenDays as nifty } from './NIFTY/data';
import { niftyValueForPastTenDays as sgx } from './SGXNIFTY/data';
import { niftyValueForPastTenDays as dow } from './DOW/data';
import { ChipComponent } from '../Chip';


const data = [];

const reduceData = () => {
  nifty.forEach((item, index) => {
    const newItem = { date: item.date, NIFTY: item.uv, SGXNIFTY: sgx[index].uv, DOWJONES: dow[index].uv };
    data.push(newItem)
  })
}

reduceData();

const index = () => {
  return (
    <>
      {/* BARCHAR WITH FILLED DATA COMMENTED BELOW */}
      {/* <NIFTYComponent /> */}
      {/* <SGXNiftyComponent /> */}
      {/* <DOWJONESComponent /> */}

      {data.length > 1 && (
        <>
          <ChipComponent name='Last 14 days data' />
          <br />
          <BarChart
            width={1200}
            height={400}
            data={data}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="NIFTY" fill="#77ab59" />
            <Bar dataKey="DOWJONES" fill="#d9534f" />
            <Bar dataKey="SGXNIFTY" fill="#8b9dc3" />
          </BarChart>
        </>)
      }
    </>
  );

}



export default index;

import React, { Component } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import { niftyValueForPastTenDays  } from './data';
import AreaChartComponent from '../../AreaChart/AreaChart';


const DOWComponent = () => {
  return (
  <AreaChartComponent indexName='DOW JONES' data={niftyValueForPastTenDays} />
  )
}

export default DOWComponent;
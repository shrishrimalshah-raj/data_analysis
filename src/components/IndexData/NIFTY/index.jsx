import React from 'react'
import AreaChartComponent from '../../AreaChart/AreaChart'

import { niftyValueForPastTenDays } from './data';

const NiftyComponent = () => {
  return (
  <AreaChartComponent indexName='NIFTY 50' data={niftyValueForPastTenDays} />
  )
}

export default NiftyComponent;

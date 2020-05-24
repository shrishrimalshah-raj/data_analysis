import React from 'react'
import AreaChartComponent from '../../AreaChart/AreaChart'

import { niftyValueForPastTenDays } from './data';

const SGXNiftyComponent = () => {
  return (
  <AreaChartComponent indexName='SGX NIFTY' data={niftyValueForPastTenDays} />
  )
}

export default SGXNiftyComponent;

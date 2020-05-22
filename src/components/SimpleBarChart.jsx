import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import AreaChart from './AreaChart/AreaChart';
import PieChart from './PieChart';
import LineChart from './LineChart';

import { BarChartGeneric } from '../components/BarChart'
import FII_Index_Data  from '../constants/FII/FII_Index_Data';
// import FormulaDataSheet from './FormulaDataSheet';


export default class Example extends PureComponent {

  render() {
    return (
      <>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div>
           {/* <BarChartGeneric data={FII_Index_Data} client_code="FII" /> */}
          </div>
          {/* <div>
            {' '}
            <AreaChart />{' '}
          </div> */}
          <br />
          <br />
          <br />
          <br />
          <div>
            {' '}
            {/* <PieChart />{' '} */}
          </div>
          <div>
            {' '}
            {/* <LineChart />{' '} */}
          </div>
          <div>
            {' '}
              {/* <FormulaDataSheet />{' '} */}
          </div>
        </div>
      </>
    );
  }
}

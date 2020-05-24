import React, { Component } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

import { ChipComponent } from '../Chip';

export default class AreaChartComponent extends Component {

  gradientOffset = (data) => {
    let dataMax = Math.max(...data.map(i => i.uv));
    let dataMin = Math.min(...data.map(i => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  render() {
    const { indexName, data } = this.props;
    let off = this.gradientOffset(data);
    return (
      <>
        <ChipComponent name={indexName} />
        <div style={{ marginBottom: '100px'}}>
          <AreaChart
            width={1200}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset={off} stopColor="green" stopOpacity={1} />
                <stop offset={off} stopColor="red" stopOpacity={1} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#000"
              fill="url(#splitColor)"
            />
          </AreaChart>
        </div>
      </>
    );
  }
}

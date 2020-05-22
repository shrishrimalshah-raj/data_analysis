/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    cl: -4000,
    pro: -16000,
    fii: -2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    cl: 4000,
    pro: 6000,
    fii: -400,
    amt: 2400,
  },
  {
    name: 'Page C',
    cl: 400,
    pro: 1000,
    fii: -2400,
    amt: 2400,
  },
  {
    name: 'Page D',
    cl: -4000,
    pro: -16000,
    fii: -2400,
    amt: 2400,
  },
  {
    name: 'Page E',
    cl: 4000,
    pro: 6000,
    fii: -400,
    amt: 2400,
  },
  {
    name: 'Page F',
    cl: 400,
    pro: 1000,
    fii: -2400,
    amt: 2400,
  },
  {
    name: 'Page G',
    cl: -4000,
    pro: -16000,
    fii: -2400,
    amt: 2400,
  },
  {
    name: 'Page H',
    cl: 4000,
    pro: 6000,
    fii: -400,
    amt: 2400,
  },
  {
    name: 'Page I',
    cl: 400,
    pro: 1000,
    fii: -2400,
    amt: 2400,
  },
  {
    name: 'Page J',
    cl: -4000,
    pro: -16000,
    fii: -2400,
    amt: 2400,
  },
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/5br7g9d6/';

  render() {
    return (
      <LineChart
        width={1200}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="cl"
          stroke="#31a968"
          label={<CustomizedLabel />}
        />
        <Line type="monotone" dataKey="fii" stroke="#5744d6" />
        <Line type="monotone" dataKey="pro" stroke="#696969" />
      </LineChart>
    );
  }
}

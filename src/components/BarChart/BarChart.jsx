import React, { Component } from 'react';
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

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    width: '200px'
  },
}));

const BarChartGeneric = ({ data, client_code, segment, chip_input }) => {

  const classes = useStyles();

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '100px', flexDirection: 'column' }}>
        <div>
        <Chip
          icon={<FaceIcon />}
          label={`${chip_input}_${segment}`}
          color="primary"
          deleteIcon={<DoneIcon />}
        />
        <br />
        </div>
        <div>
          <BarChart
            width={1220}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 100,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={`${client_code}_LONG`} fill="#31a968" />
            <Bar dataKey={`${client_code}_SHORT`} fill="#FF4747" />
          </BarChart>
        </div>
      </div>
    </>
  )
}

export default BarChartGeneric;
import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import moment from 'moment'

import config from '../../config';


export default function MaterialUIPickers({ setNiftyURL, setFiiURL,}) {
  const [startDate, setStartDate] = useState(moment(new Date()).subtract(7, 'days'));
  const [endDate, setEndDate] = useState(new Date());
  const { serviceURL } = config;


  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleClick = async () => {
    setFiiURL(`${serviceURL}/fii/index/?startDate=${startDate}&endDate=${endDate}`);
    setNiftyURL(`${serviceURL}/nifty/index/?startDate=${startDate}&endDate=${endDate}`);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          variant="inline"
          margin="normal"
          id="date-picker-dialog"
          label="End Date"
          format="dd/MM/yyyy"
          value={endDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      <Grid container justify="center">
      <Button variant="contained" color="primary" onClick={handleClick}>Submit</Button>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
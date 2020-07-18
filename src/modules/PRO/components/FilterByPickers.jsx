import 'date-fns';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button, TextField } from '@material-ui/core';
import moment from 'moment'

import config from '../../../config';
import { FormDialog } from '.';

export default function FilterByPickers(props) {
  const {
    setNiftyURL,
    setProURL,
    filterBy,
    lastRecord,
    setLastRecord,
    url,
    clientCode,
  } = props;

  const [startDate, setStartDate] = useState(moment(new Date()).subtract(7, 'days'));
  const [endDate, setEndDate] = useState(new Date());

  const { serviceURL } = config;


  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleClickDate = async () => {
    setProURL(`${serviceURL}/${url}/?startDate=${startDate}&endDate=${endDate}`);
    setNiftyURL(`${serviceURL}/nifty/index/?startDate=${startDate}&endDate=${endDate}`);
  }

  const handleClickLastRecords = async () => {
    setProURL(`${serviceURL}/${url}/${lastRecord}`);
    setNiftyURL(`${serviceURL}/nifty/index/${lastRecord}`);
  }

  const renderSwitch = (param) => {
    switch (param) {
      case 'date':
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
              <Button variant="contained" color="primary" onClick={handleClickDate}>Submit</Button>
            </Grid>
          </MuiPickersUtilsProvider>
        );
      case 'lastRecords':
        return (
          <>
            <br />
            <br />
            <Grid container justify="center">
              <TextField
                autoFocus
                error={!Boolean(lastRecord)}
                id="standard-error-helper-text"
                label="Enter number"
                defaultValue=""
                helperText={!Boolean(lastRecord) ? "Incorrect Number" : ""}
                onChange={(({ target: { value } }) => setLastRecord(value))}
                placeholder="Filter by Last Records"
              />
            </Grid>
            <br />
            <br />
            <Grid container justify="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickLastRecords}
                disabled={!Boolean(lastRecord)}
              >
                Submit
              </Button>
            </Grid>
          </>
        );
      case 'insertNewRecord':
        return (
          <>
              <FormDialog url={url} clientCode={clientCode} />
          </>
        );

      default:
        return (<></>);
    }
  }


  return (
    <>
      {renderSwitch(filterBy)}
    </>
  );
}
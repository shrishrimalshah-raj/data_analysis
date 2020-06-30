import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, ClickAwayListener } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import config from '../../config';

export default function FormDialog(props) {
  const { serviceURL } = config;
  const [open, setOpen] = useState(true);
  const [data, setData] = useState({
    date: {
      error: false,
      value: new Date(),
    },
    longPosition: {
      error: false,
      value: 0,
    },
    shortPosition: {
      error: false,
      value: 0,
    },
    netBuy: {
      error: false,
      value: 0,
    },
  });

  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const { date, longPosition, shortPosition, netBuy = false } = data;

  const handleChange = (e, oldObject) => {
    const { target: { name, value } } = e;
    let error = false;
    if (!Boolean(value)) {
      error = true;
    }

    setData((prevState) => ({
      ...prevState,
      [name]: { ...oldObject, value, error },
    }));
  }

  const handleDateChange = (value) => {
    setData((prevState) => ({
      ...prevState,
      ["date"]: { value, error: false },
    }));
  };

  const handleSubmit = async () => {
    console.log('executed');
    const temp = {};
    for (const property in data) {
      temp[property] = `${data[property].value}`;
    }
    setLoading(!loading);
    try {
      const res = await axios.post(`${serviceURL}/fii/index/`, temp);
      setLoading(!loading);
      setOpen(!open);
    } catch (error) {
      setLoading(!loading);
      setOpen(!open);
    }
  }

  return (
    <div>
      <ClickAwayListener onClickAway={() => { setOpen(!open) }}>
        <Dialog
          open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth >
          <DialogTitle id="form-dialog-title">Create new record</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter data for FII INDEX
          </DialogContentText>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Start Date"
                value={date.value}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            <br />
            <br />

            <TextField
              autoFocus
              error={longPosition.error}
              label="Long Position"
              value={longPosition.value ? longPosition.value : ''}
              helperText={longPosition.error ? "Incorrect Number" : ""}
              onChange={(e) => handleChange(e, longPosition)}
              margin="dense"
              name="longPosition"
              fullWidth
              variant="outlined"
            />

            <br />
            <br />

            <TextField
              error={shortPosition.error}
              label="Short Position"
              value={shortPosition.value ? shortPosition.value : ''}
              helperText={shortPosition.error ? "Incorrect Number" : ""}
              onChange={(e) => handleChange(e, shortPosition)}
              margin="dense"
              name="shortPosition"
              fullWidth
              variant="outlined"
            />

            <br />
            <br />

            {netBuy && (<TextField
              error={netBuy.error}
              label="Net Buy"
              value={netBuy.value ? netBuy.value : ''}
              helperText={netBuy.error ? "Incorrect Number" : ""}
              onChange={(e) => handleChange(e, netBuy)}
              margin="dense"
              name="netBuy"
              fullWidth
              variant="outlined"
            />)}

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
          </Button>

            <Button onClick={handleSubmit} color="primary">
              {loading && <CircularProgress size={25} />}
            Submit
          </Button>
          </DialogActions>
        </Dialog>
      </ClickAwayListener>
    </div>
  );
}
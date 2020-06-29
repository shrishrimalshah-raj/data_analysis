import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios'
import config from '../../config';


export default function FormDialog({ open, setOpen }) {
  const { serviceURL } = config;
  const [data, setData] = useState({ longPosition: 0, shortPosition: 0, netBuy: 0 });

  const handleClose = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    const { target: { name, value } } = e;

    setData((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }));
  }

  useEffect(() => {
    // ...
    // return () => {
    //   setOpen(!open);
    // };
  });

  const { longPosition, shortPosition, netBuy } = data;

  const handleSubmit = async () => {
      const res = await axios.post(`${serviceURL}/fii/index/`, data);
      setOpen(!open);
  }

  console.log('data', data);
  return (
    <div>
      <Dialog 
      open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth >
        <DialogTitle id="form-dialog-title">Create new record</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter data for FII INDEX
          </DialogContentText>
          <TextField
            autoFocus
            error={isNaN(longPosition)}
            label="Long Position"
            value={longPosition ? longPosition : ''}
            helperText={isNaN(longPosition) ? "Incorrect Number" : ""}
            onChange={handleChange}

            margin="dense"
            name="longPosition"
            fullWidth
          />

          <br />
          <br />

          <TextField
            error={isNaN(shortPosition)}
            label="Short Position"
            value={shortPosition ? shortPosition : ''}
            helperText={isNaN(shortPosition) ? "Incorrect Number" : ""}
            onChange={handleChange}
            margin="dense"
            name="shortPosition"
            fullWidth
          />

          <br />
          <br />

          <TextField
            error={isNaN(netBuy)}
            label="Net Buy"
            value={netBuy ? netBuy : ''}
            helperText={isNaN(netBuy) ? "Incorrect Number" : ""}
            onChange={handleChange}
            margin="dense"
            name="netBuy"
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
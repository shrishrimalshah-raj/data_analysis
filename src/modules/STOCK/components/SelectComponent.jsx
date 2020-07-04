import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const SelectComponent = ({ filterBy, handleChange}) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filterBy}
            onChange={handleChange}
            className={classes.selectEmpty}
          >
            <MenuItem value=''>Select</MenuItem>
            <MenuItem value='date'>Filter by Date</MenuItem>
            <MenuItem value='lastRecords'>Filter by Last Records</MenuItem>
            <MenuItem value='insertNewRecord'>Insert New Record</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div >
  )
}

export default SelectComponent;

import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import {
  useHistory,
} from 'react-router-dom';


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


const SelectComponent = () => {

  const [clientCode, setClientCode] = useState('');
  const classes = useStyles();
  let history = useHistory();

  const handleChange = (event) => {
    setClientCode(event.target.value);

    if (event.target.value === 'FII') {
      history.push("/FII");
    }

    if (event.target.value === 'PRO') {
      history.push("/PRO");
    }
    if (event.target.value === 'CLIENT') {
      history.push("/CLIENT");
    }
  };


  return (
    <div className={classes.root}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">CLIENT_CODE</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={clientCode}
            onChange={handleChange}
            className={classes.selectEmpty}
          >
            <MenuItem value=''>Select</MenuItem>
            <MenuItem value='FII'>FII</MenuItem>
            <MenuItem value='PRO'>PRO</MenuItem>
            <MenuItem value='CLIENT'>CLIENT</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div >
  )
}

export default SelectComponent;

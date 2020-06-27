/* eslint-disable */
import React, { useState } from 'react'
import Papa from 'papaparse';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { BarChartGeneric } from '../../components/BarChart'

import { splitArray } from '../../lib';
import { AreaChartGeneric } from '../../components/AreaChart';
import IndexData from '../../components/IndexData';
import { BasicDataSheet } from '../../components/BasicDatasheet';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginTop: '50px  '
  },
}));

const FIIIndexBarChart = () => {

  const [jsonData, setJsonData] = useState([]);
  const [csvfile, setCsvFile] = useState();
  const [fnoData, setFnoData] = useState([]);
  const [futureData, setFutureData] = useState([]);
  const [callData, setCallData] = useState([]);
  const [putData, setPutData] = useState([]);
  const [toggleValue, setToggleValue] = useState(true);

  const classes = useStyles();


  const handleCSVFile = event => {
    setCsvFile(event.target.files[0]);
  };

  const importCSV = () => {
    setToggleValue(false);
    Papa.parse(csvfile, {
      complete: updateData,
    });
  };
  const updateData = (result) => {
    var data = result.data;
    console.log('data', data);
    let response = splitArray(data, 'FII', 'FII_DATA');
    const { reduce_fno_index_data,
      reduce_fno_future_data,
      reduce_fno_call_data,
      reduce_fno_put_data, allDates } = response;


      data.splice(1, 0, allDates);
    
    setJsonData(data);
    setFnoData(reduce_fno_index_data);
    setFutureData(reduce_fno_future_data);
    setCallData(reduce_fno_call_data);
    setPutData(reduce_fno_put_data);
  }

 if(fnoData) {
  console.log('fnoData', fnoData);
  console.log('futureData', futureData);
  console.log('callData', callData);
  console.log('putData', putData);

 }


  return (
    <>
      <div className={classes.root}>

        <div>
          {toggleValue && 
          <>
            <h2>Import CSV File!</h2>
            <input
              className="csv-input"
              type="file"
              name="file"
              placeholder={null}
              onChange={handleCSVFile}
            />
            <br />
            <br />
            <br />    
          {csvfile && <Button variant="contained" color="primary" onClick={importCSV}> Upload now!</Button>}
          </> }
        </div>  

        <div style={{ marginTop: '30px' }}>
        {fnoData.length > 1 && <IndexData />}
        </div>

        <div style={{ marginTop: '50px' }}>
          {fnoData.length > 1 && <BasicDataSheet data={jsonData} />}
        </div>

        <div style={{ marginTop: '100px' }}>
          {fnoData.length > 1 &&
            <BarChartGeneric data={fnoData} client_code="FII" segment="FNO_INDEX" chip_input="FII" />
          }
          {futureData.length > 1 &&
            <BarChartGeneric data={futureData} client_code="FII" segment="FNO_FUTURE" chip_input="FII" />
          }
          {callData.length > 1 &&
            <BarChartGeneric data={callData} client_code="FII" segment="FNO_CALL_DATA" chip_input="FII" />
          }
          {putData.length > 1 &&
            <BarChartGeneric data={putData} client_code="FII" segment="FNO_PUT_DATA" chip_input="FII" />
          }
        </div>

      </div>
    </>
  )
}

export default FIIIndexBarChart

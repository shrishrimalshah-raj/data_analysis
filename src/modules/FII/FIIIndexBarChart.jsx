/* eslint-disable */ 
import React, { useState } from 'react'
import Papa from 'papaparse';

import { BarChartGeneric } from '../../components/BarChart'

import { splitArray } from '../../lib';
import { AreaChartGeneric } from '../../components/AreaChart';

const FIIIndexBarChart = () => {

  const [jsonData, setJsonData] = useState([]);
  const [csvfile, setCsvFile] = useState();
  const [fnoData, setFnoData] = useState([]);
  const [futureData, setFutureData] = useState([]);
  const [callData, setCallData] = useState([]);
  const [putData, setPutData] = useState([]);

  const handleCSVFile = event => {
    setCsvFile(event.target.files[0]);
  };

  const importCSV = () => {

    Papa.parse(csvfile, {
      complete: updateData,
    });
  };
  const updateData = (result) => {
    var data = result.data;
    setJsonData(data);
    let response = splitArray(data, 'FII', 'FII_DATA');
    const { reduce_fno_index_data,
      reduce_fno_future_data,
      reduce_fno_call_data,
      reduce_fno_put_data } = response;


    setFnoData(reduce_fno_index_data);
    setFutureData(reduce_fno_future_data);
    setCallData(reduce_fno_call_data);
    setPutData(reduce_fno_put_data);
  }
  
  return (
    <>
      <div className="App">
        <h2>Import CSV File!</h2>
        <input
          className="csv-input"
          type="file"
          name="file"
          placeholder={null}
          onChange={handleCSVFile}
        />
        <p />
        {csvfile && <button onClick={importCSV}> Upload now!</button>}
      </div>

      <AreaChartGeneric />

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
    </>
  )
}

export default FIIIndexBarChart

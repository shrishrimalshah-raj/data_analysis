import React, { useState } from 'react'
import Papa from 'papaparse';

import { BarChartGeneric } from '../../components/BarChart'

import { splitArray } from '../../lib';
import { AreaChartGeneric } from '../../components/AreaChart';

const PROIndexBarChart = () => {

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
    let response = splitArray(data, 'FII');
    const { fno_index_data,
      fno_future_data,
      fno_call_data,
      fno_put_data } = response;


    setFnoData(fno_index_data);
    setFutureData(fno_future_data);
    setCallData(fno_call_data);
    setPutData(fno_put_data);
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
        <BarChartGeneric data={fnoData} client_code="FII" segment="FNO_INDEX" chip_input="PRO" />
      }
      {futureData.length > 1 &&
        <BarChartGeneric data={futureData} client_code="FII" segment="FNO_FUTURE" chip_input="PRO" />
      }
      {callData.length > 1 &&
        <BarChartGeneric data={callData} client_code="FII" segment="FNO_CALL_DATA" chip_input="PRO" />
      }
      {putData.length > 1 &&
        <BarChartGeneric data={futureData} client_code="FII" segment="FNO_PUT_DATA" chip_input="PRO" />
      }
    </>
  )
}

export default PROIndexBarChart

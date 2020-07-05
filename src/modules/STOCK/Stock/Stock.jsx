import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import {
  DailyChartOI,
  NiftyChart,
  MixedChartOI,
  SelectComponent,
  FilterByPickers
} from '../components';

import config from '../../../config';

const Stock = () => {
  const { serviceURL } = config;

  const [lastRecord, setLastRecord] = useState(22);
  const [filterBy, setFilterBy] = useState('');
  const [fiiURL, setFiiURL] = useState(`${serviceURL}/fii/index/${lastRecord}`)
  const [niftyURL, setNiftyURL] = useState(`${serviceURL}/nifty/index/${lastRecord}`)
  const [stockURL, setStockUrl] = useState(`${serviceURL}/nse/stock/`)


  const [fiiData, setFiiData] = useState([])
  const [niftyData, setNiftyData] = useState([])
  const [stockData, setStockData] = useState([])


  useEffect(() => {
    async function fetchData() {
      const requestOne = axios.get(fiiURL);
      const requestTwo = axios.get(niftyURL);
      const requestThree = axios.get(stockURL);


      axios
        .all([requestOne, requestTwo, requestThree])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];
            const responseThree = responses[2];

            setFiiData(responseOne.data.data)
            setNiftyData(responseTwo.data.data)
            setStockData(responseThree.data.data)
          })
        )
        .catch(errors => {
          console.error(errors);
        });
    }

    fetchData();
  }, [fiiURL, niftyURL]);

  const handleChange = (event) => {
    const { target: { value } } = event;

    setFilterBy(value)
  };

  return (
    <>

      <SelectComponent filterBy={filterBy} handleChange={handleChange} />

      {filterBy !== '' && (
        <FilterByPickers
          setFiiURL={setFiiURL}
          setNiftyURL={setNiftyURL}
          filterBy={filterBy}
          lastRecord={lastRecord}
          setLastRecord={setLastRecord}
          url="fii/index"
          clientCode="FII INDEX DATA OI"
        />)}

      {/* <DailyChartOI data={fiiData} title="FII INDEX DATA OI CHANGE 2020" /> */}
      
       {/* NIFTY CHART */}
      <MixedChartOI 
        name="FII Index Long and Short Position"
        data={fiiData} 
        filterColumn={["date", "longPosition", "shortPosition",]} 
        extraColumn={["dailyLongPercentage", "dailyShortPercentage"]}  
      />

       {/* NIFTY CHART */}
       <NiftyChart 
        name="NIFTY CHART LAST 22 DAYS"
        data={niftyData} 
      />

       {/* STOCK CHART */}
      <NiftyChart
        name={stockData.length > 0 ? `${stockData[0].symbol} STOCK CHART LAST 22 DAYS`: ''} 
        data={stockData} 
      />

       {/* STOCK CHART */}
      <MixedChartOI
        name="Deliverable Quantity and Total Traded Quantity"
        data={stockData} 
        filterColumn={["date", "deliverableQuantity", "totalTradedQuantity",]} 
        // extraColumn={["dailyLongPercentage", "dailyShortPercentage"]}  
      />

      {/* STOCK CHART */}
      <MixedChartOI 
        name="Delivery Percentage"
        data={stockData} 
        filterColumn={["date", "deliveryPercentage",]} 
        // extraColumn={["dailyLongPercentage", "dailyShortPercentage"]}  
      />

      {/* STOCK CHART */}
      <MixedChartOI 
        name="Delivery Moving Average 3 days"
        data={stockData} 
        filterColumn={["date", "ma3days",]} 
        // extraColumn={["dailyLongPercentage", "dailyShortPercentage"]}  
      />

    </>
  )
}

export default Stock

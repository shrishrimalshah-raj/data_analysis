import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import FilterByPickers from './FilterByPickers'
import NiftyChart from './NiftyChart'
import MixedChartOI from './MixedChartOI';
import DailyChartOI from './DailyChartOI';
import SelectComponent from './SelectComponent';

import config from '../../config';

const FIIIndexBar = () => {
  const { serviceURL } = config;

  const [lastRecord, setLastRecord] = useState(10);
  const [filterBy, setFilterBy] = useState('');
  const [fiiURL, setFiiURL] = useState(`${serviceURL}/fii/index/${lastRecord}`)
  const [niftyURL, setNiftyURL] = useState(`${serviceURL}/nifty/index/${lastRecord}`)

  const [fiiData, setFiiData] = useState([])
  const [niftyData, setNiftyData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const requestOne = axios.get(fiiURL);
      const requestTwo = axios.get(niftyURL);

      axios
        .all([requestOne, requestTwo])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];


            setFiiData(responseOne.data.data)
            setNiftyData(responseTwo.data.data)
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
      />)}
      
      <DailyChartOI data={fiiData} title="FII INDEX DATA OI CHANGE 2020" />

      <NiftyChart data={niftyData} />

      <MixedChartOI data={fiiData} />

    </>
  )
}

export default FIIIndexBar

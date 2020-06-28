import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import MaterialUIPickers from './MaterialUIPickers'
import NiftyChart from './NiftyChart'
import MixedChartOI from './MixedChartOI';
import DailyChartOI from './DailyChartOI';
import config from '../../config';

const FIIIndexBar = () => {
  const { serviceURL } = config;

  const [lastRecord, setLastRecord] = useState(10);
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

  return (
    <>

      <MaterialUIPickers setFiiURL={setFiiURL} setNiftyURL={setNiftyURL}/>

      <DailyChartOI data={fiiData} title="FII INDEX DATA OI CHANGE 2020"/>

      <NiftyChart data={niftyData} />

      <MixedChartOI data={fiiData} />

    </>
  )
}

export default FIIIndexBar

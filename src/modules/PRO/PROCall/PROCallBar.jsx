import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import {
  DailyChartOI,
  NiftyChart,
  MixedChartOI,
  SelectComponent,
  FilterByPickers,
  PieChart,
} from "../components";

import config from "../../../config";

const PROCallBar = () => {
  const { serviceURL } = config;
  const [lastRecord, setLastRecord] = useState(10);
  const [filterBy, setFilterBy] = useState("");
  const [proURL, setProURL] = useState(
    `${serviceURL}/pro/call/${lastRecord}`
  );
  const [niftyURL, setNiftyURL] = useState(
    `${serviceURL}/nifty/index/${lastRecord}`
  );

  // proData, setProData
  const [proData, setProData] = useState([]);
  const [niftyData, setNiftyData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestOne = axios.get(proURL);
      const requestTwo = axios.get(niftyURL);

      axios
        .all([requestOne, requestTwo])
        .then(
          axios.spread((...responses) => {
            const responseOne = responses[0];
            const responseTwo = responses[1];

            setProData(responseOne.data.data);
            setNiftyData(responseTwo.data.data);
          })
        )
        .catch((errors) => {
          console.error(errors);
        });
    }

    fetchData();
  }, [proURL, niftyURL]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setFilterBy(value);
  };

  return (
    <>
      <SelectComponent filterBy={filterBy} handleChange={handleChange} />

      {filterBy !== "" && (
        <FilterByPickers
          setProURL={setProURL}
          setNiftyURL={setNiftyURL}
          filterBy={filterBy}
          lastRecord={lastRecord}
          setLastRecord={setLastRecord}
          url="pro/call"
          clientCode="PRO CALL DATA OI"
        />
      )}

      {/* DAILY LONG AND SHORT POSITION CHART */}
      <DailyChartOI
        name="Daily Long and Short Position"
        data={proData}
        title="PRO CALL DATA OI CHANGE 2020"
      />

      {/* NIFTY CHART */}
      <NiftyChart name="NIFTY CHART" data={niftyData} />

      {/* NIFTY CHART */}
      <MixedChartOI
        name="NIFTY CHART"
        data={niftyData}
        filterColumn={["date", "close"]}
      />

      {/* LONG AND SHORT POSITION CHART */}
      <MixedChartOI
        name="Long and Short Position"
        data={proData}
        filterColumn={["date", "longPosition", "shortPosition"]}
        extraColumn={["dailyLongPercentage", "dailyShortPercentage"]}
      />

      {/* NET POSITION CHART */}
      <MixedChartOI
        name="Net Position"
        data={proData}
        filterColumn={["date", "netPosition"]}
        color={["#a52714"]}
      />

      {/*DAILY PERCENTAGE POSITION CHART */}
      <PieChart
        data={proData}
        filterColumn={["dailyLongPercentage", "dailyShortPercentage"]}
        clientCode="PRO CALL POSITION"
        name="DAILY PERCENTAGE POSITION CHART"
      />
    </>
  );
};

export default PROCallBar;

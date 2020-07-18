import React from "react";

import Chart from "react-google-charts";
import { Grid, Box } from "@material-ui/core";

import { ChipComponent } from "../../../components/Chip";

const changePieChartData = (data, totalColumn, clientCode) => {
  if (data.length === 0) {
    return data;
  }

  const filterColumn = totalColumn;

  let newArray = [];
  newArray.push(filterColumn);

  const lastArrayValue = data[data.length - 1];

  // ['dailyLongPercentage', 'dailyShortPercentage'],
  newArray.push([`${clientCode} LONG`, lastArrayValue[totalColumn[0]]]);
  newArray.push([`${clientCode} SHORT`, lastArrayValue[totalColumn[1]]]);

  return newArray;
};

const PieChart = ({ name, data, filterColumn, clientCode }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Box mt="50px">
        <ChipComponent name={name} />

        <Chart
          width={"450px"}
          height={"350px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={changePieChartData(data, filterColumn, clientCode)}
          options={{
            colors: ["#0f9d58", "#a52714"],
          }}
          rootProps={{ "data-testid": "7" }}
        />
      </Box>
    </Grid>
  );
};

export default PieChart;

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

import FIIIndexBar from './FIIIndex';
import FIIFutureBar from './FIIFuture';
import FIICallBar from './FIICall';
import FIIPutBar from './FIIPUT';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const FIITabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Paper square>
          <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example">
            <Tab label="FII INDEX DATA" />
            <Tab label="FII FUTURE DATA" />
            <Tab label="FII CALL DATA" />
            <Tab label="FII PUT DATA" />
          </Tabs>
        </Paper>

        <TabPanel value={value} index={0}>
          <FIIIndexBar />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FIIFutureBar />
      </TabPanel>
        <TabPanel value={value} index={2}>
         <FIICallBar />
      </TabPanel>
      <TabPanel value={value} index={3}>
         <FIIPutBar />
      </TabPanel>

      </div>


    </>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default FIITabs

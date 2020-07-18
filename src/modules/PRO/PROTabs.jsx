import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';

import PROIndexBar from './PROIndex';
import PROFutureBar from './PROFuture';
import PROCallBar from './PROCall';
import PROPutBar from './PROPut';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CLIENTTabs = () => {
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
            <Tab label="PRO INDEX DATA" />
            <Tab label="PRO FUTURE DATA" />
            <Tab label="PRO CALL DATA" />
            <Tab label="PRO PUT DATA" />
          </Tabs>
        </Paper>

        <TabPanel value={value} index={0}>
          <PROIndexBar />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PROFutureBar />
      </TabPanel>
        <TabPanel value={value} index={2}>
         <PROCallBar />
      </TabPanel>
      <TabPanel value={value} index={3}>
         <PROPutBar />
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

export default CLIENTTabs

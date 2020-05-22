import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Switch,
  Route,
  Link,
  BrowserRouter,
  useHistory,
  Redirect
} from 'react-router-dom';

import { FIIIndexBarChart } from './modules/FII';
import { PROIndexBarChart } from './modules/PRO';
import { CLIENTIndexBarChart } from './modules/CLIENT';

import SelectComponent from './components/SelectComponent';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <SelectComponent />
        <Switch>
          <Route path="/FII">
            <FIIIndexBarChart />
          </Route>
          <Route path="/PRO">
            <PROIndexBarChart />
          </Route>
          <Route path="/CLIENT">
            <CLIENTIndexBarChart />
          </Route>


        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
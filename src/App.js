import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';

import { FIIIndexBarChart, FIIIndexBar } from './modules/FII';
import { PROIndexBarChart } from './modules/PRO';
import { CLIENTIndexBarChart } from './modules/CLIENT';

import SelectComponent from './components/SelectComponent';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <SelectComponent />
        <Switch>

          {/* <Route exact path="/FII" component={FIIIndexBarChart} /> */}
          <Route exact path="/FII" component={FIIIndexBar} />
          <Route exact path="/PRO" component={PROIndexBarChart} />
          <Route exact path="/CLIENT" component={CLIENTIndexBarChart} />
         
          <Redirect to="/" />

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
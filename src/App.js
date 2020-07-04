import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';

import { FIITabs } from './modules/FII';
import { PROIndexBarChart } from './modules/PRO';
import { CLIENTIndexBarChart } from './modules/CLIENT';
import { Stock } from './modules/STOCK';

import NavBar from './components/NavBar';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />  
        <Switch>

          <Route exact path="/FII" component={FIITabs} />
          <Route exact path="/PRO" component={PROIndexBarChart} />
          <Route exact path="/CLIENT" component={CLIENTIndexBarChart} />
          <Route exact path="/STOCK" component={Stock} />


          <Redirect to="/" />

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
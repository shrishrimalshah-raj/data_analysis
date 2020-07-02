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

          <Redirect to="/" />

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
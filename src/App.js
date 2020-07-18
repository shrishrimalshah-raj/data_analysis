import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';

import { FIITabs } from './modules/FII';
import { CLIENTTabs } from './modules/CLIENT';
import { PROTabs } from './modules/PRO';
import { Stock } from './modules/STOCK';

import NavBar from './components/NavBar';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />  
        <Switch>
          <Route exact path="/FII" component={FIITabs} />
          <Route exact path="/PRO" component={PROTabs} />
          <Route exact path="/CLIENT" component={CLIENTTabs} />
          <Route exact path="/STOCK" component={Stock} />
          
          <Redirect to="/FII" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
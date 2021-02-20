import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import DashboardPage from './dashboardPage';
import DashNavbar from './dashNavbar';
import ShipForm from './ships/shipForm';
import ShipMap from './ships/shipMap';
import Ships from './ships/ships';

const DashboardRouter = () => {
  return (
    <div>
      <DashNavbar />
      <Switch>
        <Route path="/dashboard/ships" component={Ships} />
        <Route path="/dashboard/ship-add" component={ShipForm} />
        <Route path="/dashboard/ship-map" component={ShipMap} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  );
};

export default DashboardRouter;

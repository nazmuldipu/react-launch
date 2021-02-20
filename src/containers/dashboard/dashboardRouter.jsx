import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import RoleRoute from './../../services/roleRoutes';
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
        <RoleRoute
          path="/dashboard/ships"
          component={Ships}
          roles={["ROLE_ADMIN"]}
        />
        <Route path="/dashboard/ship-add" component={ShipForm} />
        <Route path="/dashboard/ship-map" component={ShipMap} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default DashboardRouter;

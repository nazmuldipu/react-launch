import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import RoleRoute from "./../../services/roleRoutes";
import DashboardPage from "./dashboardPage";
import DashNavbar from "./dashNavbar";
import ShipMap from "./ships/shipMap";
import Ships from "./ships/ships";
import ShipAdd from "./ships/shipAdd";

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
        <Route path="/dashboard/ship-add" component={ShipAdd} />
        <Route path="/dashboard/ship-map" component={ShipMap} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default DashboardRouter;

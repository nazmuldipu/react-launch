import "./App.css";

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import DashboardRouter from "./containers/dashboard/dashboardRouter";
import HomePage from "./containers/homePage";
import LoginPage from "./containers/loginPage";
import NotFound from "./containers/notFound";
import ProtectedRoute from "./components/protectedRoutes";

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Switch>
        <ProtectedRoute path="/dashboard" component={DashboardRouter} />
        <Route path="/login" component={LoginPage} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;

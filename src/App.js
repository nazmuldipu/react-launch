import "./App.css";

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import HomePage from "./containers/homePage";
import NotFound from "./containers/notFound";
import LoginPage from "./containers/loginPage";

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;

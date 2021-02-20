import React from "react";
import auth from "./authServices";
import { Route, Redirect } from "react-router-dom";

const RoleRoute = ({ path, component: Component, render, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.hasAuthority(roles)) {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        }
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default RoleRoute;

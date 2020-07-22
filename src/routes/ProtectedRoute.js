import React from "react";
import { Route, Redirect } from "react-router-dom";
import { SIGNIN_URL } from "./URLMap";
import { isAuthenticated } from "../utils/auth";

const ProtectedRoutes = ({ component: ProtectedComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        // console.log( {routeProps} );
        if (!isAuthenticated())
          return (
            <Redirect
              to={{
                pathname: SIGNIN_URL,
                state: { from: routeProps.location.pathname },
              }}
            />
          );
        return <ProtectedComponent {...routeProps} />;
      }}
    />
  );
};

export default ProtectedRoutes;

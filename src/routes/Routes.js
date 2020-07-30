import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import {
  SIGNUP_URL,
  SIGNIN_URL,
  DASHBOARD_BASE_URL,
  PRODUCT_BASE_URL,
  PIZZA_BASE_URL,
  ORDER_BASE_URL,
} from "./URLMap";
import SignUp from "../signup/SignUp";
import SignIn from "../signin/SignIn";
import Dashboard from "../dashboard/Dashboard";
import Products from "../product/Products";
import ProductDetails from "../product/ProductDetails";
import ProductEdit from "../product/ProductEdit";
import Pizzas from "../pizza/Pizzas";
import Sales from "../sale/Sales";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="dashboard" />
        <Route path={SIGNUP_URL} component={SignUp} />
        <Route path={SIGNIN_URL} component={SignIn} />
        <ProtectedRoute path={DASHBOARD_BASE_URL} component={Dashboard} />
        <ProtectedRoute
          exact
          path={`${PRODUCT_BASE_URL}/:id`}
          component={ProductDetails}
        />
        <ProtectedRoute
          exact
          path={`${PRODUCT_BASE_URL}/:id/edit`}
          component={ProductEdit}
        />
        <ProtectedRoute path={PIZZA_BASE_URL} component={Pizzas} />
        <ProtectedRoute path={PRODUCT_BASE_URL} component={Products} />
        <Route path={ORDER_BASE_URL} component={Sales} />
      </Switch>
    </div>
  );
};

export default Routes;

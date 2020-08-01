import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import {
  SIGNUP_URL,
  SIGNIN_URL,
  DASHBOARD_BASE_URL,
  ORDER_BASE_URL,
  CUSTOMER_BASE_URL,
  PRODUCT_BASE_URL,
  PIZZA_BASE_URL,
  DRINK_BASE_URL,
} from "./URLMap";
import ProtectedRoute from "./ProtectedRoute";
import SignUp from "../signup/SignUp";
import SignIn from "../signin/SignIn";
import Dashboard from "../dashboard/Dashboard";
import Sales from "../sale/Sales";
import Customers from "../customer/Customers";
import Products from "../product/Products";
import ProductDetails from "../product/ProductDetails";
import ProductEdit from "../product/ProductEdit";
import ProductNew from "../product/ProductNew";
import Pizzas from "../pizza/Pizzas";
import Drinks from "../drink/Drinks";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/products" />
        <Route exact path={SIGNUP_URL} component={SignUp} />
        <Route exact path={SIGNIN_URL} component={SignIn} />
        <ProtectedRoute exact path={ORDER_BASE_URL} component={Sales} />
        <ProtectedRoute exact path={CUSTOMER_BASE_URL} component={Customers} />
        <ProtectedRoute exact path={DASHBOARD_BASE_URL} component={Dashboard} />
        <ProtectedRoute
          exact
          path={`${PRODUCT_BASE_URL}/new`}
          component={ProductNew}
        />
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
        <ProtectedRoute exact path={PRODUCT_BASE_URL} component={Products} />
        <ProtectedRoute exact path={PIZZA_BASE_URL} component={Pizzas} />
        <ProtectedRoute exact path={DRINK_BASE_URL} component={Drinks} />
      </Switch>
    </div>
  );
};

export default Routes;

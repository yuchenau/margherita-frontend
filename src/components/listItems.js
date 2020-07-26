import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListSubheader from "@material-ui/core/ListSubheader";

import DashboardIcon from "@material-ui/icons/Dashboard";
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";
// import FastfoodIcon from "@material-ui/icons/Fastfood";
// import SettingsInputSvideoIcon from '@material-ui/icons/SettingsInputSvideo';
// import LocalBarIcon from "@material-ui/icons/LocalBar";
import StyleIcon from "@material-ui/icons/Style";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import "./styles/nav.css";
import { NavLink } from "react-router-dom";
import {
  DASHBOARD_BASE_URL,
  PIZZA_BASE_URL,
  ORDER_BASE_URL,
  CUSTOMER_BASE_URL,
} from "../routes/URLMap";

export const mainListItems = (
  <div>
    <NavLink to={DASHBOARD_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        Dashboard
      </ListItem>
    </NavLink>

    <ListSubheader inset>Products</ListSubheader>
    <NavLink to={PIZZA_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <LocalPizzaIcon />
        </ListItemIcon>
        Pizzas
      </ListItem>
    </NavLink>

    {/* <NavLink to={PIZZA_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <FastfoodIcon />
        </ListItemIcon>
        Snacks
      </ListItem>
    </NavLink> */}

    {/* <NavLink to={PIZZA_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <LocalBarIcon />
        </ListItemIcon>
        Sides/Desserts/Drinks
      </ListItem>
    </NavLink> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Management</ListSubheader>
    <NavLink to={ORDER_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <StyleIcon />
        </ListItemIcon>
        Recent Orders
      </ListItem>
    </NavLink>

    <NavLink to={CUSTOMER_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        Customers
      </ListItem>
    </NavLink>
  </div>
);

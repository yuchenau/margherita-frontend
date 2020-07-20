import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import StyleIcon from '@material-ui/icons/Style';

import './styles/nav.css'
import { NavLink } from 'react-router-dom';

import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { DASHBOARD_BASE_URL, MENU_BASE_URL, ORDER_BASE_URL } from '../routes/URLMap';

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
    

    <ListItem button>
      <ListItemIcon>
        <SupervisedUserCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
     
    <NavLink to={MENU_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <LocalPizzaIcon />
        </ListItemIcon>
        Menus
      </ListItem>
    </NavLink>    
    
    <NavLink to={ORDER_BASE_URL} className="nav">
      <ListItem button>
        <ListItemIcon>
          <StyleIcon />
        </ListItemIcon>
        Orders
      </ListItem>
    </NavLink>
    

    {/* <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem> */}

    {/* <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}

  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);
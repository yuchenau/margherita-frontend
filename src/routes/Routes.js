import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { SIGNUP_URL, SIGNIN_URL, DASHBOARD_BASE_URL, MENU_BASE_URL, ORDER_BASE_URL } from './URLMap';
import SignUp from '../signup/SignUp';
import SignIn from '../signin/SignIn';
import Dashboard from '../dashboard/Dashboard';
import Menus from '../menu/Menus';
import Sales from '../order/Sales';
import ProtectedRoute from './ProtectedRoute';
import ProtectedRoutes from './ProtectedRoute';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Redirect exact from='/' to="dashboard" />
                <Route path={SIGNUP_URL} component={SignUp} />
                <Route path={SIGNIN_URL} component={SignIn} />
                <ProtectedRoute path={DASHBOARD_BASE_URL} component={Dashboard} />
                <ProtectedRoutes path={MENU_BASE_URL} component={Menus} />
                <Route path={ORDER_BASE_URL} component={Sales} />
            </Switch>
        </div>
    )
}

export default Routes;
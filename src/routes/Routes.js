import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { SIGNIN_URL, DASHBOARD_BASE_URL } from './URLMap';
import SignIn from '../signin/SignIn';
import Dashboard from '../dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Redirect exact from='/' to="dashboard" />
                {/* <Route exact path={SIGNUP_URL} component={} /> */}
                <Route path={SIGNIN_URL} component={SignIn} />
                <ProtectedRoute path={DASHBOARD_BASE_URL} component={Dashboard} />
            </Switch>
        </div>
    )
}

export default Routes;
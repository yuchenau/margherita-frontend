import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { SIGNUP_URL, SIGNIN_URL, DASHBOARD_BASE_URL } from './URLMap';
import SignUp from '../signup/SignUp';
import SignIn from '../signin/SignIn';
import Dashboard from '../dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Redirect exact from='/' to="dashboard" />
                <Route path={SIGNUP_URL} component={SignUp} />
                <Route path={SIGNIN_URL} component={SignIn} />
                <ProtectedRoute path={DASHBOARD_BASE_URL} component={Dashboard} />
                {/* <Route path={}></Route> */}
            </Switch>
        </div>
    )
}

export default Routes;
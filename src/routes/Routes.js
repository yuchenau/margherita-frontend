import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { SIGNUP_URL, SIGNIN_URL, Dashboard_BASE_URL, ORDER_BASE_URL } from './URLMap';
import SignIn from '../signin/SignIn';
import Dashboard from '../dashboard/Dashboard';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Redirect exact from='/' to="dashboard" />
                {/* <Route exact path={SIGNUP_URL} component={} /> */}
                <Route path={SIGNIN_URL} component={SignIn} />
                <Route path={Dashboard_BASE_URL} component={Dashboard} />
            </Switch>
        </div>
    )
}

export default Routes;
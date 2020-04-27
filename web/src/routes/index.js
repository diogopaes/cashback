import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';

import Profile from '../pages/Profile/index';
import Dashboard from '../pages/Dashboard/index';

import Purchase from '../pages/Purchase/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/purchase" component={Purchase} isPrivate />
    </Switch>
  );
}

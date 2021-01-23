import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  Resume as ResumeView,
  NotFound as NotFoundView,
  NotFoundCover as NotFoundCoverView,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={ResumeView}
        exact
        layout={MainLayout}
        path="/resume"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <RouteWithLayout
        component={NotFoundCoverView}
        exact
        layout={MinimalLayout}
        path="/not-found-cover"
      />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MainLayout}
        path="/"
      />
      <Redirect to="/not-found-cover" status="404" />
    </Switch>
  );
};

export default Routes;

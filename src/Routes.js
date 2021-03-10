import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './common';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  Resume as ResumeView,
  ProjectMarketMetrics as ProjectMarketMetricsView,
  ProjectCryptoSearch as ProjectCryptoSearchView,
  ProjectEventy as ProjectEventyView,
  ProjectImputation as ProjectImputationView,
  ProjectFRED as ProjectFREDView,
  ProjectDiversityCoefficient as ProjectDiversityCoefficientView,
  ProjectComputerScience as ProjectComputerScienceView,
  ProjectPhysicalTherapy as ProjectPhysicalTherapyView,
  ProjectCTLStatus as ProjectCTLStatusView,
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
        component={ProjectMarketMetricsView}
        exact
        layout={MainLayout}
        path="/market-metrics"
      />
      <RouteWithLayout
        component={ProjectCryptoSearchView}
        exact
        layout={MainLayout}
        path="/cryptosearch"
      />
      <RouteWithLayout
        component={ProjectEventyView}
        exact
        layout={MainLayout}
        path="/eventy"
      />
      <RouteWithLayout
        component={ProjectImputationView}
        exact
        layout={MainLayout}
        path="/imputation"
      />
      <RouteWithLayout
        component={ProjectDiversityCoefficientView}
        exact
        layout={MainLayout}
        path="/diversity-coefficient"
      />
      <RouteWithLayout
        component={ProjectFREDView}
        exact
        layout={MainLayout}
        path="/fred"
      />
      <RouteWithLayout
        component={ProjectComputerScienceView}
        exact
        layout={MainLayout}
        path="/computer-science"
      />
      <RouteWithLayout
        component={ProjectPhysicalTherapyView}
        exact
        layout={MainLayout}
        path="/physical-therapy"
      />
      <RouteWithLayout
        component={ProjectCTLStatusView}
        exact
        layout={MainLayout}
        path="/ctl-status"
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

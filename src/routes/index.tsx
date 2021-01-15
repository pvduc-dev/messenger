import React, { Suspense, FunctionComponent, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
  Redirect,
} from 'react-router-dom';

import { isAuthenticated } from '@/services/auth';

interface AuthRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: FunctionComponent<AuthRouteProps> = ({
  component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={
        isAuthenticated() ? component : () => <Redirect to="/sign-in" />
      }
    />
  );
};

const PublicRoute: FunctionComponent<AuthRouteProps> = ({
  component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={isAuthenticated() ? () => <Redirect to="/" /> : component}
    />
  );
};

export default () => (
  <Suspense fallback={<h1>Loading</h1>}>
    <Router>
      <Switch>
        <PrivateRoute
          path="/"
          exact
          component={lazy(() => import('@/components/Home'))}
        />
        <PublicRoute
          path="/sign-in"
          component={lazy(() => import('@/components/SignIn'))}
        />
        <Route
          path="/landing-page"
          component={lazy(() => import('@/components/LandingPage'))}
        />
      </Switch>
    </Router>
  </Suspense>
);

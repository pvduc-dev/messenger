import React, { FunctionComponent } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { isAuthenticated } from '@/services/auth';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute: FunctionComponent<PrivateRouteProps> = ({
  component,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      component={
        isAuthenticated() ? component : () => <Redirect to="/sign-in" />
      }
    />
  );
};

export default PrivateRoute;

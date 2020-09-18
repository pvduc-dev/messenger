import React, { Component, FunctionComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProps {
  component: Component;
}

const PrivateRoute: FunctionComponent<IProps> = ({
  const isAuthenticate = document.coo
  component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="sign-in" />
      }
     />
  );
};

export default PrivateRoute;

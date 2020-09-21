import React, { FunctionComponent, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from '@/components/Loading';
import PrivateRoute from '@/components/PrivateRoute';

const App: FunctionComponent = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <PrivateRoute
            path="/"
            exact
            component={lazy(() => import('@/components/Home'))}
          />
          <Route
            path="/sign-in"
            component={lazy(() => import('@/components/SignIn'))}
          />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;

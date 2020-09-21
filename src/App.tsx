import React, { FunctionComponent, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from '@/components/Loading';

const App: FunctionComponent = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route
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

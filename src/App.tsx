import React, { FunctionComponent, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: FunctionComponent = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className="fixed top-0 left-0 w-full border border-blue-500"/>
      <Router>
        <Switch>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;

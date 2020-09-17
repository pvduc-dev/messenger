import React, {Suspense} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default (
  <Suspense fallback={<h1>Loading</h1>}>
    <Router>
      <div>
        <Route path="/" />
      </div>
    </Router>
  </Suspense>
)

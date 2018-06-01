import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Route
      path="/"
      component={App}
    />
  </Router>
  , document.getElementById('root'));
registerServiceWorker();

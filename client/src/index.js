import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './store';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route
        path="/"
        component={App}
      />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

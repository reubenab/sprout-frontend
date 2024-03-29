// Emulate an es6 environment
import 'babel-core/polyfill';

// Import our various react tools
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import {
  DevTools,
  LogMonitor
} from 'redux-devtools/lib/react';

// Import our store creator and routes config
import store from './config/store';
import routes from './config/routes';
import initialState from './config/initialState';

// Create our store with the initial state
const initialStore = store(initialState);

// Render out the root component with the redux provider and debug panel
render(
  <div>
    <Provider store={ initialStore }>
      <ReduxRouter routes={ routes } />
    </Provider>
  </div>,
  document.getElementById('root')
);

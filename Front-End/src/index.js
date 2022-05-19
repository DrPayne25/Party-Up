import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

const rootElement = document.getElementById('root');

ReactDom.render(
  <Provider store={store}>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </Provider>,
  rootElement
);

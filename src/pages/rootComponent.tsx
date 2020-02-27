import React, { Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';

import store from '../store';
import App from '../containers/App/async';
import Home from './Home/async';
import Loading from '../components/Loading';

const RootComponent = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pokemon App</title>
      </Helmet>
      <Router>
        <div className="RootComponent">
          <Suspense fallback={<Loading />}>
            <Home>
              <Switch>
                <Route component={App} exact path="/" />
                <Redirect from="/*" to="/" />
              </Switch>
            </Home>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
};

export default RootComponent;

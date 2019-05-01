import React from 'react';
import ReactDOM from 'react-dom';
// Uncomment below if implementing history
// import { createBrowserHistory } from 'history';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './components/export';
import { publicRoutes, privateRoutes } from './routes/routes.js';
import { GlobalContextProvider } from './global/GlobalContext';
import { Error404 } from './views/Public/export'

// Uncomment below if implementing history
// const hist = createBrowserHistory();

ReactDOM.render(
  <GlobalContextProvider>
    <BrowserRouter basename="/">
      <Switch>
        {/* Render the publicRoutes */}
        {publicRoutes.map((prop, key) => (
          <Route
            exact
            path={prop.path}
            key={key}
            component={prop.component}
            name={prop.name}
          />
        ))}

        {/* Render the privateRoutes */}
        {privateRoutes.map((prop, key) => (
          <PrivateRoute
            exact
            path={prop.path}
            key={key}
            component={prop.component}
            name={prop.name}
          />
        ))}
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  </GlobalContextProvider>,
  document.getElementById('root')
);

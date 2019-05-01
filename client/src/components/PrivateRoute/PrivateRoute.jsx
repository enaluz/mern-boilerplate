import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GlobalContext } from '../../global/GlobalContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <GlobalContext.Consumer>
      {context => (
        <Route
          {...rest}
          render={props =>
            context.state.isLoggedIn ? (
              // If the user is logged in, render the requested page
              <Component {...props} />
            ) : (
              // Else, redirect the user to the home page (this may change to a /login page)
              <Redirect to="/" />
            )
          }
        />
      )}
    </GlobalContext.Consumer>
  );
};

export default PrivateRoute;

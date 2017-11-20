import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import routes from '../../routes';
import PrivateRoute from '../PrivateRoute';
import './AppContainer.scss';

const AppContainer = () => (
  <Router>
    <div>
      {
        routes.map(
          ({ path, component, requireAuth }) => (
            requireAuth ? (
              <PrivateRoute key={ path } path={ path } component={ component } />
            ) : (
              <Route exact key={ path } path={ path } component={ component } />
            )
          )
        )
      }
    </div>
  </Router>  
);

export default AppContainer;
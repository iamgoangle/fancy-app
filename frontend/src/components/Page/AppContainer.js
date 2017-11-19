import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import routes from '../../routes';
import { isLoggedIn } from '../../services/authentication-service';
import './AppContainer.scss';

// Protect the route
// if already logged in render the component that pass
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/'
      }}/>
    )
  )}/>
);

const AppContainer = () => (
  <Router>
    <div>
      {
        routes.map(
          ({ path, component, requireAuth }) => (
          requireAuth ? (<PrivateRoute key={ path } path={ path } component={ component } />) : 
              (<Route exact key={ path } path={ path } component={ component } />)
          )
        )
      }
    </div>
  </Router>  
);

export default AppContainer;
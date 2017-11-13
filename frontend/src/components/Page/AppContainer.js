import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import routes from '../../routes';

import './AppContainer.scss';

const AppContainer = () => (
  <Router>
    <div>
      {
        routes.map(({ path, component }) => 
          <Route exact key={ path } path={ path } component={ component } />
        )
      }
    </div>
  </Router>  
);

export default AppContainer;
import React from 'react';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppContainer from './components/Page/AppContainer';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.min.css';

const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, middleware);

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <Provider store={ store } key="provider">
        <MuiThemeProvider>
          {<AppContainer />}
        </MuiThemeProvider>  
      </Provider>  
    );
  }
}

export default App;
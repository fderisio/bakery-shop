import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import Store from './store';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'

ReactDOM.render(
    <Provider store={Store}>
      <Router>
      	<Switch>
            <Route exact path="/" component={App} />
		</Switch>
      </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Details from './Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <Switch>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

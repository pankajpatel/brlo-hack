import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import ListOrders from './ListOrders';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/listorders' component={ListOrders} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();

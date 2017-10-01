import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Create from './Create';
import ListOrders from './ListOrders';
import Terms from './Terms';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/orders' component={ListOrders} />
      <Route exact path='/terms-and-conditions' component={Terms} />
      <Route exact path='/create' component={Create} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();

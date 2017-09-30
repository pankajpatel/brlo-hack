import React, { Component } from 'react';
import logo from './brlo_logo.png';
import './App.css';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="content">
          <h2>Login</h2>
          <Link to='/listorders' className="btn btn-primary btn-lg">Facebook</Link>{' '}
          <Link to='/listorders' className="btn btn-primary btn-lg">Twitter</Link>
        </div>
      </div>
    );
  }
}

export default App;

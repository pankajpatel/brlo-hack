import React, { Component } from 'react';
import logo from './brlo_logo.png';
import './App.css';
import {Link} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'login'
    };
  }
  toggleForm(form) {
    this.setState({form})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="content">
          <div className="form-container text-left">
            <Register onClick={this.toggleForm.bind(this, 'login')} hidden={this.state.form === 'login' ? 'hidden' : ''} />
            <Login onClick={this.toggleForm.bind(this, 'register')} hidden={this.state.form === 'register' ? 'hidden' : ''} />
          </div>
          <p>
            <Link to='/orders' className="btn btn-primary btn-lg"><i className="fa fa-facebook"/>&nbsp;&nbsp;Facebook</Link>{' '}
            <Link to='/orders' className="btn btn-primary btn-lg"><i className="fa fa-twitter"/>&nbsp;&nbsp;Twitter</Link>
          </p>
          
          <p>
            <Link to='/create' className="btn btn-info btn-lg">Create</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default App;

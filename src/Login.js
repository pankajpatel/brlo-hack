import React from 'react';

export default (props) => {
  return (
    <div className={props.hidden ? 'hidden' : ''}>
      <form action="/orders">
        <div className="form-group">
          <input type="email" className="form-control form-control-lg form-control-brlo" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <input type="password" className="form-control form-control-lg form-control-brlo" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-brlo btn-block">Submit</button>
      </form>
      <hr />
      <button type="button" onClick={props.onClick} className="btn btn-outline-brlo btn-block">Register</button>
    </div>
  );
} 

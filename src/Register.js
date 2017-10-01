import React from 'react';

export default (props) => {
  return (
    <div className={props.hidden ? 'hidden' : ''}>
      <form action="/orders">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input type="email" className="form-control form-control-brlo" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input type="password" className="form-control form-control-brlo" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <input type="text" className="form-control form-control-brlo" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2" className="col-form-label">Address 2</label>
          <input type="text" className="form-control form-control-brlo" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input type="text" className="form-control form-control-brlo" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState" className="col-form-label">State</label>
            <select id="inputState" className="form-control form-control-brlo">Choose</select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputZip" className="col-form-label">Zip</label>
            <input type="text" className="form-control form-control-brlo" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" /> Agree to <a href="/terms-and-conditions">Terms and Conditions</a>
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-brlo btn-block">Submit</button>
      </form>
      <hr />
      <button type="button" onClick={props.onClick} className="btn btn-outline-brlo btn-block">Login</button>
    </div>
  );
} 

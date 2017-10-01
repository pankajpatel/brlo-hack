import React, { Component } from 'react';
import Header from './Header';
import fetch from 'isomorphic-fetch';
import StripeCheckout from 'react-stripe-checkout';
import { NAMES, CURRENCY, STRIPE_PUBLISHABLE, fromEuroToCent, onToken } from './constants';

const NAME = NAMES[Math.floor(Math.random() * 3) + 0];
console.log(NAME)
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: null,
      name: NAME,
      label: '',
      background: '',
      quantity: 3,
      terms: false,
      loading: false,
      posting: false
    }
  }

  placeOrder(e) {
    e.preventDefault();
    this.setState({posting: true})
    var form = new FormData();
    form.append('by', NAME)
    form.append('delivery_location', this.deliveryLocation.value)
    let file = this.background.files[0];
    form.append('image', file)
    form.append('payment_total', this.state.quantity*50);
    form.append('payment_currency', CURRENCY);
    form.append('payment_status', 'Paid');
    form.append('payment_method', 'stripe');
    form.append('status', 1);
    form.append('count', this.state.quantity*24);
    var headers = new Headers();
    return fetch('http://brlo-env.zmifd4r2qb.us-east-1.elasticbeanstalk.com/orders', {
        headers,
        method: 'POST',
        body: form
      }).then(data => data.json())
      .then(data => {
        this.setState({posting: false, order: data});
      })
  }
  setQuantity(count) {
    this.setState({quantity: count});
    console.log(this)
  }
  toggleInput() {
    this.setState({quantity: 6});

  }
  onBlur() {
    let val = parseInt(this.quantity.value, 10);
    val = isNaN(val) ? 6 : val;
    this.setQuantity(val)
  }

  render() {
    return (
      <div className="List">
        <Header />
        <div className="container">
          <div className=" content mt-3">
            <h2 className="mb-3">Place Order</h2>
            <hr />
            <form onSubmit={this.placeOrder.bind(this)} className={{hidden: this.state.order}}>
              <div className="form-group row">
                <label htmlFor="by" className="col-sm-2 col-form-label">By</label>
                <div className="col-sm-10">
                <input type="text" disabled className="form-control form-control-brlo" id="by" maxLength="10" placeholder="By" value={this.state.name} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="label" className="col-sm-2 col-form-label">Label</label>
                <div className="col-sm-10">
                  <input ref={(label) => { this.label = label; }} name="label" type="text" className="form-control form-control-brlo" id="label" maxLength="10" placeholder="Text on the Label of your Beer" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="background" className="col-sm-2 col-form-label">Background</label>
                <div className="col-sm-10">
                  <input ref={(background) => { this.background = background; }} name="background" type="file" className="form-control form-control-brlo" id="background" placeholder="Your image as the Label Background" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="deliveryLocation" className="col-sm-2 col-form-label">Delivery Location</label>
                <div className="col-sm-10">
                  <input ref={(deliveryLocation) => { this.deliveryLocation = deliveryLocation; }} name="deliveryLocation" type="text" className="form-control form-control-brlo" id="deliveryLocation" placeholder="Where do you want the order to be delivered?" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="quantity" className="col-sm-2 col-form-label">Quantity</label>
                <div className="col-sm-10">
                  <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                      <button type="button" onClick={this.setQuantity.bind(this, 1)} className={`btn btn-outline-brlo ${this.state.quantity === 1 ? 'btn-brlo': '' }`}>1</button>
                      <button type="button" onClick={this.setQuantity.bind(this, 3)} className={`btn btn-outline-brlo ${this.state.quantity === 3 ? 'btn-brlo': '' }`}>3</button>
                      <button type="button" onClick={this.setQuantity.bind(this, 5)} className={`btn btn-outline-brlo ${this.state.quantity === 5 ? 'btn-brlo': '' }`}>5</button>
                      <button type="button" onClick={this.toggleInput.bind(this)} className={`btn btn-outline-brlo ${this.state.quantity > 5 ? 'btn-brlo': '' }`}>...more</button>
                    </div>
                    <div className={`input-group ${this.state.quantity > 5 ? '': 'hidden' }`}>
                      <span className="input-group-addon" id="extra">24x</span>
                      <input ref={(quantity) => { this.quantity = quantity; }} onBlur={this.onBlur.bind(this)} name="quantity" type="text" className="form-control form-control-brlo" min="5" max="50" placeholder="Number of Crates" aria-label="Number of Crates" aria-describedby="extra" />
                    </div>
                  </div>
                  Crates: <strong className="text-success"><u>{this.state.quantity}</u></strong>; Beer Bootles: <strong className="text-success"><u>{parseInt(this.state.quantity, 10)*24}</u></strong>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-2">&nbsp;</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" /> I agree to the <a className="link-brlo" href="/terms-and-conditions">Terms of Order Fulfillment</a>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-2">&nbsp;</div>
                <div className="col-sm-10">
                  {
                    this.posting
                    ? <button type="button" className="btn btn-outline-brlo"><i className="fa fa-spinner spinner" aria-hidden="true"></i></button>
                    : <button type="submit" className="btn btn-brlo" disabled={this.state.order} >Create my awesome Bear Order</button>
                  }
                  { this.state.order &&
                    <StripeCheckout
                      name={this.state.order.by}
                      description={this.state.order.delivery_location}
                      amount={fromEuroToCent(parseInt(this.state.order.payment_total, 10))}
                      token={onToken(parseInt(this.state.order.payment_total, 10), this.state.order.delivery_location)}
                      currency={this.state.order.payment_currency}
                      stripeKey={STRIPE_PUBLISHABLE}
                    />
                  }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;

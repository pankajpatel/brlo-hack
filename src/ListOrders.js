import React, { Component } from 'react';
import Header from './Header';
import './ListOrders.css';
import fetch from 'isomorphic-fetch';
import moment from 'moment';

const status = {
  1: 'placed',
  2: 'printed',
  3: 'onBottle',
  4: 'shipped',
  5: 'delivered',
}

const paymentIconMap = {
  mastercard: 'fa fa-cc-mastercard',
  visa: 'fa fa-cc-visa',
  stripe: 'fa fa-cc-stripe',
  paypal: 'fa fa-paypal',
  amex: 'fa fa-cc-amex',
}


class ListOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      orders: []
    }
    fetch('http://brlo-env.zmifd4r2qb.us-east-1.elasticbeanstalk.com/orders')
    // fetch('https://dumy-data-57xuu006izno.runkit.sh/')
    // fetch('http://www.mocky.io/v2/59cfa3cd0f0000740093dc54')
    .then((data) => data.json())
    .then((orders) => {
      console.log(orders)
      orders = orders.map(order => {
        order.status = isNaN(parseInt(order.status, 10)) ? 1 : order.status
        return order;
      })
      this.setState({orders, loading: false});
    })
  }

  render() {
    return (
      <div className="List ">
        <Header />
        <div className="container-fluid">
          <div className=" content mt-3">
            <h2 className="mb-3">Orders</h2>
            {
              this.state.loading 
              ? <i className="fa fa-spinner spinner" aria-hidden="true"></i>
              : <table className="table table-responsive table-hover table-outline mb-0">
                <thead className="thead-default">
                  <tr>
                    <th>#</th>
                    <th>By</th>
                    <th>Delivery Location</th>
                    <th>Quantity</th>
                    <th stylw={{width: '25%'}}>Status/Progress</th>
                    <th>Payment</th>
                    <th>Background</th>
                    <th className="text-center"><i className="fa fa-cogs icon-settings"></i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orders.map(order => 
                    <tr key={order.id}>
                      <td>#{order.id}</td>
                      <td>{order.by}</td>
                      <td><span>{order.deliveryLocation}</span></td>
                      <td><kbd>{order.count}{' '}<i className="fa fa-beer" /></kbd></td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>{status[order.status]}</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">{moment(order.date).format('DD MMM YYYY')}</small>
                          </div>
                        </div>
                        <div className="progress progress-xs">
                          <div className="progress-bar bg-brlo" role="progressbar" style={{width: `${order.status*20}%`}} aria-valuenow={order.status*20} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                      <td className="">
                        <i className={`${paymentIconMap[order.payment.method]} color-brlo`} style={{fontSize:'24px'}}></i>{' '}
                        <span>{order.payment.total}</span>{' '}
                        <span>{order.payment.currency}</span>
                      </td>
                      <td>
                        <img src={order.image} className="label-background" alt="Label Background" />
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-link text-muted"><i className="fa fa-cogs icon-settings"></i></button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ListOrders;

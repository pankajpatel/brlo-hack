import React, { Component } from 'react';
import logo from './brlo_logo.png';
import user from './user.png';
import Header from './Header';
import './ListOrders.css';

const status = {
  1: 'placed',
  2: 'printed',
  3: 'onBottle',
  4: 'shipped',
  5: 'delivered',
}

const orders = [
  {
    id: 12345,
    by: 'Lorem Ipsum',
    date: new Date(),
    deliveryLocation: 'Mitte',
    payment: {
      total: 500,
      currency: 'EUR',
      status: 'paid',
      method: 'cc-mastercard'
    },
    count: 100,
    status: 1,
  },
  {
    id: 12335,
    by: 'Lorem Ipsum',
    date: new Date(),
    deliveryLocation: 'Mitte',
    payment: {
      total: 500,
      currency: 'EUR',
      status: 'paid',
      method: 'cc-visa'
    },
    count: 100,
    status: 2,
  },
  {
    id: 12385,
    by: 'Lorem Ipsum',
    date: new Date(),
    deliveryLocation: 'Mitte',
    payment: {
      total: 500,
      currency: 'EUR',
      status: 'paid',
      method: 'cc-stripe'
    },
    count: 100,
    status: 3,
  },
  {
    id: 12341,
    by: 'Lorem Ipsum',
    date: new Date(),
    deliveryLocation: 'Mitte',
    payment: {
      total: 500,
      currency: 'EUR',
      status: 'paid',
      method: 'paypal'
    },
    count: 100,
    status: 4,
  },
  {
    id: 12000,
    by: 'Lorem Ipsum',
    date: new Date(),
    deliveryLocation: 'Mitte',
    payment: {
      total: 500,
      currency: 'EUR',
      status: 'paid',
      method: 'cc-amex'
    },
    count: 100,
    status: 5,
  },
]

class ListOrders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="List ">
        <Header />
        <div className="container">
          <div className=" content">
            <h2>Orders</h2>
            <table className="table table-responsive table-hover table-outline mb-0">
            <thead className="thead-default">
              <tr>
                <th>Order#</th>
                <th>By</th>
                <th className="text-center">Delivery Location</th>
                <th>Progress</th>
                <th className="text-center">Payment Method</th>
                <th>Activity</th>
                <th className="text-center">Actions <i className="fa fa-cogs icon-settings"></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => 
                <tr>
                    <td>#{order.id}</td>
                    <td>{order.by.name}</td>
                    <td className="text-center">
                        <span>{order.deliveryLocation}</span>
                    </td>
                    <td>
                        <div className="clearfix">
                            <div className="float-left">
                                <strong>{status[order.status]}</strong>
                            </div>
                            <div className="float-right">
                                <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                            </div>
                        </div>
                        <div className="progress progress-xs">
                            <div className="progress-bar bg-brlo" role="progressbar" style={{width: `${order.status*20}%`}} aria-valuenow={order.status*20} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </td>
                    <td className="text-center">
                        <i className={`fa fa-${order.payment.method} color-brlo`} style={{fontSize:'24px'}}></i>
                    </td>
                    <td>
                        <strong>{order.date.toDateString()}</strong>
                    </td>
                    <td className="text-center">
                        <button type="button" className="btn btn-link text-muted"><i className="fa fa-cogs icon-settings"></i>
                        </button>
                    </td>
                </tr>
              )}
                
            </tbody>
        </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ListOrders;

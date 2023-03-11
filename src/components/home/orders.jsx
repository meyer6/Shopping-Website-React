import React, { Component } from 'react';
import { Outlet, Link, Navigate } from "react-router-dom";
import NavBar from '../smallComponents/navBar'

class Orders extends Component {
    state = { 
    }
    render() { 
        if (this.props.redirect) {
            return <Navigate to={this.props.redirect} />
        }
        return ( 
            <div>
                <NavBar 
                    key={3}
                    updateSearch={this.props.updateSearch}
                    onFormSubmit={this.props.onFormSubmit}
                />
                <h1>Orders</h1>
            </div>
        );
    }
}
export default Orders;
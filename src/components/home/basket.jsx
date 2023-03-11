import React, { Component } from 'react';
import { Outlet, Link, Navigate } from "react-router-dom";
import NavBar from '../smallComponents/navBar'

class Basket extends Component {
    state = { 
    }
    render() { 
        if (this.props.redirect) {
            return <Navigate to={this.props.redirect} />
        }
        return ( 
            <div>
                <NavBar 
                    key={0}
                    updateSearch={this.props.updateSearch}
                    onFormSubmit={this.props.onFormSubmit}
                />
                <h1>Basket</h1>
            </div>
        );
    }
}
export default Basket;
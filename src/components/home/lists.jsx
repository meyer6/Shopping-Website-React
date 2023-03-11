import React, { Component } from 'react';
import { Outlet, Link, Navigate } from "react-router-dom";
import NavBar from '../smallComponents/navBar'

class Lists extends Component {
    state = { 
    }
    render() { 
        if (this.props.redirect) {
            return <Navigate to={this.props.redirect} />
        }
        return ( 
            <div>
                <NavBar 
                    key={2}
                    updateSearch={this.props.updateSearch}
                    onFormSubmit={this.props.onFormSubmit}
                />
                <h1>Lists</h1>
            </div>
        );
    }
}
export default Lists;
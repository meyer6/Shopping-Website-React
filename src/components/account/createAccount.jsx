import React, { Component } from 'react';
import { Outlet, Link, Navigate } from "react-router-dom";
import logo from '../../images/logo.png';

class CreateAccount extends Component {
    state = { 
        email: '',
        password: '',
        redirect: null
    };
    updateEmail(evt) {
        this.setState({email: evt.target.value});
    }
    updatePassword(evt) {
        this.setState({password: evt.target.value});
    }
    onFormSubmit = e => {
        this.setState({redirect: '/home'});
    }
    render() { 
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }
        return (
            <div align='center' style={{height:'100vh',background: 'rgb(175,255,249)',
                background: 'radial-gradient(circle, rgba(175,255,249,1) 30%, rgba(90,166,255,1) 100%)'}}>
                <div style={{paddingTop: '105px'}}>
                    <div style={{background: 'rgb(255,255,255)', width: '30%', border:'1.5px solid black', borderRadius:'10px'}}>
                        <img
                            style={{width: '50%', position: 'relative',marginTop:'20px',marginBottom:'15px'}}
                            src={logo}
                        />
                        <form onSubmit={this.onFormSubmit} style={{margin: '0px'}}>
                            <input 
                                placeholder='Email'
                                onChange={evt => this.updateEmail(evt)}
                                style={{
                                    borderRadius:'5px', 
                                    borderWidth:'1.5px',
                                    borderColor: 'rgb(115,115,125)',
                                    padding: '15px',
                                    outline: 'none',
                                    marginRight: '4px',
                                    height: '40px',
                                    width: '90%',
                                    marginBottom: '15px',
                                }}
                            >
                            </input>
                            <br></br>
                            <input 
                                type='password' 
                                placeholder='Password'
                                style={{
                                    borderRadius:'5px', 
                                    borderWidth:'1.5px',
                                    borderColor: 'rgb(115,115,125)',
                                    padding: '15px',
                                    outline: 'none',
                                    marginRight: '4px',
                                    height: '40px',
                                    width: '90%',
                                    marginBottom: '15px', 
                                }}
                                onChange={evt => this.updatePassword(evt)}
                            >
                            </input>
                            <br></br>
                            <button
                                style={{
                                    borderRadius:'25px', 
                                    borderWidth:'0px',
                                    height: '50px',
                                    width: '90%',
                                    background: 'rgb(64, 152, 255)',
                                    fontSize: '20px',
                                    color: 'white',
                                    marginBottom: '15px', 
                                }}
                                type="submit"
                            >
                                <b>Create Account</b>
                            </button>
                        </form>
                        <input type='checkbox' style={{position:'relative', top:'1px', width:'25px', position: 'relative', top: '2px' }}></input>
                        <small>Stay signed in</small>
                        <br></br>
                        <br></br>
                        <div style={{height: '0.5px', width: '90%', backgroundColor: 'grey', textAlign: 'center', marginBottom:'9px'}}>
                            <span style={{backgroundColor: 'white', position: 'relative', top: '-14px' }}>
                                <small>⠀Already have an account?⠀</small>
                            </span>
                        </div>
                        <div style={{marginBottom:'8px'}}>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CreateAccount;

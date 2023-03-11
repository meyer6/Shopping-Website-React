import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import CreateAccount from './components/account/createAccount'
import Login from './components/account/login'
import Home from './components/home/home'
import YourAccount from './components/home/yourAccount'
import Basket from './components/home/basket'
import Lists from './components/home/lists'
import Orders from './components/home/orders'
import Search from './components/home/search'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

class App extends Component {
  state = { 
    search: '',
    redirect: null
  };
  
  updateSearch = (evt) =>{
    this.setState({search: evt.target.value});
    localStorage.setItem('search', evt.target.value);
  }
  onFormSubmit = e => {
    this.setState({redirect: '/search'});
  }
  render (){
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<CreateAccount />} />
              <Route path="createAccount" element={<CreateAccount />} />
              <Route path="login" element={<Login />} />
              <Route path="home" element={<Home                     
                key={0}
                updateSearch={this.updateSearch}
                onFormSubmit={this.onFormSubmit}
                redirect={this.state.redirect}
              />} />
              <Route path="yourAccount" element={<YourAccount                     
                key={0}
                updateSearch={this.updateSearch}
                onFormSubmit={this.onFormSubmit}
                redirect={this.state.redirect}
              />} />
              <Route path="lists" element={<Lists                     
                key={0}
                updateSearch={this.updateSearch}
                onFormSubmit={this.onFormSubmit}
                redirect={this.state.redirect}
              />} />
              <Route path="orders" element={<Orders                     
                key={0}
                updateSearch={this.updateSearch}
                onFormSubmit={this.onFormSubmit}
                redirect={this.state.redirect}
              />} />
              <Route path="basket" element={<Basket                     
                key={0}
                updateSearch={this.updateSearch}
                onFormSubmit={this.onFormSubmit}
                redirect={this.state.redirect}
              />} />
              <Route path="search" element={<Search                     
                key={0}
                updateSearch={this.updateSearch}
                onFormSubmit={this.onFormSubmit}
                redirect={this.state.redirect}
              />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

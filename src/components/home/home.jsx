import React, { Component } from 'react';
import { Outlet, Link, Navigate } from "react-router-dom";
import NavBar from '../smallComponents/navBar'
import ItemsCarousel from '../smallComponents/carousel'
import HomeItemCard from '../smallComponents/homeItemCard'
import Footer from '../smallComponents/footer'
import styles from './styles/homeStyles.module.css';

class Home extends Component {
    state = { 
        search: '',
        dealsData: [[
            ["https://m.media-amazon.com/images/I/41AU8KnIu4L._SY500__AC_SY400_.jpg","12","99","30","00"],
            ["https://m.media-amazon.com/images/I/61f-3MvlqXL._SY500__AC_SY400_.jpg","1","49","3","01"],
            ["https://m.media-amazon.com/images/I/31ziREbaoML._SY500__AC_SY400_.jpg","1","99","2","22"],
            ["https://m.media-amazon.com/images/I/51-9+Vu+NRL._SY500__AC_SY400_.jpg","11","49","15","33"],
            ["https://m.media-amazon.com/images/I/31Q3kQ9oLKL._SY500__AC_SY400_.jpg","22","99","29","99"],
            ["https://m.media-amazon.com/images/I/41STxAdbQhL._SY500__AC_SY400_.jpg","23","49","50","99"],
            ["https://m.media-amazon.com/images/I/91W4UpurQgL._AC_SY400_.png","1","49","3","01"]
        ],[
            ["https://m.media-amazon.com/images/I/91W4UpurQgL._AC_SY400_.png","1","49","3","01"],
            ["https://m.media-amazon.com/images/I/51h3e+CEfXL._AC_SY400_.png","1","99","2","22"],
            ["https://m.media-amazon.com/images/I/31Q3kQ9oLKL._SY500__AC_SY400_.jpg","22","99","29","99"],
            ["https://m.media-amazon.com/images/I/41g6rrmGnRL._AC_SY400_.jpg","11","49","15","33"],
            ["https://m.media-amazon.com/images/I/31R3YjmeovL._AC_SY400_.jpg","22","99","29","99"],
            ["https://m.media-amazon.com/images/I/21wJc3mrFEL._SY500__AC_SY400_.jpg","23","49","50","99"]
        ]],
        names: ["Deals for Today", "Lightning deals"]
    };
    render() { 
        if (this.props.redirect) {
            return <Navigate to={this.props.redirect} />
        }
        return (
            <div className={styles.pageBackground}>
                <NavBar 
                    updateSearch={this.props.updateSearch}
                    onFormSubmit={this.props.onFormSubmit}
                />
                <ItemsCarousel />
                {this.state.names.map(name =>
                    <HomeItemCard
                        key = {this.state.names.indexOf(name)+1}
                        name = {name}
                        data = {this.state.dealsData[this.state.names.indexOf(name)]}
                    />
                )}
                <br></br>
                <Footer />
            </div>
        );
    }
}
 
export default Home;

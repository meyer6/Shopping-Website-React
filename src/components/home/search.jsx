import React, { Component } from 'react';
import { Outlet, Link, Navigate } from "react-router-dom";
import NavBar from '../smallComponents/navBar'
import ItemCard from '../smallComponents/card'
import { Grid, Row, Col } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styles from './styles/searchStyles.module.css';
import Pagination from 'react-bootstrap/Pagination';
import Footer from '../smallComponents/footer'

class Search extends Component {
    state = { 
    }
    render() { 
        return ( 
            <div className={styles.pageBackground}>
                <NavBar 
                    key={"Nav"}
                    updateSearch={this.props.updateSearch}
                    onFormSubmit={this.props.onFormSubmit}
                />
                <p style={{float:'left', marginLeft: '20px', marginBottom: '0px', paddingTop: '5.5px'}}>Over 7000 results for <b>"{localStorage.getItem('search')}"</b></p>
                <DropdownButton
                    title="Sort By:"
                    id="dropdown-menu-align-end dropdown-variants-light"
                    variant='light'
                    size="sm"
                    className={styles.filters}
                >
                    <Dropdown.Item href="#/action-1">Featured</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Price: Low to High</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Price: High to Low</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Reviews</Dropdown.Item>
                </DropdownButton>
                <div className={styles.remove2}>
                    <DropdownButton
                        title="Filters"
                        id="dropdown-menu-align-end dropdown-variants-light"
                        variant='light'
                        size="sm"
                        className={styles.filters}
                    >
                        <Dropdown.Item href="#/action-1"><Filters /></Dropdown.Item>
                    </DropdownButton>
                </div>
                <p style={{height:'28px'}}></p>
                <hr style={{borderTop: '1px solid #000000',padding: '0px', margin: '0px', marginBottom: '30px'}}></hr>
                <div className="container" style={{margin: '5px'}}>
                    <div className="row">
                        <div className={`col-lg-6 col-md-6 col-sm-12 col-xs-12 ${styles.remove1}`} style={{width: '17vw'}}>
                            <Filters />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <Grid className={styles.grid}>
                                <Row><Col><b style={{fontSize:'22px'}}>Results</b></Col></Row>
                                <Row>
                                {[...Array(48).keys()].map(i =>
                                    <Col xs={12} sm={12} md={8} lg={8} xl={6} xxl={6}
                                    style={{padding: '0px'}}><ItemCard key={i}/></Col>
                                )}
                                </Row>
                                <Row>
                                    <Pagination className={styles.pagination}>
                                        <Pagination.Prev />
                                        <Pagination.Item>{3}</Pagination.Item>
                                        <Pagination.Item>{4}</Pagination.Item>
                                        <Pagination.Item>{5}</Pagination.Item>
                                        <Pagination.Ellipsis />
                                        <Pagination.Item>{7}</Pagination.Item>
                                        <Pagination.Next />
                                    </Pagination>
                                </Row>
                            </ Grid>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
function Filters() {
    return (
        <div>
            <b>Price</b><br></br>
            <div>
                <input placeholder="Min" style={{width:'52px'}}></input>
                <input placeholder="Max" style={{width:'52px'}}></input>
                <button style={{width:'34px', backgroundColor:'white',color:'grey',border:'1px solid grey',borderRadius:'3px',height: '30px'}}>Go</button><br></br><br></br>
            </div>
            <b>Customer Reviews</b><br></br>
            <div>
                <span className="fa fa-star" style={{color: 'orange'}}></span><span className="fa fa-star" style={{color: 'orange'}}></span><span className="fa fa-star" style={{color: 'orange'}}></span><span className="fa fa-star" style={{color: 'orange'}}></span><span className="fa fa-star" style={{color: 'black'}}></span>
                <small> & Up</small>
                <br></br>
                <span className="fa fa-star" style={{color: 'orange'}}></span><span className="fa fa-star" style={{color: 'orange'}}></span><span className="fa fa-star" style={{color: 'orange'}}></span><span className="fa fa-star" style={{color: 'black'}}></span><span className="fa fa-star" style={{color: 'black'}}></span>
                <small> & Up</small>
                <br></br>
                <span className="fa fa-star" style={{color: 'orange'}}></span><span className="fa fa-star" style={{color: 'orange'}}></span><span className="fa fa-star" style={{color: 'black'}}></span><span className="fa fa-star" style={{color: 'black'}}></span><span className="fa fa-star" style={{color: 'black'}}></span>
                <small> & Up</small>
                <br></br>
                <span className="fa fa-star" style={{color: 'orange'}}></span><span className="fa fa-star" style={{color: 'black'}}></span><span className="fa fa-star" style={{color: 'balck'}}></span><span className="fa fa-star" style={{color: 'black'}}></span><span className="fa fa-star" style={{color: 'black'}}></span>
                <small> & Up</small>
            </div><br></br>
            <b>Brand</b><br></br>
            <input type='checkbox'></input><small style={{position:'relative', top:'-1.5px'}}> Bic</small><br></br>
            <input type='checkbox'></input><small style={{position:'relative', top:'-1.5px'}}> Rotring</small><br></br>
            <input type='checkbox'></input><small style={{position:'relative', top:'-1.5px'}}> Parker</small><br></br>
        </div>
    );
}
export default Search;
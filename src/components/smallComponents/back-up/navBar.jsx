import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './styles/navBarStyles.module.css';

class NavBar extends Component{
  render(){
    return (
      <div>
        <Navbar className={styles.navBar1}>
          <Container fluid className={styles.navBarContent}>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Brand href="#" style={{height: '130%'}}>
              <img style={{height: '100%'}}
                src="https://download.logo.wine/logo/O_Shopping/O_Shopping-Logo.wine.png"
              />
            </Navbar.Brand>
            <Nav.Link href="/home" align='left'><div className={`${styles.remove1} ${styles.headerText}`}>Home</div></Nav.Link>
            <div align='center' className={styles.searchContainer}>
              <form onSubmit={this.props.onFormSubmit}>
                <input 
                    type="search" 
                    placeholder=" Search"
                    className={styles.searchInput}
                    onChange={evt => this.props.updateSearch(evt)}
                    value={localStorage.getItem('search')}
                />
                <button 
                    type="submit"
                    className={styles.searchBox}
                >
                    <i className="fa fa-search" style={{fontSize:"16px"}}></i>
                </button>
              </form>
            </div>
            <Nav>
              <Nav.Link href="/lists"><div className={`${styles.remove1} ${styles.headerText}`}>Lists</div></Nav.Link>
              <Nav.Link href="/orders"><div className={`${styles.remove1} ${styles.headerText}`}>Orders</div></Nav.Link>
              
              <NavDropdown title="Account" id="navbarScrollingDropdown" className={styles.headerText}>
                  <NavDropdown.Item href="/yourAccount">Your Account</NavDropdown.Item>
                  <NavDropdown.Item href="/login">Sign Out</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/basket"><div className={`${styles.remove1} ${styles.headerText}`}>Basket</div></Nav.Link>
              
              <NavDropdown className={`${styles.remove2} ${styles.headerText}`} title="Other" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/home" style={{marginRight:'5px'}}>Home</NavDropdown.Item>
                  <NavDropdown.Item href="/lists">Lists</NavDropdown.Item>
                  <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                  <NavDropdown.Item href="/basket">Basket</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
        <Navbar className={styles.navBar2}>
          <Container fluid className={styles.navBarContent}>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Nav style={{margin:'auto'}}>
              <Nav.Link href="/home" className={`${styles.itemsTextSize} text-muted`}><div className={`${styles.itemsTextSize} ${styles.remove1}`}>Electronics⠀|</div></Nav.Link>
              <Nav.Link href="/home" className={`${styles.itemsTextSize} text-muted`}><div className={`${styles.itemsTextSize} ${styles.remove1}`}>Fashion⠀|</div></Nav.Link>
              <Nav.Link href="/home" className={`${styles.itemsTextSize} text-muted`}><div className={`${styles.itemsTextSize} ${styles.remove1}`}>Home & Garden⠀|</div></Nav.Link>
              <Nav.Link href="/home" className={`${styles.itemsTextSize} text-muted`}>Sports & Leisure⠀|</Nav.Link>
              <Nav.Link href="/home" className={`${styles.itemsTextSize} text-muted`}>Health & Beauty⠀|</Nav.Link>
              <Nav.Link href="/home" className={`${styles.itemsTextSize} text-muted`}>Toys⠀|</Nav.Link>
              <Nav.Link href="/home" className={`${styles.itemsTextSize} text-muted`}>Motors⠀|</Nav.Link>
              <Nav.Link href="/home" className={`${styles.itemsTextSize} text-muted`}>Home Entertainment</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <hr style={{padding: '0px', marginTop: '0px', marginBottom:'0.7vw'}}></hr>
      </div>
    );
  }
}
{/* <Form className="d-flex">
<Form.Control
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
/>
<Button variant="outline-success">Search</Button>
</Form> */}
export default NavBar;
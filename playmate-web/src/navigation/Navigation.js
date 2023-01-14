import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './../logo.svg';

const Navigation = () => {
  return (
    <>
    <Navbar collapseOnSelect fixed='top' expand='sm' bg='black' variant='dark'>
        <Container>
        <Navbar.Brand href='/' >
          <img 
          src={logo}
          height='40'
          width='40'/>
          PlayMate</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav >
                    <Nav.Link style={styles.navLink} href='/' >Home</Nav.Link>
                    <Nav.Link style={styles.navLink} href='/products'>Products</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
};

const styles ={
  navLink: {
    fontSize: 18,
    color: 'white',
    textAlign: 'left',
    paddingLeft: 10,
    marginLeft: 10,
    flexWrap: 'wrap'
},
}

export default Navigation;
import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
class Header extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="#home" style={{display:"flex", alignItems:"center", fontSize:"30px"}}>
          <img src="https://pngimage.net/wp-content/uploads/2018/06/samurai-png-.png" width="60" height="60" className="d-inline-block align-top" alt="Codes Of Warriors"/>
          Codes Of Warriors
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav style={{fontSize:"20px"}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#main">Main</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;

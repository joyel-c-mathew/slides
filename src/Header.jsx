import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>

    <div>

    <Navbar collapseOnSelect expand="lg" className="" style={{borderRadius:'0.5rem',backgroundColor:'#995a26'}}>
      <Container>
        <Navbar.Brand  style={{fontWeight:'bold',color:'whitesmoke'}} href="#home">Mi India</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  style={{fontWeight:'bold',color:'whitesmoke'}}  href="#features"> Mi Features</Nav.Link>
            <Nav.Link  style={{fontWeight:'bold',color:'whitesmoke'}}  href="#pricing"> our Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">go with Mi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item  style={{fontWeight:'bold',color:'whitesmoke'}}  href="#action/3.3">Specail offers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link   style={{fontWeight:'bold',color:'whitesmoke'}}  href="#deets">More details</Nav.Link>
            <Nav.Link   style={{fontWeight:'bold',color:'whitesmoke'}} eventKey={2} href="#memes">
              Premium members
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
        
    
    </div>
    
    </>
  )
}

export default Header
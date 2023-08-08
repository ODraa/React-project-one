import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './canvasNavbar.css';

function Canvas_Navbar() {
  const targetExpand = 'xl'; // Espandi solo la quarta navbar

  return (
    <Navbar expand={targetExpand}>
      <Container fluid>
        <Navbar.Brand href="#"><b>L O G O</b></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${targetExpand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${targetExpand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${targetExpand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="custom-title" id={`offcanvasNavbarLabel-expand-${targetExpand}`}>
              L O G O
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='offcanvas-nav'>
              <Nav.Link href="#action1" className="nav-item">HOME</Nav.Link>
              <Nav.Link href="#action2" className="nav-item">FEATURES</Nav.Link>
              <NavDropdown
                title="DROPDOWN"
                id={`offcanvasNavbarDropdown-expand-${targetExpand}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              <button type="button" className="btn btn-primary btn-lg custom-button">ISCRIVITI</button>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Canvas_Navbar;

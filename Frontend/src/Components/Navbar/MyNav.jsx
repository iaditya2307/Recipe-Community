import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function MyNav() {
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ backgroundColor: "#ffee32" }}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#">Reciepe</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Reciepe
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-center flex-grow-1 pe-3 align-content-center"
                  style={{}}
                >
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/blogs">Blogs</Nav.Link>
                  <Nav.Link href="/recipe">Recipe</Nav.Link>
                  <Nav.Link href="/contactus">Contact Us</Nav.Link>
                  {/* <NavDropdown
                    title="User"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Manage Favourite
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Sign In</NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <button
                  style={{ backgroundColor: "#ffd449", color: "black" }}
                  className="d-flex btn btn-success"
                >
                  <Nav.Link href="/login">Log In</Nav.Link>
                </button>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search Reciepe"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MyNav;

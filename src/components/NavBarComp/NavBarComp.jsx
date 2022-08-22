import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
const NavBarComp = ({ bg }) => {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          variant="dark"
          style={{
            background: `${bg}`,

            zIndex: "100",
          }}
        >
          <Container>
            <Navbar.Brand href="/">
              {" "}
              <div className="d-flex align-items-center">
                <img src={logo1} alt="" style={{ height: "6vh" }} />
                <img
                  src={logo2}
                  alt=""
                  style={{ height: "4vh", filter: "invert(1)" }}
                />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className="d-flex align-items-center">
                    <img src={logo1} alt="" style={{ height: "6vh" }} />
                    <img src={logo2} alt="" style={{ height: "4vh" }} />
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 align-items-center pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/aboutus">About Us</Nav.Link>
                  <Nav.Link href="/promotion">Promotions</Nav.Link>
                  <Nav.Link href="/how-to-play">How to Play</Nav.Link>
                  <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>

                  <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavBarComp;

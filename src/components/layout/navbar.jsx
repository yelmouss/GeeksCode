import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AiFillBell } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";


function Header({ dark, updateDark }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://yelmouss.com/img/Geek.png"
            width="30"
            height="30"
            className="d-inline-block align-top bg-light rounded-circle p-1"
          />{" "}
          GeeksCode
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <NavDropdown title="Teach" id="collasible-nav-dropdown">
              <Link to="/" className="dropdown-item">
                Checkpoints
              </Link>
              <Link to="/" className="dropdown-item">
                One To One
              </Link>
              <Link to="/" className="dropdown-item">
                Calendar
              </Link>
            </NavDropdown>
            <NavDropdown title="Students" id="collasible-nav-dropdown">
              <Link to="/" className="dropdown-item">
                Students
              </Link>
              <Link to="/" className="dropdown-item">
                Attendance
              </Link>
            </NavDropdown>{" "}
            <NavDropdown title="Explore" id="collasible-nav-dropdown">
              <Link to="/" className="dropdown-item">
                Libray
              </Link>
              <Link to="/" className="dropdown-item">
                Store
              </Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to="/" className="nav-link">
              <BiMessageDetail className="fs-4" />
            </Link>
            <Link to="/" className="nav-link">
              {" "}
              <AiFillBell className="fs-4" />
            </Link>

            <Link to="/" className="nav-link">
              {dark ? (
                <BsFillSunFill
                  onClick={() =>
                    updateDark(!dark, localStorage.setItem("dark", !dark))
                  }
                />
              ) : (
                <BsMoonStarsFill
                  onClick={() =>
                    updateDark(!dark, localStorage.setItem("dark", !dark))
                  }
                />
              )}
            </Link>
            <Navbar.Brand href="#home">
              <img
                alt="yass"
                src="https://yelmouss.com/img/yass.png"
                width="40"
                height="40"
                className="d-inline-block align-top rounded bg-light"
              />
            </Navbar.Brand>

            <NavDropdown title="UserName" id="collasible-nav-dropdown">
              <Link to="/" className="dropdown-item">
                Libray
              </Link>
              <Link to="/" className="dropdown-item">
                Store
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

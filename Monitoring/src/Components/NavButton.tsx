import { Navbar, Nav, Container } from "react-bootstrap";
import "../Design/Navbutton.css";
import seeds from "../assets/seedling.svg";

const NavButton = () => {
  return (
    <div className="font">
      <Navbar expand="lg" bg="mt-3 p-3 rounded shadow bg-white" variant="light">
        <Container>
          {/* Left Side - Dropdown */}
          <Nav>
            <img src={seeds} alt="seeds" width="40" />
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Homepage</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavButton;

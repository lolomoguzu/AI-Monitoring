import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { List } from "lucide-react";
import "../Design/Navbutton.css";
import seeds from "../assets/seedling.svg";

const NavButton = () => {
  return (
    <div className="navigation">
      <Navbar expand="lg" className="bg-light shadow-sm">
        <Container>
          {/* Left Side - Dropdown */}
          <Nav className="me-auto">
            <img src={seeds} alt="seeds" className="seeds" />
            <NavDropdown
              title={<List size={24} />}
              className="border-0 bg-transparent"
            >
              <NavDropdown.Item href="/Homepage">Homepage</NavDropdown.Item>
              <NavDropdown.Item href="/Dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="/About">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavButton;

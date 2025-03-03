import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { List } from "lucide-react";
import "..Navbutton.css";

const NavButton = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-light shadow-sm">
        <Container>
          {/* Left Side - Dropdown */}
          <Nav className="me-auto">
            <NavDropdown
              title={<List size={24} />}
              id="basic-nav-dropdown"
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

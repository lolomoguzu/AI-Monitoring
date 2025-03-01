import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import { List, Search, Bell } from "lucide-react";

const NavButton = () => {
  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        {/* Left Side - Dropdown */}
        <Nav className="me-auto">
          <NavDropdown
            title={<List size={24} />}
            id="basic-nav-dropdown"
            className="border-0 bg-transparent"
          >
            <NavDropdown.Item href="#">Homepage</NavDropdown.Item>
            <NavDropdown.Item href="#">Portfolio</NavDropdown.Item>
            <NavDropdown.Item href="#">About</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavButton;

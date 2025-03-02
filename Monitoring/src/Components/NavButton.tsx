import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { List} from "lucide-react";
import "../Design/NavButton.css";

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
            <NavDropdown.Item href="/Homepage">Homepage</NavDropdown.Item>
            <NavDropdown.Item href="/About">About</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavButton;

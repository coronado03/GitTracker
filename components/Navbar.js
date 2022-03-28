import Link from 'next/link'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { motion } from "framer-motion"



export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" className="nav">
      <Container>
        <Navbar.Brand href="#home" className="white">
            GitTracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="white">Rankings</Nav.Link>
            <Nav.Link href="#pricing" className="white">Repository</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
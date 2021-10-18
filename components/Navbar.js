import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function Navigation() {

    return (
        <>
            <style tpye="text/css">
                {`
                .color-nav {
                    background-color: #1B1F23;
                }
                .text-color {
                    color: white;
                }`
                }
            </style>

            <Navbar className="color-nav" bg="dark" variant="dark" expand="lg">

            <Link href="/" passHref>
                <Navbar.Brand>GitTracker</Navbar.Brand>
            </Link> 
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

                <Link href="/rankings" passHref>
                    <Nav.Link> Rankings </Nav.Link>
                </Link>

                <Link href="/random" passHref>
                    <Nav.Link> Random User </Nav.Link>
                </Link>

                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

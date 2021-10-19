import Link from 'next/link'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { motion } from "framer-motion"


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
            <motion.div
                  whileHover={{ scale: 1.001 }}
                  whileTap={{ scale: 0.9 }}>
                    <Navbar.Brand>GitTracker</Navbar.Brand>
                </motion.div> 
            </Link> 
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>

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

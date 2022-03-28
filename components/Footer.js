import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function Footer() {

    return (
        <>
            <footer className="page-footer bg-dark text-light">
                                
            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <Link href="https://github.com/coronado03" passHref>
                <a href="https://github.com/coronado03"> Coronado03</a>
                </Link>
            </div>

            </footer>
        </>
    )
}

import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 


export default function Footer() {

    return (
        <>
            <footer class="page-footer bg-dark text-light">
                                
            <div class="footer-copyright text-center py-3">© 2021 Copyright:
                <Link href="/" passHref>
                <a href="https://github.com/coronado03"> Coronado03</a>
                </Link>
            </div>

            </footer>
        </>
    )
}

import React, { useState } from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios'
import { motion } from "framer-motion"
import Footer from '/components/Footer.js'
import Navigation from '/components/Navbar.js'

export default function Home() {
  const [username, setUsername] = useState('')



  return (
    <>
      <Navigation />
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" className="github-logo" alt="Github Logo" />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center" md={ 4 } md={{ offset:-1 }}> 
              <input onChange={event => setUsername(event.target.value)} type="text" className="form-control p-3" id="search-bar" placeholder="Enter Github Account Name"/>
          </Col>
        </Row>
      
        <Row className="mt-5 text-center">
          <Col> 

          <Link href={`/users/${username}`}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>                
            <button type="button" className="btn btn-lg btn-outline-dark fs-3">Search User</button>
            </motion.div>
          </Link>
          
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}

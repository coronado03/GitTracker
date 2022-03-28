import React, { useState, useEffect } from 'react'
import Typewritter from 'typewriter-effect' 
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios'
import Navigation from '/components/Navbar.js'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import Charts from '/components/users/charts.js'
import Footer from '/components/Footer.js'


export default function Users() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Navigation />

      <Container className="p-3"> 
      <Row className="text-center">
          <Col md={6}> 
          <div className="card text-white h-100 bg-dark pt-3 mb-3">
            <img className="mt-3 rounded-circle bg-light user-img card-img-top mx-auto d-block" src="https://cdn2.bulbagarden.net/upload/thumb/b/b1/151Mew.png/250px-151Mew.png" alt="Card image" />
            <div className="card-body mt-3">
              <h2 className="card-title my-2">Hello guys!</h2>
              <h5 className="card-text mt-3 text-secondary"> 
                <Typewritter 
                  onInit={(typewriter) => {
                    typewriter
                    .typeString('A full stack web dev!')
                    .start();
                  }}
                  /></h5>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                    <a className="btn btn-light btn-lg mt-3">See Profile</a>
                </motion.div>
            </div>
          </div>
          </Col>

          <Col md={6}>
          <Charts />
          </Col>

            
        </Row>            
      </Container>
      <Footer />
    </>
  )
}
import React, { useState, useEffect } from 'react'
import Typewritter from 'typewriter-effect' 
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios'
import Navigation from '/components/Navbar.js'
import { useRouter } from 'next/router'

export default function Users() {
  const router = useRouter()
  const { id } = router.query

  // const currentPageUrl = (`https://api.github.com/users/${id}`)
  // const [loading, setLoading] = useState(true)
  // const [response, setResponse] = useState([]) 



  // useEffect(() => {
  //   if(!router.isReady) return;
  //   setLoading(true);

  //   console.log(currentPageUrl);
  //   axios.get(currentPageUrl)
  //   .then(res => {
  //   setLoading(false);
  //   setResponse(res)})
  //   .catch(function (error) {
  //     console.log(error.toJSON());
  //   });
  // }, [router.isReady])


  //   // const userUrl = (response.data.url)
  //   // const userAvatar = (response.data.avatar_url)
  //   // const userCreated= (response.data.created_at)
  //   // const userBio = (response.data.bio)
  //   // const userName = (response.data.name)
  //   // const userCompany = (response.data.company)
  //   // const userRepos = (response.data.public_repos)
  //   // const userReposUrl = (response.data.repos_url)
  //   // const userFollowers = (response.data.followers)
  //   // const userFollowing = (response.data.following)


  // if (loading) return (
  //   <div className="loader text-center">
  //     <div className="spinner-border" role="status">
  //       <span className="visually-hidden">Loading...</span>
  //     </div>
  //   </div>
  // )

  return (
    <>
      <Navigation />

      <Container>
        <Row className="border-bottom-1">
          <Col md={1}> 
            <img classname="avatar" src="https://cdn2.bulbagarden.net/upload/thumb/b/b1/151Mew.png/250px-151Mew.png"/>
          </Col>

          <Col>
            <h1>
              <Typewritter 
                onInit={(typewriter) => {
                  typewriter
                  .typeString("Hello guys!")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString('A full stack web dev!')
                  .deleteAll()
                  .typeString("Hello guys!")
                  .pauseFor(1500)
                  .start();
                }}
                />
              </h1>
            </Col>
          </Row>
      
        
      </Container>

      <Container fluid id="footer">
        <Row className="mt-5 text-center">
          <Col>
            <p className="text-light align-middle">@COPYRIGHT CORONADO03</p> 
          </Col>
        </Row>
      </Container>

    </>
  )
}
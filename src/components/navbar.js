
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/my-logo.png'
import resume from '../images/Frances_Resume.pdf'


const NavBar = () => {

  return (
    <>
          <Navbar expand="lg" className="bg-body-tertiary navs">
            <Container className="nav-container container-fluid">
              
                <Link to='/'><img src={logo} alt="logo"  className="my-logo"/></Link>
              
              
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto container-fluid">

                  <div className="nav-items d-flex flex-lg-row flex-md-column flex-sm-column col-lg-5 col-md-12 col-sm-12 justify-content-lg-around">
                    <a href="#aboutMe" className="nav-links">About</a>
                    <a href="#techStack" className="nav-links">Skills</a>
                    <a href="#proj" className="nav-links">Projects</a>
                    <a href="#contactMe" className="nav-links">Contact</a>
                  
                    <a download href={resume} className="a-tag"><button className="resumeBtn">Resume</button></a>
                    
                  </div>
                  


                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </>
  )
  
}

export default NavBar
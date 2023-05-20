import React from 'react'
import '../styles/Navigation.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { useState } from 'react';


  function Navigation() {

    const [activeLink, setActiveLink] = useState('AboutMe');

    const onUpdateActiveLink = (value)=> {
      setActiveLink(value);
    }

    return (

      <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <Nav className="me-auto">
            <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active-navbar_link' : 'navbar-link'} onClick ={()=> onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar_link' : 'navbar-link'}onClick ={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contacts" className={activeLink === 'contacts' ? 'active-navbar_link' : 'navbar-link'}onClick ={()=> onUpdateActiveLink('contacts')}>Contacts</Nav.Link>
            <Nav.Link href="#resume"  className={activeLink === 'resume' ? 'active-navbar_link' : 'navbar-link'}onClick ={()=> onUpdateActiveLink('resume')}>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          </>
  );
}


export default Navigation
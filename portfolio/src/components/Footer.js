import React from 'react'
import '../styles/Footer.css';
import navIcon1 from '../assets/github.svg';
import navIcon2 from '../assets/linkedin.svg';
import navIcon3 from '../assets/stackoverflow.svg';

function Footer() {



  return (
    <>


    <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
            </span>
   </>
  )
}

export default Footer
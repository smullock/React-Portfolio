import React from 'react'
import '../styles/Footer.css';
import navIcon1 from '../assets/github.svg';
import navIcon2 from '../assets/linkedin.svg';
import navIcon3 from '../assets/stackoverflow.svg';

function Footer() {



  return (
    <>


    <footer className="footer bg-dark">
              <div className="social-icon">
                <a href="https://github.com/smullock"><img src={navIcon1} alt="" /></a>
                <a href="https://www.linkedin.com/in/sarah-mullock"><img src={navIcon2} alt="" /></a>
                <a href="https://stackoverflow.com/users/21945839/sarah-mullock"><img src={navIcon3} alt="" /></a>
              </div>
            </footer>
   </>
  )
}

export default Footer
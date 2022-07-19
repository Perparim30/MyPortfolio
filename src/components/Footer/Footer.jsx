import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#"className="footer_logo">Perparim Osmani</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/profile.php?id=100023466274249"><FaFacebookF/></a>
        <a href="https://www.instagram.com/perpariim.osmani/"><FiInstagram/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Perparim Osmani. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
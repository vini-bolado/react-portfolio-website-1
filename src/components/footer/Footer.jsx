import './footer.css'
import React from 'react'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' >Bolado LTDA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="hhtps://facebook.com"><BsInstagram/></a>
        <a href="hhtps://facebook.com"><BsInstagram/></a>
        <a href="hhtps://facebook.com"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bolado LTDA Todos os direitos reservados.</small>
      </div>

    </footer>
  )
}

export default Footer
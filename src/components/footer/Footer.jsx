import './footer.css'
import React from 'react'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' >Bolado LTDA</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Comentários</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Bolado LTDA Todos os direitos reservados.</small>
      </div>

    </footer>
  )
}

export default Footer
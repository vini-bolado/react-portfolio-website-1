import './header.css'
import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'

const Header = () => {
  return (
      <header>
        <div className="container header__container">
          <h5>Hello Iam</h5>
          <h1>vinicius evandro</h1>
          <h5 className="text-ligth">Front-end Developer</h5>
          <CTA/>

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact"className='scroll__down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default Header

import './header.css'
import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import VideoPlayer from 'react-video-js-player'
import Car from '../../assets/car.mp4'
import eai from '../../assets/eai.png'

const Header = () => {
  const videoSrc = Car;
 

  return (
      <header>
        <div className="container header__container">
          <h5>Oi eu sou o</h5>
          <h1>vinicius evandro</h1>
          <h5 className="text-ligth">Front-end Developer</h5>
          <CTA/>
          <HeaderSocials />

          <div className="me">
            <VideoPlayer
            src={videoSrc}
            poster={eai}
            width="720"
            height="360" 
            />
          </div>

          <a href="#contact"className='scroll__down'>Scroll Down</a>
        </div>
      </header>
  )
}

export default Header

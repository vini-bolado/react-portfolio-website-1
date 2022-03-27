/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css'
import React from 'react'
import {BiHomeAlt} from 'react-icons/bi';
import {FaUserAstronaut} from 'react-icons/fa';
import {GiBookAura} from 'react-icons/gi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#"onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href="#about"onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
      <a href="#experience"onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookAura/></a>
      <a href="#services"onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact"onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav

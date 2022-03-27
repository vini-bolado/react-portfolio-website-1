import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/vinicius-evandro-957a3411b/" target='blank'><BsLinkedin/></a>
        <a href="https://github.com/vini-bolado" target='blank'><BsGithub/></a>
        <a href="https://www.instagram.com/vinicius_evandro/" target='blank'><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials
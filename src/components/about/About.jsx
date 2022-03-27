import './about.css'
import React from 'react'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderAdd} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
            <div className="about__me-image">
              <img src={ME} alt="About img" />
            </div>     
        </div>


        <div className="about__content">
          <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ Years Workinga</small>
          </article>


          <article className='about__card'>
          <FiUsers className='about_icon'/>
            <h5>Cliente</h5>
            <small>200+ CLientesasfasf</small>
          </article>


          <article className='about__card'>
          <AiFillFolderAdd className='about_icon'/>
            <h5>Projetos Atuais</h5>
            <small>Workingasdasd</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi natus fuga placeat eligendi! Ipsam, facere ullam magnam ipsum esse perspiciatis, suscipit dolor et nostrum possimus officiis consequatur? Tempora, blanditiis distinctio.
        </p>

        <a href="#contact" className='btn btn-primary'>RECEBA</a>

        </div>

      </div>

    </section>
  )
}

export default About
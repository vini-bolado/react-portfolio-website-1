import './about.css'
import React from 'react'
import ME from '../../assets/eu2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderAdd} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Bora me conhecer?</h5>
      <h2>Sobre mim</h2>
    


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
            <h5>Digital House</h5>
            <small>Certified Tech Developer</small>
          </article>


          <article className='about__card'>
          <FiUsers className='about_icon'/>
            <h5>ibold</h5>
            <small>WebDeveloper no instituto Ibold</small>
          </article>


          <article className='about__card'>
          <AiFillFolderAdd className='about_icon'/>
            <h5>Projetos Atuais</h5>
            <small>Confidencial</small>
          </article>
        </div>

        <p>
        Viciado em tecnologia e tudo que ela traz de benefício ao mundo, se eu tenho uma missão na vida é aprender o máximo que eu puder para fazer parte dessa jornada da evolução tecnológica no mundo.
        Falar que é autodidata é pleonasmo na área da programação, e acredito que apesar disso me encaixo bem nesse termo, aprendi a compreender e me comunicar em inglês sem nenhum curso apenas com jogos RPG em que ter o inglês era essencial para realizar missões, fiz 3 anos de engenharia da computação e tive que interromper por problemas financeiros porem aprendi muito nessa caminhada sendo o pontapé para a minha paixão na programação e na área da tecnologia.
        </p>

        <a href="#contact" className='btn btn-primary'>Curtiu?</a>

        </div>

      </div>

    </section>
  )
}

export default About
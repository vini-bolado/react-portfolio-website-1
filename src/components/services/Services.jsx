import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu sei fazer!</h5>
      <h2>Serviços</h2>

    <div className='container services__container'>
      <article className='service'>
        <div className="service__head">
          <h3>Desenvolvimento Web</h3>
        </div>


        <ul className='service__list'>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Criação de web page</p>
          </li>

          <li>

            <AiOutlineCheck className='service__list-icon'/>
            <p>Consumo e gerenciamento de API</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Cadastro e login</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Formulários</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Animações</p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>TypeScript</p>
          </li>
        </ul>
      </article>

{/* END OF UI/UX */}

      <article className='service'>
        <div className="service__head">
          <h3>Criação de APP Mobile</h3>
        </div>


        <ul className='service__list'>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Flutter</p>
          </li>

          <li>

            <AiOutlineCheck className='service__list-icon'/>
            <p>Dart</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Animações</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Navegação entre Telas</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Widgets Específicos</p>
          </li>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Gerenciamento de Estados</p>
          </li>
        </ul>
      </article>

      {/* END OF DEV WEB */}


      <article className='service'>
        <div className="service__head">
          <h3>Conhecimentos Gerais</h3>
        </div>


        <ul className='service__list'>
          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Git/GitHub/GitFlow</p>
          </li>

          <li>

            <AiOutlineCheck className='service__list-icon'/>
            <p>Estruturação de Pastas</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Agile</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Scrum</p>
          </li>

          <li>
            <AiOutlineCheck className='service__list-icon'/>
            <p>Metodologias Ageis</p>
          </li>
        </ul>
      </article>

      {/* END OF UI/UX */}

    </div>



    </section>
  )
}

export default Services

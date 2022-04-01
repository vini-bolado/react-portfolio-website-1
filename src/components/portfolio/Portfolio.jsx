import './portfolio.css'
import React from 'react'

import Breve from '../../assets/Breve.png'

// Usando método

const data = [
  {
    id: 1,
    image: Breve,
    title: 'App de Gerenciamento de tarefas em flutter',
    github: 'https://github.com/vini-bolado?tab=repositories',
    demo: 'https://github.com/vini-bolado?tab=repositories'
  },
  {
    id: 2,
    image: Breve,
    title: 'Dashboard',
    github: 'https://github.com/vini-bolado?tab=repositories',
    demo: 'https://github.com/vini-bolado?tab=repositories'
  },
  {
    id: 3,
    image: Breve,
    title: 'Formulário com autenticação em Angular',
    github: 'https://github.com/vini-bolado?tab=repositories',
    demo: 'https://github.com/vini-bolado?tab=repositories'
  },
  {
    id: 4,
    image: Breve,
    title: 'Criando chat bot com React-native',
    github: 'https://github.com/vini-bolado?tab=repositories',
    demo: 'https://github.com/vini-bolado?tab=repositories'
  },
  {
    id: 5,
    image: Breve,
    title: 'Analise facial com python',
    github: 'https://github.com/vini-bolado?tab=repositories',
    demo: 'https://github.com/vini-bolado?tab=repositories'
  },
  {
    id: 6,
    image: Breve,
    title: 'bot de Xadrez',
    github: 'https://github.com/vini-bolado?tab=repositories',
    demo: 'https://github.com/vini-bolado?tab=repositories'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>Trabalhos recentes</h5>
      <h2>Projetos</h2>

      <div className="container portfolio__container">

      {
        data.map(({id,image,title,github,demo}) =>{
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image"></div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn'>GitHub</a>
            <a href={demo} className='btn btn-primary'>Demo</a>
            </div>
          </article>
          )

        })
      
        
      }
      
      </div>

    </section>
  )
}

export default Portfolio
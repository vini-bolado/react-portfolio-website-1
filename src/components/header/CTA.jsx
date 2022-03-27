import React from 'react'
import CV from '../../assets/Vinicius-Evandro-CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Dowload CV</a>
        <a href="#contact"className='btn btn-primary'>Contacto</a>
    </div>
  )
}

export default CTA
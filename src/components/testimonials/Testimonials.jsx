import React from 'react'
import './testimonials.css'
import EU from '../../assets/me.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: EU,
    name: 'Vinicius',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam.',

  },
  {
    avatar: EU,
    name: 'Vinicius',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam.',

  },
  {
    avatar: EU,
    name: 'Vinicius',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam.',

  },
  {
    avatar: EU,
    name: 'Vinicius',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ullam.',

  }
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>É sobre isso</h5>
      <h2>Certificados</h2>

       <Swiper className="container testimonials__container" 
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
         {
           data.map(({avatar, name, review}, index) => {
            return(
            <SwiperSlide key={index} className='testimonials'>
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
          </SwiperSlide>
            )
           })
         }
        </Swiper> 
    </section>
  )
}

export default Testimonials
import React from 'react'
import './testimonials.css'
import Front from '../../assets/front.png'
import Back from '../../assets/back.png'
import Sum from '../../assets/summer.png'
import Link from '../../assets/link.png'
import Lider from '../../assets/lider.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: Front,
    review: 'Formação gratuita conquistada após processo seletivo, que incluiu um hackathon e que cobre tecnologias como HTML, CSS, Javascript.',
  },
  {
    avatar: Sum,
    review: 'Patrocinado pelo Mercado livre o Summer Week foi a semana intensiva sobre as as hard skill tanto de front e back end.',
   
  },
  {
    avatar: Back,
    review: 'Formação gratuita conquistada após processo seletivo, que incluiu um hackathon e que cobre tecnologias como Banco de dados, NodeJS.',
  },
  {
    avatar: Link,
    review: "If you don't believe that i can speak english, this is a certificate certifying that yes i can!",
  },
  {
    avatar: Lider,
    review: "Algumas soft skills que podem ser uteis!",
  },
  
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>É sobre isso?</h5>
      <h2>Certificados</h2>

       <Swiper className="container testimonials__container" 
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={80}
      slidesPerView={1}
      pagination={{ clickable: true }}>
         {
           data.map(({avatar, review}, index) => {
            return(
            <SwiperSlide key={index} className='testimonials'>
            <div className="client__avatar">
              <img src={avatar} alt="" />
            </div>
            
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
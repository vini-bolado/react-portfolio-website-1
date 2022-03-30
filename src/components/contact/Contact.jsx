import './contact.css'
import { useRef } from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import emailjs from 'emailjs-com'
import React from 'react'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j75lsap', 'template_he7ehel', form.current, '_p4mBnvo7aEfBZvzv')

    e.target.reset();
    
    alert('email enviado!!!')
  };

  return (
    <section id='contact'>
      <h5>Fala comigo!</h5>
      <h2>Contato</h2>


      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <AiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>vinnievandro@hotmail.com</h5>
          <a href="mailto:vinnievandro@hotmail.com" target="blank">Manda um Email</a>
        </article>


        <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Vinicius Evandro</h5>
          <a href="https://m.me/profile.php?id=100005057058658"target="blank">Menda uma Mensagem</a>
        </article>


        <article className='contact__option'>
          <AiOutlineWhatsApp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>(11)95866-4886</h5>
          <a href="https://api.whatsapp.com/send?phone=+55 11 95866-4886"target="blank">Manda um Zap</a>
        </article>
        </div>
        {/* END OF CONTACT */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='' placeholder='Seu nome ' required />
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message" rows="7" placeholder='Sua mensagem' required ></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact


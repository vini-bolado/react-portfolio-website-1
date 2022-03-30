import './experience.css'
import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>As minhas skills</h5>
      <h2>Minha Stack</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>experienced</small>
            </div>
            </article>

            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>

            <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>experienced</small>
            </div>

            </article>
            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>experienced</small>
            </div>
            </article>

            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>REACT</h4>
            <small className='text-light'>experienced</small>
            </div>
            </article>

            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>BOOTSTRAP</h4>
            <small className='text-light'>experienced</small>
            </div>
            </article>

            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>FLUTTER</h4>
            <small className='text-light'>experienced</small>
            </div>
            </article>

          </div>
        </div>
        <div className="experience__backend">
        <h3>Back end experience</h3>
          <div className="experience__content">

            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>experienced</small>
            </div>
            </article>

            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>NODE.JS</h4>
            <small className='text-light'>experienced</small>
            </div>
            </article>

            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Loading...</h4>
            <small className='text-light'>experienced</small>
            </div>
            </article>

            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Loading...</h4>
            <small className='text-light'>experienced</small>
            </div>
            </article>

            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div><h4>Loading...</h4>
            <small className='text-light'>experienced</small></div>
            </article>

            <article className='experience__details'><BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Loading...</h4>
            <small className='text-light'>experienced</small>
            </div>
            </article>

          </div>
          
        </div>

      </div>

    </section>
  )
}

export default Experience

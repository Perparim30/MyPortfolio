import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>WORDPRESS</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>PHOTOSHOP</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                  <h4>ILLUSTRATOR</h4>
                <small className='text-light'>Experienced</small>
                </div>
            </article>
          </div>
        </div>  
        
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div> 
                  <h4>PHP</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>
            <article className='experience_details'>
                <BsPatchCheckFill className='experience_details-icons'/>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
                </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
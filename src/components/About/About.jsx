import React from 'react'
import './About.css'
import ME from '../../Photos/Osmani.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

        <article className="about_card">
              <FaAward className="about_icon"/>
            <h5>Experience</h5>
            <small>1 Year Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon"/>
            <h5>Clients</h5>
            <small>20+ clients</small>
            </article>
            
            <article className="about_card">
              <VscFolderLibrary className="about_icon"/>
            <h5>Projects</h5>
            <small>20+ Completed</small>
            </article>

          </div>

           <p>
            I'm a Software Engineer. I'm located in Skenderaj,Kosovo
             and I have been working as freelancer. I created many
              Logos and designs but I also created a website 
              in html,css and javascript.
           </p>

           <a href="#contact" className='btn btn-primary'>Let's talk</a> 
        </div>
      </div>
      
      </section>
  )
}

export default About
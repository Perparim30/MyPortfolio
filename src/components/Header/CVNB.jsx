import React from 'react'
import CV from '../../Photos/CV.png'
const CVNB = () => {
  return (
    <div className='cvnb'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Send Message</a>
    </div>
  )
}

export default CVNB
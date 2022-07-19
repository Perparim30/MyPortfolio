import React from 'react'
import './Header.css'
import CVNB from './CVNB'
import ME from '../../Photos/Perparim(1).png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='.container.header__container'>
        <h5>Hello I'm</h5>
        <h1>Perparim Osmani</h1>
        <h5 classNAME="text-light">Developer And Graphic Designer</h5>
        <CVNB />
        <HeaderSocial />

        <div className="me">
            <img src={ME} alt=''/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
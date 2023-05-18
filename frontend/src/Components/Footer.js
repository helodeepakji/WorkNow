import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='foot'>
    <div className='title-footer'>
        <h2>Labour-Mate: A helping Hand </h2>
    </div>
    <div className='rest-footer'>
        
        <div className='aboutus'>
        <NavLink to="/Reg"><h3>About us</h3></NavLink>
            <h5>abc</h5>
            <h5>abc</h5>
            <h5>abc</h5>
        </div>
        <div className='services'>
            <h3>Services</h3>
            <h5>abc</h5>
            <h5>abc</h5>
            <h5>abc</h5>
        </div>
        <div className='contactus'>
        <h3>Contact Us</h3>
            <h5>abc</h5>
            <h5>abc</h5>
            <h5>abc</h5>
        </div>
        <div className='socials'>
            <h3>Socials</h3>
            <h5>abc</h5>
            <h5>abc</h5>
            <h5>abc</h5>
        </div>
    </div>
    </div>
  )
}

export default Footer

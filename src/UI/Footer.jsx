import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
  <>
<div className='main bg-[#1a0933] py-12 px-6'>
  <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
    
    <div>
      <h2 className='text-[#B053FF] text-xl mb-4 font-semibold'>Connect With Us Online</h2>
      <div className='text-white flex flex-col gap-3'>
        <NavLink className='flex items-center gap-2 text-lg hover:text-[#B053FF] transition-colors'>
          <FaInstagram/> Instagram
        </NavLink>
        <NavLink className='flex items-center gap-2 text-lg hover:text-[#B053FF] transition-colors'>
          <FaGithub/> Github
        </NavLink>
        <NavLink className='flex items-center gap-2 text-lg hover:text-[#B053FF] transition-colors'>
          <FaLinkedin/> LinkedIn
        </NavLink>
        <NavLink className='flex items-center gap-2 text-lg hover:text-[#B053FF] transition-colors'>
          <FaXTwitter/> Twitter
        </NavLink>
        <NavLink className='flex items-center gap-2 text-lg hover:text-[#B053FF] transition-colors'>
          <FaFacebookF/> Facebook
        </NavLink>
      </div>
    </div>

    <div>
      <h1 className='text-[#B053FF] text-xl mb-4 font-semibold'>Meet the Creator ❤️</h1>
      <div className='text-white text-lg flex flex-col gap-3'>
        <h2>Abhishek Kumar</h2>
        <a href="tel:+918210072406"><h2>Contact Number</h2></a>
       <a href="mailto:araj10569@gmail.com">Email</a>
      </div>
    </div>

    <div>
      <h2 className='text-[#B053FF] text-xl mb-4 font-semibold'>Quick Links</h2>
      <div className='text-white flex flex-col gap-3 text-lg'>
        <NavLink className='hover:text-[#B053FF] transition-colors' to="/">Home</NavLink>
        <NavLink className='hover:text-[#B053FF] transition-colors' to='/about'>About</NavLink>
        <NavLink className='hover:text-[#B053FF] transition-colors' to='/signup'>Sign Up</NavLink>
      </div> 
    </div>

  
    <div className='flex items-start justify-start lg:justify-end'>
      <h1 className='text-4xl lg:text-5xl text-[#B053FF] font-bold'>ChitraKaari.AI</h1>
    </div>

  </div>
</div>
  </>
  )
}


export default Footer

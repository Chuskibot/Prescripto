import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-primary rounded-lg px-4 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10'>
    {/* Left Side */}
    <div className='md:w-1/2 flex flex-col justify-center items-center gap-6 py-8 md:py-[6vw] text-center animate-fade-in'>
      <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white transform hover:scale-105 transition-transform duration-300'>
        Book an Appointment <br /> with Trusted Doctors
      </h2>
      <p className='text-white text-sm sm:text-base lg:text-lg opacity-90 hover:opacity-100 transition-opacity duration-300'>
        Superior care is just a step away. Your path to wellness starts here.
      </p>
      <a 
      href='#speciality' 
      className='flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'
    >
      <span className='font-semibold text-lg'>Book Appointment</span>
      <img src={assets.arrow_icon} alt='Arrow Icon' className='w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1' />
    </a>
    </div>
  
    {/* Right Side */}
    <div className='md:w-1/2 flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-6 md:mt-0'>
      <div className='w-full flex justify-center mb-[-10px] animate-slide-up'>
        <img 
          src={assets.group_profiles} 
          alt='Group Profiles' 
          className='w-[90%] sm:w-[70%] md:w-[80%] h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className='w-full flex justify-center animate-slide-up delay-200'>
        <img 
          src={assets.header_img} 
          alt='Header Image' 
          className='w-[90%] sm:w-[70%] md:w-[80%] h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
        />
      </div>
    </div>
  </div>
  
  
  )
}

export default Header
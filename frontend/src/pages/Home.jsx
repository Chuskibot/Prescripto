import React from 'react'
import Header from '../components/Header.jsx'
import SpecialityMenu from '../components/SpeciallityMenu.jsx'
import TopDoctors from '../components/TopDoctors.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'

export const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
      
    </div>
  )
}

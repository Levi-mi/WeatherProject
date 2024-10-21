import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Weather from '../components/Weather'

const HomePage = () => {
  return (
    <>
      <Header title="Weather" />    
      <Weather />
      <Footer />
    </>
  )
}

export default HomePage
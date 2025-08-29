import React from 'react'
import { useState,useEffect } from 'react'
import MainNavbar from '../components/navbar/MainNavbar'
import HeroSection from '../components/heroSection/HeroSection'
import MiniNavbar from '../components/navbar/MiniNavbar'

import HeroSection2 from '../components/heroSection/HeroSection2'
import Footer from '../components/footer/Footer'
import Modal from '../components/heroSection/Modal'


function Home() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

      setShowModal(true);

  }, []);
  return (
    <div className='bg-white'>
    <MiniNavbar/>
    <MainNavbar/>
    <HeroSection/>
    <HeroSection2/>
    <Footer/>
   
       
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} />

    </div>
  )
}

export default Home

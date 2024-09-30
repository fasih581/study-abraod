import React from 'react'

import Navbar from '../NavBar/Navbar'
import Top from '../Home/Top_section'
import SearchBar from '../Home/SearchBar'
import AutoSlider from '../Home/AutoSlider'
import Quality from '../Home/QualitySection'
import Destination from '../Home/DestinationSection'
import Offer from '../Home/OfferSection'
import Contact from '../Home/ContactSection'
import Footer from '../Footer/FooterSection'

import Css from './home.module.css'

const Home = () => {
  return (
    <>
     <div className={Css.Navbar}>
      <Navbar />
      </div>
      <div className={Css.Home}>
      <Top />
      <SearchBar />
      <AutoSlider />
      <Quality />
      <Destination />
      <Offer />
      <Contact />
      </div>
      <div className={Css.FooterBox}>
      <Footer />
      </div>
    </>
  )
}

export default Home
import React from 'react'
import Navbar from '../NavBar/Navbar'
import AboutSection from './AboutSection/AboutSection'
import Team from './AboutSection/Team'
import Footer from '../Footer/FooterSection'
import Css from './About.module.css'


function About() {
  return (
    <>
     <div className={Css.Navbar}>
      <Navbar />
      </div>
      <div className={Css.About}>
      <AboutSection />
      <Team />
      </div>
      <div className={Css.AboutTopic}>
        <div className={Css.AboutTopicLeft}>
          <h1>Our Mission</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries</p>
        </div>
        <div className={Css.AboutTopicRight}>
          <h1>Our Vision</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries</p>
        </div>
        <div className={Css.AboutTopicLeft}>
          <h1>Our Corporate Social Responsibility</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries</p>
        </div>
      </div>
      <div className={Css.FooterBox}>
      <Footer />
      </div>
    </>
  )
}

export default About
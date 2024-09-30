import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/FooterSection'

import { MdEmail, MdCall } from "react-icons/md";
import Css from './Contact.module.css'

function Contact() {
  return (
    <>
      <div className={Css.Navbar}>
        <Navbar />
      </div>
      <div className={Css.Contact}>
        <div className={Css.BoxLeft}>
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut porttitor tellus sit amet erat convallis molestie. Cras blandit
            pharetra sapien, id bibendum libero vestibulum ut. Sed pharetra, tellus
            et volutpat viverra, nulla libero tincidunt nibh, vestibulum commodo enim
            arcu eget orci. Sed malesuada luctus magna. Mauris aliquet sed elit sollicitudin
            imperdiet. Morbi faucibus felis a risus imperdiet,</p>
          <div className={Css.ContactInfo}>
            <h6><span className={Css.IconBox}><MdEmail className={Css.Icon} /></span>hello@gmail.com</h6>
            <h6><span className={Css.IconBox}><MdCall className={Css.Icon} /></span>+973 33995881</h6>
          </div>
        </div>
        <div className={Css.BoxRight}>
          <div className={Css.Inputs}>
            <div className={Css.Input}>
              <p>Full Name</p>
              <input type="text" placeholder='Enter Your Full Name' />
            </div>
            <div className={Css.Input}>
              <p>Email</p>
              <input type="email" placeholder='john@gmail.com' />
            </div>
            <div className={Css.Input}>
              <p>Message</p>
              <textarea name="" id="">Message</textarea>
            </div>
          </div>
          <button>Login</button>
        </div>
      </div>
      <div className={Css.FooterBox}>
        <Footer />
      </div>
    </>
  )
}

export default Contact
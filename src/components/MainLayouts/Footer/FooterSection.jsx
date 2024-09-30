import React from 'react'
import Css from './FooterSection.module.css'
import { FaInstagram, FaFacebook, FaLinkedin  } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

function FooterSection() {
  return (
    <div className={Css.FooterDiv}>
        <div className={Css.FooterTop}>
            <div className={Css.CompanyDetailsBox}>
                <h2>Study Abroad</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut porttitor tellus sit amet erat convallis molestie. 
                    Cras blandit pharetra sapien, id bibendum libero vestibulum ut.</p>
                <div className={Css.IconBox}>
                <FaInstagram className={Css.Icon}/>
                <FaFacebook className={Css.Icon}/>
                <FaLinkedin className={Css.Icon}/>
                </div>

            </div>
            <div className={Css.DetailsBox}>
                <h4>Quick Links</h4>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className={Css.DetailsBox}>
                <h4>Developers</h4>
                <p>Features</p>
                <p>Pricing</p>
                <p>Integrations</p>
                <p>Changelog</p>
            </div>
            <div className={Css.DetailsBox}>
                <h4>Legal</h4>
                <p>Privacy Policy</p>
                <p>Terms Of Serivce </p>
            </div>
        </div>
        <div className={Css.FooterBottom}>
            <p className={Css.CopyrightDiv}><span><FaRegCopyright className={Css.CopyrightIcon}/></span>2024 FASIH.EK.All rights resered</p>
            <p>www.hello@managment</p>
        </div>
    </div>
  )
}

export default FooterSection
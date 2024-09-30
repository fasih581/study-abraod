import React from 'react'
import { MdEmail,MdCall } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Css from './ContactSection.module.css'

function ContactSection() {

    const navigate = useNavigate();
    return (
        <div className={Css.ContactDiv}>
            <div className={Css.ContactBox}>
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut porttitor tellus sit amet erat convallis molestie. Cras blandit
                pharetra sapien, id bibendum libero vestibulum ut. Sed pharetra, tellus
                et volutpat viverra, nulla libero tincidunt nibh, vestibulum commodo enim
                arcu eget orci. Sed malesuada luctus magna. Mauris aliquet sed elit sollicitudin
                imperdiet. Morbi faucibus felis a risus imperdiet,</p>
                <div className={Css.ContactInfo}>
                <h6><span className={Css.IconBox}><MdEmail className={Css.Icon}/></span>hello@gmail.com</h6>
                <h6><span className={Css.IconBox}><MdCall className={Css.Icon}/></span>+973 33995881</h6>
                </div>
                <button onClick={() => navigate('/contact')}>Contact</button>
        </div>
        </div>
    )
}

export default ContactSection
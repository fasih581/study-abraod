import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import Img from '../../../assets/Img/whychoose.png' 
import Css from './QualitySection.module.css'

function QualitySection() {
    return (
        <div className={Css.Box}>
          <div className={Css.Box_left}>
          <h1>Why Choose Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut porttitor tellus sit amet erat convallis molestie.
                Cras blandit pharetra sapien, id bibendum libero vestibulum ut.
                Sed pharetra, tellus et volutpat viverra, nulla libero tincidunt nibh,
                vestibulum commodo enim arcu eget orci. Sed malesuada luctus magna. Mauris
                aliquet sed elit sollicitudin imperdiet. Morbi faucibus felis a risus imperdiet,</p>
                <div className={Css.CheckBox}>
                    <h5><span><IoIosCheckmarkCircle className={Css.Icon}/></span>Doccmentation And Paper Processing</h5>
                    <h5><span><IoIosCheckmarkCircle className={Css.Icon}/></span>Visa Assistance And Related Help</h5>
                    <h5><span><IoIosCheckmarkCircle className={Css.Icon}/></span>Scholarship Help</h5>
                </div>
          </div>
          <div className={Css.Box_right}>
            <img src={Img} alt="" />
          </div>
        </div>
    )
}

export default QualitySection
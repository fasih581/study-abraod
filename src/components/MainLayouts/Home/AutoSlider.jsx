import React from 'react'
import Marquee from "react-fast-marquee";
import Css from './AutoSlider.module.css'
import Img1 from '../../../assets/Img/Img1.png'
import Img2 from '../../../assets/Img/Img2.png'
import Img3 from '../../../assets/Img/Img3.png'
import Img4 from '../../../assets/Img/Img4.png'
import Img5 from '../../../assets/Img/Img5.png'


function AutoSlider() {
  return (
    <div className={Css.SliderBox}>
       <Marquee>
        <div className={Css.ImgBox1}>
            <img src={Img1} alt="" />
        </div>
        <div className={Css.ImgBox2}>
            <img src={Img2} alt="" />
        </div>
        <div className={Css.ImgBox1}>
            <img src={Img3} alt="" />
        </div>
        <div className={Css.ImgBox2}>
            <img src={Img4} alt="" />
        </div>
        <div className={Css.ImgBox1}>
            <img src={Img5} alt="" />
        </div>
        <div className={Css.ImgBox2}>
            <img src={Img2} alt="" />
        </div>
        <div className={Css.ImgBox1}>
            <img src={Img1} alt="" />
        </div>
        <div className={Css.ImgBox2}>
            <img src={Img2} alt="" />
        </div>
        </Marquee>
    </div>
  )
}

export default AutoSlider
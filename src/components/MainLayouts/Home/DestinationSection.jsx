import React from 'react'
import Slider from "react-slick";
import Css from './Destination.module.css'
import Img1 from '../../../assets/Img/european.png'
import { px } from 'framer-motion';

function DestinationSection() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 450, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 320, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className={Css.BoxDiv}>
      <h1>Choose Your Destination</h1>
      <Slider {...settings} className={Css.SliderCard}>
        <div className={Css.Box}>
          <div className={Css.Img}>
            <img src={Img1} alt="European Destination" />
          </div>
          <h6>European</h6>
        </div>
        <div className={Css.Box}>
          <div className={Css.Img}>
            <img src={Img1} alt="European Destination" />
          </div>
          <h6>European</h6>
        </div>
        <div className={Css.Box}>
          <div className={Css.Img}>
            <img src={Img1} alt="European Destination" />
          </div>
          <h6>European</h6>
        </div>
        <div className={Css.Box}>
          <div className={Css.Img}>
            <img src={Img1} alt="European Destination" />
          </div>
          <h6>European</h6>
        </div>
        <div className={Css.Box}>
          <div className={Css.Img}>
            <img src={Img1} alt="European Destination" />
          </div>
          <h6>European</h6>
        </div>
        <div className={Css.Box}>
          <div className={Css.Img}>
            <img src={Img1} alt="European Destination" />
          </div>
          <h6>European</h6>
        </div>
      </Slider>
    </div>
  )
}

export default DestinationSection;

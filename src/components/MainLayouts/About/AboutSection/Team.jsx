import React from 'react'
import Marquee from "react-fast-marquee";
import Img from '../../../../assets/Img/profile.png'
import Css from './TeamSection.module.css'


function Team() {
  return (
    <div className={Css.Box}>
        <h1>Our Team</h1>
        <Marquee>
        <div className={Css.Cards}>
        <div className={Css.Card}>
            <div className={Css.Img}>
              <img src={Img} alt="" />
            </div>
            <div className={Css.CardBottom}>
              <h5>Jasmin Clarke</h5>
              <p>Business Deleloper</p>
            </div>
          </div>
          <div className={Css.Card}>
            <div className={Css.Img}>
              <img src={Img} alt="" />
            </div>
            <div className={Css.CardBottom}>
              <h5>Jasmin Clarke</h5>
              <p>Business Deleloper</p>
            </div>
          </div>
          <div className={Css.Card}>
            <div className={Css.Img}>
              <img src={Img} alt="" />
            </div>
            <div className={Css.CardBottom}>
              <h5>Jasmin Clarke</h5>
              <p>Business Deleloper</p>
            </div>
          </div>
          <div className={Css.Card}>
            <div className={Css.Img}>
              <img src={Img} alt="" />
            </div>
            <div className={Css.CardBottom}>
              <h5>Jasmin Clarke</h5>
              <p>Business Deleloper</p>
            </div>
          </div>
          <div className={Css.Card}>
            <div className={Css.Img}>
              <img src={Img} alt="" />
            </div>
            <div className={Css.CardBottom}>
              <h5>Jasmin Clarke</h5>
              <p>Business Deleloper</p>
            </div>
          </div>
          <div className={Css.Card}>
            <div className={Css.Img}>
              <img src={Img} alt="" />
            </div>
            <div className={Css.CardBottom}>
              <h5>Jasmin Clarke</h5>
              <p>Business Deleloper</p>
            </div>
          </div>
        </div>
        </Marquee>
    </div>
  )
}

export default Team
import React from 'react'
import Css from './OfferSection.module.css'
import Img1 from '../../../assets/Img/weoffer1.png'
import Img2 from '../../../assets/Img/weoffer2.png'
import Img3 from '../../../assets/Img/weoffer3.png'
import Img4 from '../../../assets/Img/weoffer4.png'


function OfferSection() {
    return (
        <div className={Css.BoxDiv}>
            <h1>What We Offer</h1>
            <div className={Css.CardBox}>
                <div className={Css.Card}>
                    <div className={Css.CardTop}>
                        <img src={Img1} alt="" />
                    </div>
                    <div className={Css.CardBottom}>
                        <h6>Overseas Education</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut porttitor tellus sit amet erat convallis molestie. </p>
                    </div>
                </div>
                <div className={Css.Card}>
                    <div className={Css.CardTop}>
                        <img src={Img2} alt="" />
                    </div>
                    <div className={Css.CardBottom}>
                        <h6>Immigration Services</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut porttitor tellus sit amet erat convallis molestie. </p>
                    </div>
                </div>
                <div className={Css.Card}>
                    <div className={Css.CardTop}>
                        <img src={Img3} alt="" />
                    </div>
                    <div className={Css.CardBottom}>
                        <h6>Entrance Preparation</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut porttitor tellus sit amet erat convallis molestie. </p>
                    </div>
                </div>
                <div className={Css.Card}>
                    <div className={Css.CardTop}>
                        <img src={Img4} alt="" />
                    </div>
                    <div className={Css.CardBottom}>
                        <h6>Visa Assistance</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ut porttitor tellus sit amet erat convallis molestie. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferSection
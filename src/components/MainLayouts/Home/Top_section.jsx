import Css from './topSection.module.css'
import Img from '../../../assets/Img/TopImg.png'

const Top_section = () => {
    return (
        <>
            <div className={Css.TopBox}>
                <div className={Css.box_left}>
                    <h4>STUDY IN INDIA</h4>
                    <h1>We Make Batter Your Study</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut porttitor tellus sit amet erat convallis molestie. Cras blandit pharetra sapien,
                        id bibendum libero vestibulum ut. Sed pharetra, tellus et volutpat viverra, nulla
                        libero tincidunt nibh, vestibulum commodo enim arcu eget orci. Sed malesuada luctus
                        magna. Mauris aliquet sed elit sollicitudin imperdiet. Morbi faucibus felis a risus
                        imperdiet,</p>
                </div>
                <div className={Css.Img_box}>
                    <img src={Img} alt="" />
                </div>
            </div>
        </>
    )
}

export default Top_section
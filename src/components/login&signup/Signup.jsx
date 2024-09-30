import React from 'react'
import Css from './css.module.css'
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  return (
    <div className={Css.Container}>
    <div className={Css.Sign_head}>
    <div className={Css.Sign_box_left}>
        <h1>Create Your Study 
          Abroad Account</h1>
        <p>Sign up to explore international universities, discover scholarship opportunities, 
          and receive tailored guidance for your study abroad plans. With your account, you'll be 
          able to save your favorite programs, track application deadlines, and get expert advice 
          on every step of the journey.</p>
          <button onClick={() => navigate('/login')} className={Css.Btn}>Login</button>
      </div>
      <div className={Css.Sign_box_right}>
        <h1>STUDY ABROAD</h1>
        <div className={Css.Inputs_box}>
          <h4>Your Gateway to Global Education Awaits</h4>
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
              <p className={Css.Pass}>Password <span><p>Forgot Password</p></span></p>
              <input type="password" placeholder='Enter Your Password' />
            </div>
          </div>
          <button onClick={() => navigate('/login')} className={Css.Btn}>Sign up</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup
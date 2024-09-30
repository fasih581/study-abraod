import React from 'react'
import { useNavigate } from "react-router-dom";

import Css from './css.module.css'

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={Css.Container}>
      <div className={Css.log_head}>
        <div className={Css.box_left}>
          <h1>STUDY ABROAD</h1>
          <div className={Css.Inputs_box}>
            <h4>Your Gateway to Global Education Awaits</h4>
            <div className={Css.Inputs}>
              <div className={Css.Input}>
                <p>Email</p>
                <input type="text" placeholder='john@gmail.com' />
              </div>
              <div className={Css.Input}>
                <p className={Css.Pass}>Password <span><p>Forgot Password</p></span></p>
                <input type="password" placeholder='Enter Your Password' />
              </div>
            </div>
            <button onClick={() => navigate('/')} className={Css.Btn}>Login</button>
          </div>
        </div>
        <div className={Css.box_right}>
          <h1>Start Your Study
            Abroad Journey</h1>
          <p>Log in to access personalized resources, university applications,
            and important updates for your study abroad adventure. Manage your documents,
            track application progress, and connect with advisors to make your dream of studying
            overseas a reality. Let's take the first step toward your global education experience!</p>
          <button onClick={() => navigate('/signup')} className={Css.Btn}>Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Login
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import {  TiSocialFacebook } from "react-icons/ti";
import {  RiLinkedinFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <div>
      <section className="Logincontainer">
          <div className="loginCenter">
              <div className="loginTitle">
                  <h3>SIGN UP</h3>
              </div>

              <form className='loginFrom'>
                  <div className="formContarol">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" />
                  </div>

                  <div className="formContarol">
                  <label htmlFor="Password">Password</label>
                  <input type="text" name="password" />
                  </div>

                  <div className="formContarol">
                  <label htmlFor="confirm password">Confirm Password</label>
                  <input type="text" name="password" />
                  </div>

                  <button className='loginBtn' type='button'>SIGN UP</button>
                  <p>Forgot Password?</p>
              </form>

              {/* <hr /> */}

              <div className="or">
                <p>OR</p>
              </div>

              <div className="socialIconLinks">
                <div className='loginIcon red'><FaGoogle /></div>
                <div className='loginIcon blue'><TiSocialFacebook /></div>
                <div className='loginIcon blue'><RiLinkedinFill /></div>
              </div>

              <div className="signupLink">
                  <p>Already a user? <Link to="/login">LOGIN</Link> </p>
              </div>
          </div>
      </section>
    </div>
    </div>
  )
}

export default Signup

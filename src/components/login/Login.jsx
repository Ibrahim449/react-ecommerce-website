import React from 'react'
import './login.css'
import { FaGoogle } from "react-icons/fa";
import {  TiSocialFacebook } from "react-icons/ti";
import {  RiLinkedinFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
  return (
    <div>
      <section className="Logincontainer">
          <div className="loginCenter">
              <div className="loginTitle">
                  <h3>LOGIN</h3>
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

                  <button className='loginBtn' type='button'>LOGIN</button>
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
                  <p>Need an account? <Link to="/signup">SIGN UP</Link> </p>
              </div>
          </div>
      </section>
    </div>
  )
}

export default Login
import React from 'react'
import './newsLetter.css';
import '../../App.css'

export default function NewsLetter() {
  return (
    <div>
      <section className="newsLetter">
          <section className="center">
              <h3>Join our newsletter and get 20% off</h3>
              <div className="contentPara">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                  <form className="contactForm">
                      <input type="email" name="email" placeholder='enter email' />
                      <button type='button' className='submitBtn'>subscribe</button>
                  </form>
              </div>
          </section>
      </section>
    </div>
  )
}

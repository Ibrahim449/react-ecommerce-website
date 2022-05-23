import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <div>
      <div className="header">

          <div className="gridHead">
              <div className="leftSide">
              <h1>Design Your <br /> Comfort Zone</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
              <Link to="/products"><button type='button'>shop now</button></Link>
              </div>

              <div className="rightSide">
                <img className='img1' src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg" alt="nice table" class="main-img" />
                <img src="https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg" alt="person working" class="accent-img" />
              </div>
          </div>
      </div>
    </div>
  )
}

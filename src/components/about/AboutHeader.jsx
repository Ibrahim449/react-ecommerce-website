import React from 'react'
import '../about/aboutHeader.css'
import '../../App.css';

export default function AboutHeader() {
  return (
    <div>
      <section className="about">
        <div className="title">
          <h3>
            <a href="/">Home</a>
             / About
          </h3>
        </div>
      </section>
    </div>
  )
}

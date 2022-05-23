import React from 'react'
import '../about/aboutHeader.css'
import '../../App.css';
import { Link } from 'react-router-dom';

export default function AboutHeader() {
  return (
    <div>
      <section className="about">
        <div className="title">
          <h3>
            <a href="/">Home</a>
             / Products
          </h3>
        </div>
      </section>
    </div>
  )
}

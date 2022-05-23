import React, { useEffect, useState } from 'react'
import '../about/aboutHeader.css'
import '../../App.css';
import { Link } from 'react-router-dom';
import { productsData } from './productsData';

export default function LinkHeader() {

  return (
    <div>
      <section className="about">
        <div className="title">
          <h3>
            <Link to="/">Home</Link>
             <Link to="/products">/ Products</Link>
             / Details
          </h3>
        </div>
      </section>
    </div>
  )
}

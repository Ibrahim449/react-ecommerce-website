import React, { useState } from 'react'
import './featureProducts.css';
import { data } from './data'
import '../../App.css'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function FeaturedProducts() {
  const [isShow, setIsShow] = useState(-1);

  return (
    <div>
      <section className="featureProducts">
        <div className="center">
          <div className="title">
            <h2>Featured Products</h2>
            <div className="underline"></div>
          </div>

          <div className="content">
            {
              data.map((item, index) => {
                return <div className="container1" key={item.id}>
                  <div className="container2" onMouseEnter={() => setIsShow(index)}
                    onMouseLeave={() => setIsShow(-1)}>
                    <img src={item.img} alt="back banch"
                    />
                    {
                      isShow === index ? <a href="#" className='search'>
                        <FaSearch />
                      </a> : ""
                    }
                  </div>
                  <footer className="foot">
                    <h5>{item.title}</h5>
                    <p>$ {item.price}</p>
                  </footer>
                </div>
              })
            }
          </div>

        </div>
        <Link to="/products" className='btn'>all Products</Link>
      </section>
    </div>
  )
}

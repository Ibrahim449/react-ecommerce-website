import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../home/Footer';
import Navbar from '../home/Navbar';
import LinkHeader from './LinkHeader';
import { productsData } from './productsData';
import './productDetails.css';
// import CartItem from '../Cart/CartItem';

export default function ProductsDetails() {
  const {id} = useParams();
  const [detailsData, setDetailsData] = useState([]);

  // const handleClick = (id) => {
  //   console.log(id);
  //   return <CartItem itemId={id} />
  // }

  useEffect(() => {
    const detailPage = productsData.filter((item) => item.id === parseInt(id));
    // console.log(detailPage);
    setDetailsData(detailPage);
  }, [])

  return (
    <div>
      <Navbar />
      <LinkHeader productId={id} />
      
      <div className="centerDetail">
        <Link to="/products" className='btnDetails'>back to products</Link>
        {
          detailsData.map((item) => {
            return <div key={item.id}> 
                  <div className="productCenter">
          <section className="image">
            <img src={item.img} alt="baby" />
          </section>

          <section className="contentDetail">
            <h2>{item.title}</h2>
            <div className="custReview">
              <p className="review">{(item.review )}</p>
            </div>

            <h5 className="price">$ {item.price}</h5>
            <p className="desc">
            Cloud bread VHS hell of banjo bicycle rights jianbing 
            umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave 
            iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge
            </p>

            <p className="info">
                <span>Available : </span>
              {item.available}</p>
            <p className="info"><span>brand : </span>
              {item.company}
            </p>
            <hr />

            <section className="addCart">
              <div className="btnContainer">
                <div className="qtyBtn">
                  <button type='button' className='amountBtn'> - </button>
                  <h2 className='amount'>1</h2>
                  <button type='button' className='amountBtn'> + </button>
                </div>
                <Link to={`/cartitem`} className="btnCart">add to cart</Link>
              </div>
            </section>
          </section>
        </div>
               </div>
          })
        }
      </div>

      <Footer />
    </div>
  )
}

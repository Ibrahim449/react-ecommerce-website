// import React, { useEffect, useState } from 'react'
import './cartItem.css';
import { FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
// import { useGlobalContext } from '../Context';
// import { useParams } from 'react-router';
import Navbar from '../home/Navbar';
import CartLink from "./CartLink";
import Footer from '../home/Footer';
import { Link } from 'react-router-dom';
// import ProductsDetails from '../products/ProductsDetails';

const CartItem = () => {
    // const { cart, total, clearCart, removeBtn } = useGlobalContext();
    // const [cartDetail, setCartDetail] = useState([]);
    // const {id} = useParams();
    // // console.log(props.itemId);

    // useEffect(() => {
    //     const filterCart = cart.filter((item) => item.id === parseInt(id));
    //     setCartDetail(filterCart);
    // }, [])

    // console.log(cartDetail);

    // if(cart.length === 0) {
    //     return (
    //         <div>
    //             <Navbar />
    //             <CartLink />
    //             <h2>cart is empty</h2>
    //             <Footer />
    //         </div>
    //     )
    // }

    return (
        <div>
            <Navbar />
            <CartLink />


            <main className="page">
                <section className="centerCart">
                    <div className="cartHead">
                        <div className="cartContent">
                            <h5>item</h5>
                            <h5>price</h5>
                            <h5>quantity</h5>
                            <h5>subtotal</h5>
                            <span></span>
                        </div>
                        <hr />
                    </div>

                    <article className="cartItems">
                        <div className="cartTitle">
                            <img src="https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66?ts=1651755190&userId=usrQMwWEPx18KgLcP&cs=69f677f12b6ffd43" alt="Bar stool" />

                            <div>
                                <h5 className="name">Bar Stool</h5>
                                <p className="priceSmall">$ 40.99</p>
                            </div>
                        </div>

                        <h5 className="price">$ 40.99</h5>
                        <div className="amountBtns">
                            <button type='button' className='amountBtn'> <FiMinus /> </button>
                            <h2 className="amount">1</h2>
                            <button className="amountBtn"> <BsPlus /> </button>
                        </div>
                        <h5 className="subTotal">40.99</h5>
                        <button className="removeBtn">
                            <FaTrash />
                        </button>
                    </article>

                    <article className="cartItems">
                        <div className="cartTitle">
                            <img src="https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f?ts=1651755190&userId=usrQMwWEPx18KgLcP&cs=10057b18c667c520" alt="Bar stool" />

                            <div>
                                <h5 className="name">Armchair</h5>
                                <p className="priceSmall">$ 125.99</p>
                            </div>
                        </div>

                        <h5 className="price">$ 125.99</h5>
                        <div className="amountBtns">
                            <button type='button' className='amountBtn'> <FiMinus /> </button>
                            <h2 className="amount">2</h2>
                            <button className="amountBtn"> <BsPlus /> </button>
                        </div>
                        <h5 className="subTotal">125.99</h5>
                        <button className="removeBtn">
                            <FaTrash />
                        </button>
                    </article>

                    <hr />

                    <div className="linkContainer">
                        <Link to="/Products" className="linkBtn">continue shopping</Link>
                        <button className="clearBtn" type='button'>clear shopping cart</button>
                    </div>

                    <section className="totalValue">
                        <div>
                            <article>
                                <h5>subtotal: <span>166.98</span></h5>
                                <p>shopping fee : <span>5.34</span></p>
                                <hr />
                                <h4>order total : <span>$ 172.32</span></h4>
                            </article>
                            <Link to='/login'><button className="loginBtn">
                                Login
                            </button></Link>
                        </div>
                    </section>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default CartItem

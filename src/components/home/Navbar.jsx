import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.css';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { IoMdLogIn } from "react-icons/io";
// import { useGlobalContext } from '../Context';

export default function Navbar() {
    const  [isShow, setIsShow] = useState(false);
    // const { amount } = useGlobalContext();

    return (
        <div>
            <nav className='navbar'>
                <div className="brand">
                <a href="#"><img src="	https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg" alt="barndName" />
                    </a>
                </div>

                    <ul className={isShow ? "list resp" : "list"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Products">Products</Link></li>
                    </ul>

                <div className={isShow ? "btn btn1": "btn"}>
                    <Link to="/cartitem" className="cart">Cart 
                        <span className="cartContainer">
                        <FaShoppingCart /> 
                        <span className="cartValue">2</span>
                        </span>
                    </Link>
                    <Link to="/login">
                    <button className="login">Login <span><IoMdLogIn /></span></button>
                    </Link>
                </div>

                <div className="icon">
                    <button type='button' onClick={() => setIsShow(!isShow)}>{isShow ? <span>X</span> : <FaBars />}</button>
                </div>
            </nav>
        </div>
    )
}

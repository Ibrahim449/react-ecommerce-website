// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import FeaturedProducts from './components/FeaturedProducts';
// import CustomFurniture from './components/CustomFurniture';
// import NewsLetter from './components/NewsLetter';
// import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Products from './components/products/Products';
// import ProductsDetails from './components/products/ProductsDetails';
// import Navbar from './components/home/Navbar';
import Products from './components/Products';
// // import Details from './components/Details';
import ProductsDetails from './components/products/ProductsDetails';
// import CartContainer from './components/Cart/CartContainer';
import CartItem from './components/Cart/CartItem';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
// import CartContainer from './components/Cart/CartContainer';
// import ProductHeader from './components/products/ProductHeader';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/products' element={<Products />}>
          </Route>
            <Route path='/productsdetails/:id' element={<ProductsDetails />} > </Route>
          {/* <Route exact path='/products/productsdetails' children={< ProductsDetails />}></Route> */}
          <Route exact path='/cartitem/:id' element={<CartItem />}> </Route>
          <Route exact path='/cartitem' element={<CartItem />}> </Route>
          <Route exact path='/login' element={<Login />}> </Route>
          <Route exact path='/signup' element={<Signup />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

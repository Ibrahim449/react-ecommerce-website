import React from 'react'
import Footer from './home/Footer'
import Navbar from './home/Navbar'
import ProductHeader from './products/ProductHeader'
import ProductLink from './products/ProductLink'
import ProductsDetails from './products/ProductsDetails'
// import ProductsDetails from './products/ProductsDetails'

export default function Products() {
  return (
    <div>
      <Navbar />
      <ProductLink />
      <ProductHeader />
      {/* <ProductsDetails /> */}
      <Footer />
    </div>
  )
}

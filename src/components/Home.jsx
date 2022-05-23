import React from 'react'
import Navbar from './home/Navbar'
import Header from "./home/Header";
import FeaturedProducts from "./home/FeaturedProducts";
import CustomFurniture from "./home/CustomFurniture";
import NewsLetter from "./home/NewsLetter";
import Footer from "./home/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <FeaturedProducts />
      <CustomFurniture />
      <NewsLetter />
      <Footer />
    </div>
  )
}

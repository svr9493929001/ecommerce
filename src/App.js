import React from 'react';
import Header from './components/Header';
import Home from './components/Home'
import FeaturedProducts from './components/FeaturedProducts';
import SpecialOffers from './components/SpecialOffers';
import Testimonials from './components/Testimonials';
import OurProducts from './components/OurProducts';
function App() {

  return (
    <div style={{ marginTop: "5px"}}>
      <Header/>
      <Home />
      <SpecialOffers/>
      <FeaturedProducts />
      <OurProducts />
      <Testimonials/>
      <br/>
    </div>
  );
}

export default App;

import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Vendors from '../components/Vendors';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';
import { Contact } from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Events />
      <Vendors />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;

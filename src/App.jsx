import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import PricingSection from './components/PricingSection.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Statistics from './components/Statistics.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';
import CallToAction from './components/CallToAction.jsx';
import TeamSection from './components/TeamSection.jsx';
import FAQAccordion from './components/FAQAccordion.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
// import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>

      <div id="imageslider">
        <ImageSlider />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="statistics">
        <Statistics />
      </div>
      
      <div id="services">
        <Services />
      </div>

      

      <div id="reviews">
        <TestimonialSlider />
      </div>

      <div id="reviews">
        <CallToAction />
      </div>

      <div id="team">
        <TeamSection />
      </div>

      <div id="pricing">
        <PricingSection />
      </div>

      <div id="faq">
        <FAQAccordion />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;

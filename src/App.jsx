import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyUs from './components/WhyUs.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';
import TeamSection from './components/TeamSection.jsx';
import FAQAccordion from './components/FAQAccordion.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <ImageSlider />
      <About />
      <WhyUs />
      {/* <Services /> */}
      <TestimonialSlider />
      <TeamSection />
      <FAQAccordion />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

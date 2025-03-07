import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyUs from './components/WhyUs.jsx';
import TestimonialSlider from './components/TestimonialSlider.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

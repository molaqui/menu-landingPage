import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

import Alt_Features from './components/Alt_Features/Alt_Features'
import Values from './components/Values/Values'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Footer from './components/footer/footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // If true, animations will only happen once
    });
  }, []);

  return (
    <div className="index-page">
      <Navbar />
      <main className="main">
      <Header />
      <Alt_Features />
      <Values/>
      <Pricing/>
      <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './i18n'; // Import the i18n configuration
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import CustomModal from './components/Modal/CustomModal';  // Assurez-vous que le chemin est correct
import authService from '../src/components/APi/AuthService';  // Assurez-vous que le chemin est correct

import Alt_Features from './components/Alt_Features/Alt_Features';
import Values from './components/Values/Values';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      once: true, // If true, animations will only happen once
    });
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (user, logoFile) => {
    try {
      await authService.addUser(user, logoFile);
      closeModal(); // Ferme le modal en cas de soumission réussie
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="index-page">
      <Navbar openModal={openModal} />
      <main className="main">
        <Header openModal={openModal} />
        <Alt_Features />
        <Values />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <CustomModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
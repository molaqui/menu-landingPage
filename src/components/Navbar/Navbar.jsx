import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Make sure to create this CSS file
import authService from '../APi/AuthService';
import CustomModal from '../Modal/CustomModal';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (user, logoFile) => {
    try {
      await authService.addUser(user, logoFile);
      closeModal(); // Close the modal on successful submission
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="index.html" className="logo d-flex align-items-center me-auto">
            <img src="assets/img/logo.png" alt="Logo" />
            <h1 className="sitename">FlexStart</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">Home<br /></a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Our service</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="https://lmenu-admin.netlify.app/">Login</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <button className="btn-getstarted flex-md-shrink-0" onClick={openModal}>Get Started</button>
        </div>
      </header>

      <CustomModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
    </>
  );
}

export default Navbar;
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'flag-icon-css/css/flag-icons.min.css';
import './Navbar.css'; // Import the CSS file

function Navbar({ openModal }) {
  const { t, i18n } = useTranslation();
  
  // Initialize the selectedLanguage state based on localStorage
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    const languageMap = {
      en: { flag: 'us', label: 'English' },
      fr: { flag: 'fr', label: 'Français' },
      zh: { flag: 'cn', label: '中文' },
      ar: { flag: 'ma', label: 'العربية' }
    };
    return languageMap[storedLang] || languageMap['en'];
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Change language based on selectedLanguage
    i18n.changeLanguage(selectedLanguage.lng);
  }, [selectedLanguage, i18n]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const changeLanguage = (lng) => {
    const languageMap = {
      en: { flag: 'us', label: 'English' },
      fr: { flag: 'fr', label: 'Français' },
      zh: { flag: 'cn', label: '中文' },
      ar: { flag: 'ma', label: 'العربية' }
    };
    const language = languageMap[lng];
    setSelectedLanguage(language);
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <header id="header" className={`header d-flex align-items-center fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid container-xxl position-relative d-flex align-items-center">
        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <img src="logo-color.png" alt="Logo" style={{ width: '190px', height: 'auto' }} />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active">{t('home')}</a></li>
            <li><a href="#about">{t('about')}</a></li>
            <li><a href="#service">{t('service')}</a></li>
            <li><a href="#pricing">{t('pricing')}</a></li>
            <li><a href="#contact">{t('contact')}</a></li>
            <li><a href="https://lmenu-admin.netlify.app/">{t('login')}</a></li>
          </ul>
         
        </nav>

        <div className="dropdown" style={{ marginLeft: '15px' }}> {/* Space between the element and the dropdown */}
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="languageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className={`flag-icon flag-icon-${selectedLanguage.flag}`}></span> {selectedLanguage.label}
          </button>
          <ul className="dropdown-menu" aria-labelledby="languageDropdown">
            <li>
              <button className="dropdown-item" onClick={() => changeLanguage('en')}>
                <span className="flag-icon flag-icon-us"></span> English
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => changeLanguage('fr')}>
                <span className="flag-icon flag-icon-fr"></span> Français
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => changeLanguage('zh')}>
                <span className="flag-icon flag-icon-cn"></span> 中文
              </button>
            </li>
            <li>
              <button className="dropdown-item" onClick={() => changeLanguage('ar')}>
                <span className="flag-icon flag-icon-ma"></span> العربية
              </button>
            </li>
          </ul>
        </div>

        <button className="btn-getstarted flex-md-shrink-0" onClick={openModal}>
          {t('get_started')}
        </button>
      </div>
    </header>
  );
}

export default Navbar;

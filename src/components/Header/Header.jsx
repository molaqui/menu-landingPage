import React from 'react';
import { useTranslation } from 'react-i18next';

function Header({ openModal }) {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              {t('hero_title')}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              {t('hero_description')}
            </p>
            <div className="d-flex flex-column flex-md-row" data-aos="fade-up" data-aos-delay="200">
              <button className="btn-get-started" onClick={openModal}>
                {t('get_started')} <i className="bi bi-arrow-right"></i>
              </button>
              <a
                href="https://lmenu.netlify.app/test101" 
                target='_blank'
                className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"
              >
                <i className="bi bi-play-circle"></i><span>{t('view_demo')}</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out">
            <img src="header.png" className="img-fluid animated" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;

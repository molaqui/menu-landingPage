import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css'; // Make sure this CSS file is created and contains appropriate styles

function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="d-flex align-items-center">
              <img src="logo-color.png" alt={t('footer_logo_alt')} style={{ width: '190px', height: 'auto' }} />
            </a>
            <div className="footer-contact pt-3">
              <p>{t('footer_address')}</p>
              <p className="mt-3"><strong>{t('footer_phone_label')}:</strong> <span>{t('footer_phone')}</span></p>
              <p><strong>{t('footer_email_label')}:</strong> <span>{t('footer_email')}</span></p>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>{t('footer_useful_links')}</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">{t('footer_home')}</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">{t('footer_about')}</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">{t('footer_services')}</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>{t('footer_our_services')}</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">{t('footer_web_design')}</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">{t('footer_web_development')}</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">{t('footer_product_management')}</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">{t('footer_marketing')}</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h4>{t('footer_follow_us')}</h4>
            <p>{t('footer_follow_us_description')}</p>
            <div className="social-links d-flex">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>{t('footer_copyright_start')} <span>{t('footer_copyright')}</span> <strong className="px-1 sitename"></strong> <span>{t('footer_copyright_end')}</span></p>
        <div className="credits">
          {t('footer_credits_start')} <a href="#">{t('footer_credits_name')}</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

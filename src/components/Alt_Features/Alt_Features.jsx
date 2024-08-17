import React from 'react';
import { useTranslation } from 'react-i18next';
import './Alt_Features.css'; // Make sure to create this CSS file and add the styles

function Alt_Features() {
  const { t } = useTranslation();

  return (
    <section id="about" className="alt-features section">
      <div className="container">
        <div className="container section-title mt-5" data-aos="fade-up">
          <h2>{t('discover_lmenu')}<b>LMENU</b></h2>
        </div>
        <div className="row gy-5">
          <div className="col-xl-7 d-flex order-2 order-xl-1" data-aos="fade-up" data-aos-delay="200">
            <div className="row align-self-center gy-5">
              <div className="col-md-6 icon-box">
                <i className="bi bi-qr-code-scan icon"></i>
                <div>
                  <h4>{t('scan_qr_code')}</h4>
                  <p>{t('scan_qr_code_description')}</p>
                </div>
              </div>

              <div className="col-md-6 icon-box">
                <i className="bi bi-globe icon"></i>
                <div>
                  <h4>{t('online_order')}</h4>
                  <p>{t('online_order_description')}</p>
                </div>
              </div>

              <div className="col-md-6 icon-box">
                <i className="bi bi-translate icon"></i>
                <div>
                  <h4>{t('multilingual_menu')}</h4>
                  <p>{t('multilingual_menu_description')}</p>
                </div>
              </div>

              <div className="col-md-6 icon-box">
                <i className="bi bi-cart icon"></i>
                <div>
                  <h4>{t('table_order')}</h4>
                  <p>{t('table_order_description')}</p>
                </div>
              </div>

              <div className="col-md-6 icon-box">
                <i className="bi bi-info-circle icon"></i>
                <div>
                  <h4>{t('info_and_offers')}</h4>
                  <p>{t('info_and_offers_description')}</p>
                </div>
              </div>

              <div className="col-md-6 icon-box">
                <i className="bi bi-chat-dots icon"></i>
                <div>
                  <h4>{t('contact_us')}</h4>
                  <p>{t('contact_us_description')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 d-flex align-items-center order-1 order-xl-2" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/MENU-scan.gif" className="img-fluid" alt="Alt Features" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Alt_Features;

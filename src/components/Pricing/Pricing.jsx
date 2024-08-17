import React from 'react';
import { useTranslation } from 'react-i18next';
 // Ensure this CSS file is created and contains appropriate styles

function Pricing() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t('pricing_title')}</h2>
        <p>{t('pricing_subtitle')}</p>
      </div>
      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-tem">
              <h3 style={{ color: '#20c997' }}>{t('free_plan_title')}</h3>
              <div className="price"><sup>$</sup>0<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-box" style={{ color: '#20c997' }}></i>
              </div>
              <ul>
                <li>{t('free_plan_feature_1')}</li>
                <li>{t('free_plan_feature_2')}</li>
                <li>{t('free_plan_feature_3')}</li>
                <li className="na">{t('free_plan_feature_4')}</li>
                <li className="na">{t('free_plan_feature_5')}</li>
              </ul>
              <a href="#" className="btn-buy">{t('buy_now')}</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-tem">
              <span className="featured">{t('featured')}</span>
              <h3 style={{ color: '#0dcaf0' }}>{t('starter_plan_title')}</h3>
              <div className="price"><sup>$</sup>19<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-send" style={{ color: '#0dcaf0' }}></i>
              </div>
              <ul>
                <li>{t('starter_plan_feature_1')}</li>
                <li>{t('starter_plan_feature_2')}</li>
                <li>{t('starter_plan_feature_3')}</li>
                <li>{t('starter_plan_feature_4')}</li>
                <li className="na">{t('starter_plan_feature_5')}</li>
              </ul>
              <a href="#" className="btn-buy">{t('buy_now')}</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="pricing-tem">
              <h3 style={{ color: '#fd7e14' }}>{t('business_plan_title')}</h3>
              <div className="price"><sup>$</sup>29<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-airplane" style={{ color: '#fd7e14' }}></i>
              </div>
              <ul>
                <li>{t('business_plan_feature_1')}</li>
                <li>{t('business_plan_feature_2')}</li>
                <li>{t('business_plan_feature_3')}</li>
                <li>{t('business_plan_feature_4')}</li>
                <li>{t('business_plan_feature_5')}</li>
              </ul>
              <a href="#" className="btn-buy">{t('buy_now')}</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="pricing-tem">
              <h3 style={{ color: '#0d6efd' }}>{t('ultimate_plan_title')}</h3>
              <div className="price"><sup>$</sup>49<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-rocket" style={{ color: '#0d6efd' }}></i>
              </div>
              <ul>
                <li>{t('ultimate_plan_feature_1')}</li>
                <li>{t('ultimate_plan_feature_2')}</li>
                <li>{t('ultimate_plan_feature_3')}</li>
                <li>{t('ultimate_plan_feature_4')}</li>
                <li>{t('ultimate_plan_feature_5')}</li>
              </ul>
              <a href="#" className="btn-buy">{t('buy_now')}</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;

import React from 'react';
import { useTranslation } from 'react-i18next';
// Ensure this CSS file is created and contains appropriate styles

function Values() {
  const { t } = useTranslation();

  return (
    <section id="service" className="values section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{t('how_it_works')}</h2>
        <p dangerouslySetInnerHTML={{ __html: t('simple_steps') }} />
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card">
              <img src="assets/img/signIn.jpg" className="img-fluid" alt={t('create_account')} />
              <h3>{t('create_account')}</h3>
              <p>{t('create_account_description')}</p>
            </div>
          </div>
          {/* End Card Item */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <img src="assets/img/upload.jpg" className="img-fluid" alt={t('add_dishes')} />
              <h3>{t('add_dishes')}</h3>
              <p>{t('add_dishes_description')}</p>
            </div>
          </div>
          {/* End Card Item */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <img src="assets/img/notifcation.jpg" className="img-fluid" alt={t('receive_orders')} />
              <h3>{t('receive_orders')}</h3>
              <p>{t('receive_orders_description')}</p>
            </div>
          </div>
          {/* End Card Item */}

        </div>
      </div>
    </section>
  );
}

export default Values;

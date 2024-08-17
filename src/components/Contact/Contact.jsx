import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_96527i8', 'template_d1a044g', e.target, 'RJJwbIAMir8WRvkFt')
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: t('contact_success_title'),
          text: t('contact_success_message'),
        });
      }, (error) => {
        console.log(error.text);
        setErrorMessage(t('contact_error_message'));
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: t('contact_error_title'),
          text: t('contact_error_message'),
        });
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t('contact_title')}</h2>
        <p>{t('contact_subtitle')}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-3">
              <img src="assets/img/contact.jpg" alt={t('contact_image_alt')} />
            </div>
          </div>

          <div className="col-lg-6">
            <form onSubmit={sendEmail} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder={t('contact_name_placeholder')}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder={t('contact_email_placeholder')}
                    required
                  />
                </div>

                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder={t('contact_subject_placeholder')}
                    required
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder={t('contact_message_placeholder')}
                    required
                  ></textarea>
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      t('contact_send_button')
                    )}
                  </button>
                  {errorMessage && <div className="error-message">{errorMessage}</div>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

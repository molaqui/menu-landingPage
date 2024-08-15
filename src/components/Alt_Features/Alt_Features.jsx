import React from 'react';

function Alt_Features() {
  return (
    <section id="about" className="alt-features section">
      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-7 d-flex order-2 order-xl-1" data-aos="fade-up" data-aos-delay="200">
            <div className="row align-self-center gy-5">
              <h2>Découvrez Gastro</h2>
              <div className="col-md-6 icon-box">
                <i className="bi bi-calendar-check" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                <div>
                  <h4>Réservation en ligne</h4>
                  <p>Facilitez la réservation pour vos clients avec notre système de réservation en ligne simple et efficace.</p>
                </div>
              </div>

              <div className="col-md-6 icon-box">
                <i className="bi bi-phone" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                <div>
                  <h4>Menu digital</h4>
                  <p>Recevez le menu automatiquement sur votre téléphone, avec des photos et des descriptions attrayantes.</p>
                </div>
              </div>

              <div className="col-md-6 icon-box">
                <i className="bi bi-cart" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                <div>
                  <h4>Commande mobile</h4>
                  <p>Permettez à vos clients de passer commande directement depuis leur mobile, où qu'ils soient.</p>
                </div>
              </div>

              <div className="col-md-6 icon-box">
                <i className="bi bi-translate" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                <div>
                  <h4>Menu multilingue</h4>
                  <p>Offrez un menu disponible en plusieurs langues pour satisfaire tous vos clients internationaux.</p>
                </div>
              </div>

              <div className="col-md-6 icon-box">
                <i className="bi bi-info-circle" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                <div>
                  <h4>Informations et offres</h4>
                  <p>Affichez les informations importantes et les offres du moment directement sur le menu digital.</p>
                </div>
              </div>

              <div className="col-md-6 icon-box">
                <i className="bi bi-briefcase" style={{ fontSize: '2rem', color: '#007bff' }}></i>
                <div>
                  <h4>Adaptabilité</h4>
                  <p>Gastro s’adapte à votre métier : Restaurant, Café, Hôtel, Bar, Spa et bien plus encore.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 d-flex align-items-center order-1 order-xl-2" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/alt-features.png" className="img-fluid" alt="Alt Features" />
          </div>
        </div>
      </div>
      
    </section>

  );
}

export default Alt_Features;
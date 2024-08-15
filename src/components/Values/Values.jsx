import React from 'react';

function Values() {
  return (
    <section id="service" className="values section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Comment ça marche ?</h2>
        <p>En <span style={{ color: 'rgb(228, 192, 35)' }}>3 étapes simples</span>, lancez votre <span style={{ color: '#1E90FF' }}>menu digital</span> !<br /></p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card">
              <img src="assets/img/signIn.jpg" className="img-fluid" alt="Créer votre compte" />
              <h3>Créez votre compte</h3>
              <p>Créez un compte et importez votre menu en quelques clics.</p>
            </div>
          </div>
          {/* End Card Item */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <img src="assets/img/upload.jpg" className="img-fluid" alt="Ajoutez vos plats" />
              <h3>Ajoutez vos plats</h3>
              <p>Diffusez votre menu et laissez vos clients commander en un clin d'œil!</p>
            </div>
          </div>
          {/* End Card Item */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <img src="assets/img/notifcation.jpg" className="img-fluid" alt="Recevez vos commandes" />
              <h3>Recevez vos commandes</h3>
              <p>Suivez vos commandes en toute sérénité et concentrez-vous sur ce qui compte vraiment!</p>
            </div>
          </div>
          {/* End Card Item */}

        </div>
      </div>
    </section>
  );
}

export default Values;
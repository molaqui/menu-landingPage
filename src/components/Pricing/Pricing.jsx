import React from 'react';

function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Pricing</h2>
        <p>Check Our Affordable Pricing<br /></p>
      </div>
      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="pricing-tem">
              <h3 style={{ color: '#20c997' }}>Free Plan</h3>
              <div className="price"><sup>$</sup>0<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-box" style={{ color: '#20c997' }}></i>
              </div>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li className="na">Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-tem">
              <span className="featured">Featured</span>
              <h3 style={{ color: '#0dcaf0' }}>Starter Plan</h3>
              <div className="price"><sup>$</sup>19<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-send" style={{ color: '#0dcaf0' }}></i>
              </div>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li className="na">Massa ultricies mi</li>
              </ul>
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="pricing-tem">
              <h3 style={{ color: '#fd7e14' }}>Business Plan</h3>
              <div className="price"><sup>$</sup>29<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-airplane" style={{ color: '#fd7e14' }}></i>
              </div>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="pricing-tem">
              <h3 style={{ color: '#0d6efd' }}>Ultimate Plan</h3>
              <div className="price"><sup>$</sup>49<span> / mo</span></div>
              <div className="icon">
                <i className="bi bi-rocket" style={{ color: '#0d6efd' }}></i>
              </div>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <a href="#" className="btn-buy">Buy Now</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;
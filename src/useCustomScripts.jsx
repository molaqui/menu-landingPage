import { useEffect } from 'react';

const useCustomScripts = () => {
  useEffect(() => {
    // Fonction de gestion du défilement
    const toggleScrolled = () => {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader || (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top'))) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    };

    // Ajoute des écouteurs d'événements
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);

    // Gestion du bouton de navigation mobile
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    const mobileNavToogle = () => {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    };
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    // Gestion du bouton de retour en haut de la page
    const scrollTop = document.querySelector('.scroll-top');
    const toggleScrollTop = () => {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    };
    if (scrollTop) {
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Fonction d'initialisation d'AOS
    const aosInit = () => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }
    };
    window.addEventListener('load', aosInit);

    // Fonction d'initialisation de GLightbox
    const initGlightbox = () => {
      if (typeof GLightbox !== 'undefined') {
        const glightbox = GLightbox({
          selector: '.glightbox'
        });
      }
    };
    window.addEventListener('load', initGlightbox);

    // Fonction d'initialisation de PureCounter
    const initPureCounter = () => {
      if (typeof PureCounter !== 'undefined') {
        new PureCounter();
      }
    };
    window.addEventListener('load', initPureCounter);

    // Fonction de basculement des éléments FAQ
    const faqToggle = () => {
      document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
          faqItem.parentNode.classList.toggle('faq-active');
        });
      });
    };
    window.addEventListener('load', faqToggle);

    // Fonction d'initialisation d'Isotope
    const initIsotope = () => {
      document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
        let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
        let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
        let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

        let initIsotope;
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
          initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
          filters.addEventListener('click', function() {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aosInit === 'function') {
              aosInit();
            }
          }, false);
        });
      });
    };
    window.addEventListener('load', initIsotope);

    // Fonction d'initialisation des sliders Swiper
    const initSwiper = () => {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    };
    window.addEventListener("load", initSwiper);

    // Correction de la position de défilement pour les liens avec hash
    const correctHashScrolling = () => {
      if (window.location.hash) {
        const section = document.querySelector(window.location.hash);
        if (section) {
          setTimeout(() => {
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };
    window.addEventListener('load', correctHashScrolling);

    // Fonction de scrollspy pour le menu de navigation
    const navmenuScrollspy = () => {
      const navmenulinks = document.querySelectorAll('.navmenu a');
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        const section = document.querySelector(navmenulink.hash);
        if (!section) return;
        const position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      });
    };
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

    // Nettoyage des écouteurs d'événements à la désinstallation du composant
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener('click', mobileNavToogle);
      }
      if (scrollTop) {
        scrollTop.removeEventListener('click', toggleScrollTop);
      }
      window.removeEventListener('load', aosInit);
      window.removeEventListener('load', initGlightbox);
      window.removeEventListener('load', initPureCounter);
      window.removeEventListener('load', faqToggle);
      window.removeEventListener('load', initIsotope);
      window.removeEventListener('load', initSwiper);
      window.removeEventListener('load', correctHashScrolling);
      document.removeEventListener('scroll', navmenuScrollspy);
    };
  }, []); // Dépendances vides, s'exécute une fois au montage
};

export default useCustomScripts;

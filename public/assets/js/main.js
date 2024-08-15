import { useEffect } from 'react';

const useCustomScripts = () => {
  useEffect(() => {
    // Fonction de gestion de défilement
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
    if (mobileNavToggleBtn) {
      const mobileNavToogle = () => {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavToggleBtn.classList.toggle('bi-list');
        mobileNavToggleBtn.classList.toggle('bi-x');
      };
      mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
    }

    // Gestion du bouton de retour en haut de la page
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const toggleScrollTop = () => {
        if (scrollTop) {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
      };
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      window.addEventListener('load', toggleScrollTop);
      document.addEventListener('scroll', toggleScrollTop);
    }

    // Nettoie les écouteurs d'événements à la désinstallation du composant
    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      window.removeEventListener('load', toggleScrolled);
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener('click', mobileNavToogle);
      }
      if (scrollTop) {
        scrollTop.removeEventListener('click', toggleScrollTop);
      }
    };
  }, []); // Dépendances vides, s'exécute une fois au montage
};

export default useCustomScripts;

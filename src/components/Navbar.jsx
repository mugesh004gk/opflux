import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from './LanguageContext';

const Navbar = () => {
  const { lang, setLang, t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <Link to="/" className="brand-logo" onClick={handleHomeClick}>
          <div className="logo-container">
            <span className="logo-inner-bracket"></span>
            <span className="logo-text">Op<span className="logo-accent">Flux</span></span>
          </div>
        </Link>
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="primary-nav">
          <NavLink to="/" onClick={handleHomeClick} className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.home')}</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.about')}</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.services')}</NavLink>
          <NavLink to="/operations" className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.operations')}</NavLink>
          <NavLink to="/case-study" className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.caseStudy')}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>{t('nav.contact')}</NavLink>
          
          <div className="lang-switch mobile-only">
            <span className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>EN</span>
            <span className="lang-divider">|</span>
            <span className={`lang-btn ${lang === 'fr' ? 'active' : ''}`} onClick={() => setLang('fr')}>FR</span>
          </div>
        </div>
        <div className="nav-actions">
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu" 
            aria-controls="primary-nav" 
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <NavLink to="/contact" className="cta-btn" data-i18n="nav.cta">{t('nav.cta')}</NavLink>
          <div className="lang-switch">
            <span className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')} id="btn-en">EN</span>
            <span className="lang-divider">|</span>
            <span className={`lang-btn ${lang === 'fr' ? 'active' : ''}`} onClick={() => setLang('fr')} id="btn-fr">FR</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

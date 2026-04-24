import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from './LanguageContext';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="brand-logo">
              <div className="logo-container">
                <span className="logo-inner-bracket"></span>
                <span className="logo-text">Op<span className="logo-accent">Flux</span></span>
              </div>
            </Link>
            <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '250px' }}>
              {t('footer.tagline')}
            </p>
          </div>
          <div className="footer-col">
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><Link to="/about">{t('footer.about')}</Link></li>
              <li><Link to="/services">{t('footer.services')}</Link></li>
              <li><Link to="/case-study">{t('footer.cases')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.systems')}</h4>
            <ul>
              <li><Link to="/operations">{t('footer.ops')}</Link></li>
              <li><Link to="/contact">{t('footer.contact')}</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>{t('footer.status')}</h4>
            <p style={{ color: 'var(--text-primary)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="teal" style={{ fontSize: '1.5rem' }}>●</span> 
              <span>{t('footer.allSystems')}</span>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

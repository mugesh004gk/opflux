import React, { useEffect, useRef } from 'react';
import { useTranslation } from './LanguageContext';
import { 
  Zap, Ruler, Timer, Settings, Package, TrendingUp, 
  BarChart3, PlugZap, Wrench, Link2, Target, 
  AlertTriangle, RefreshCw, Mail, Box, Truck, CheckCircle2 
} from 'lucide-react';

export const Hero = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const heroRight = document.querySelector('.hero-right-panel');
      const heroGrid = document.querySelector('.hero-grid-bg');
      if (window.innerWidth > 1024 && heroRight && heroGrid) {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        heroRight.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <video autoPlay muted loop playsInline preload="none" poster="/hero-bg.webp" className="hero-vid-bg" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-grid-bg"></div>
      <div className="hero-split">
        <div className="hero-left-panel">
          <div className="system-online-badge reveal">
            <span className="badge-dot"></span>
            <span>SYSTEM ONLINE</span>
          </div>
          <h1 className="reveal hero-h1">{t('hero.title')}</h1>
          <p className="reveal hero-desc">{t('hero.descBlock2')}</p>
          <div className="hero-btns reveal">
            <a href="#contact" className="cta-btn grow-hover">{t('hero.btnContact')}</a>
            <a href="#operations" className="cta-btn outline grow-hover">{t('hero.btnExplore')}</a>
          </div>
          <div className="reveal hero-quote-bar">
            <p>{t('hero.descBlock1')}</p>
          </div>
        </div>
        <div className="hero-right-panel reveal">
          <div className="tech-ring ring-1"><div className="data-node"></div></div>
          <div className="tech-ring ring-2"><div className="data-node reverse-pos"></div></div>
          <div className="machine-aura"></div>
          <div className="animated-machine">
            <div className="vertical-scanner-line"></div>
            <div className="machine-mask">
              <img src="/machine-core.webp" alt="OpFlux robotic kiosk operations system" className="machine-img" width="1000" height="1200" />
            </div>
            <div className="floating-hero-card fhc-right">
              <h4 className="fhc-value">100%</h4>
              <p className="fhc-label">Precision</p>
            </div>
            <div className="floating-hero-card fhc-left">
              <h4 className="fhc-value">Zero</h4>
              <p className="fhc-label">Stock-Outs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhatMakesOpflux = () => {
  const { t } = useTranslation();
  return (
    <section className="impact-section">
      <div className="impact-bg-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head reveal">
          <span className="subtitle" style={{ color: 'var(--accent-teal)' }}>Operational Excellence</span>
          <h2 style={{ color: '#fff' }}>{t('diff.title')}</h2>
        </div>
        
        <div className="impact-grid reveal">
          <div className="impact-main">
            <div className="impact-main-card">
              <div className="impact-main-icon"><TrendingUp size={48} /></div>
              <h3>{t('diff.desc1')}</h3>
              <p>{t('diff.desc2')} <span className="teal">{t('diff.desc3')}</span></p>
            </div>
          </div>
          
          <div className="impact-side">
            <div className="impact-card">
              <Zap size={32} className="teal" />
              <div>
                <h4>Zero-Latency Response</h4>
                <p>Distributed engineering mapped to your deployment grid.</p>
              </div>
            </div>
            
            <div className="impact-card">
              <Ruler size={32} className="teal" />
              <div>
                <h4>Structural Yield</h4>
                <p>Optimizing supply chains for zero-out-of-stock events.</p>
              </div>
            </div>

            <div className="impact-card">
              <Box size={32} className="teal" />
              <div>
                <h4>{t('diff.d1.title')}</h4>
                <p>{t('diff.d1.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyOpflux = () => {
  const { t } = useTranslation();
  return (
    <section id="why-opflux" className="bg-dark">
      <div className="container">
        <div className="section-head reveal">
          <h2>{t('why.title')}</h2>
          <div style={{ maxWidth: '650px', margin: '0 auto', paddingLeft: '1.5rem', borderLeft: '3px solid var(--text-secondary)' }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', textAlign: 'left' }}>{t('why.subtitle')}</p>
          </div>
        </div>
        <div className="grid-2 reveal" style={{ alignItems: 'center', gap: '4rem', marginBottom: '5rem' }}>
          <div className="why-text">
            <h4 className="teal" style={{ marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.1rem' }}>{t('why.hBridge')}</h4>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.6, color: '#fff', marginBottom: '2rem' }}>{t('why.bridgeDesc')}</p>
            <div style={{ padding: '2rem', background: 'rgba(46,196,182,0.05)', borderLeft: '4px solid var(--accent-teal)', borderRadius: '0 20px 20px 0' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', margin: 0, fontStyle: 'italic' }}>{t('why.bridgeDesc2')}</p>
            </div>
          </div>
          <div className="img-box reveal media-frame" style={{ width: '100%', height: 'auto', minHeight: '350px', position: 'relative', border: '1px solid rgba(46,196,182,0.1)' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,31,51,0.5), transparent)', zIndex: 2 }}></div>
            <img loading="lazy" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop&fm=webp" alt="High-tech circuit and automated systems monitoring dashboard" width="1200" height="800" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6) contrast(1.2) saturate(0.8)' }} />
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', padding: '1.5rem', background: 'rgba(5,15,30,0.95)', backdropFilter: 'blur(10px)', border: '2px solid rgba(46,196,182,0.3)', borderRadius: '12px', zIndex: 5, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-teal)', marginBottom: '0.5rem', letterSpacing: '2px', fontWeight: 700 }}>VIRTUALIZED OPS</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>99.8% UPTIME</div>
            </div>
          </div>
        </div>
        <div className="grid-3 reveal">
          <div className="glass-card" style={{ borderTop: '3px solid var(--accent-teal)', padding: '3rem' }}>
            <div style={{ marginBottom: '1.5rem' }}><BarChart3 size={40} className="teal" /></div>
            <h4>{t('why.li1')}</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Real-time data visualization and health monitoring for your entire fleet.</p>
          </div>
          <div className="glass-card" style={{ borderTop: '3px solid var(--accent-teal)', padding: '3rem' }}>
            <div style={{ marginBottom: '1.5rem' }}><PlugZap size={40} className="teal" /></div>
            <h4>{t('why.li2')}</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Modular operational support that grows as you deploy more locations.</p>
          </div>
          <div className="glass-card" style={{ borderTop: '3px solid var(--accent-teal)', padding: '3rem' }}>
            <div style={{ marginBottom: '1.5rem' }}><Wrench size={40} className="teal" /></div>
            <h4>{t('why.li3')}</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Strict protocols and field-proven engineering standards for maintenance.</p>
          </div>
        </div>
        <div className="text-center reveal" style={{ marginTop: '5rem' }}>
          <h4 className="teal" style={{ fontSize: '1.6rem', fontWeight: 500 }}>{t('why.footer')}</h4>
          <div style={{ width: '80px', height: '4px', background: 'var(--accent-teal)', margin: '2rem auto', borderRadius: '2px', opacity: 0.5 }}></div>
        </div>
      </div>
    </section>
  );
};

export const Strategy = () => {
  const { t } = useTranslation();
  return (
    <section className="strategy-section">
      <div className="strategy-bg-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head reveal">
          <span className="subtitle" style={{ color: 'var(--accent-teal)' }}>{t('approach.subtitle')}</span>
          <h2 style={{ color: '#fff' }}>{t('approach.title')}</h2>
        </div>
        
        <div className="strategy-grid">
          <div className="strategy-card reveal card-large">
            <div className="card-num">01</div>
            <div className="card-icon-box"><Target className="teal" size={32} /></div>
            <h3>{t('approach.a1.title')}</h3>
            <p>{t('approach.a1.desc')}</p>
          </div>
          
          <div className="strategy-card reveal card-tall">
            <div className="card-num">02</div>
            <div className="card-icon-box"><RefreshCw className="teal" size={32} /></div>
            <h3>{t('approach.a2.title')}</h3>
            <p>{t('approach.a2.desc')}</p>
          </div>

          <div className="strategy-card reveal">
            <div className="card-num">03</div>
            <div className="card-icon-box"><Zap className="teal" size={32} /></div>
            <h3>{t('approach.a3.title')}</h3>
            <p>{t('approach.a3.desc')}</p>
          </div>

          <div className="strategy-card reveal">
            <div className="card-num">04</div>
            <div className="card-icon-box"><Settings className="teal" size={32} /></div>
            <h3>{t('approach.a4.title')}</h3>
            <p>{t('approach.a4.desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Foundation = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-navy">
      <div className="container">
        <div className="section-head reveal">
          <span className="subtitle">{t('pillars.subtitle')}</span>
          <h2>{t('pillars.title')}</h2>
          <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '1.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ fontSize: '1.1rem', margin: 0 }}>{t('pillars.desc')}</p>
          </div>
        </div>
        <div className="grid-3" style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div className="glass-card reveal" style={{ flex: '1 1 300px', maxWidth: '350px', borderTop: '3px solid var(--accent-teal)' }}>
            <div style={{ background: 'rgba(46,196,182,0.1)', padding: '0.5rem 1rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1.5rem' }}>
              <h4 className="teal" style={{ margin: 0, fontSize: '1rem' }}>{t('pillars.p1.title')}</h4>
            </div>
            <p style={{ fontSize: '1rem', margin: 0, minHeight: '60px' }}>{t('pillars.p1.desc')}</p>
          </div>
          <div className="glass-card reveal" style={{ flex: '1 1 300px', maxWidth: '350px', borderTop: '3px solid var(--accent-teal)' }}>
            <div style={{ background: 'rgba(46,196,182,0.1)', padding: '0.5rem 1rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1.5rem' }}>
              <h4 className="teal" style={{ margin: 0, fontSize: '1rem' }}>{t('pillars.p2.title')}</h4>
            </div>
            <p style={{ fontSize: '1rem', margin: 0, minHeight: '60px' }}>{t('pillars.p2.desc')}</p>
          </div>
          <div className="glass-card reveal" style={{ flex: '1 1 300px', maxWidth: '350px', borderTop: '3px solid var(--accent-teal)' }}>
            <div style={{ background: 'rgba(46,196,182,0.1)', padding: '0.5rem 1rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1.5rem' }}>
              <h4 className="teal" style={{ margin: 0, fontSize: '1rem' }}>{t('pillars.p3.title')}</h4>
            </div>
            <p style={{ fontSize: '1rem', margin: 0, minHeight: '60px' }}>{t('pillars.p3.desc')}</p>
          </div>
          <div className="glass-card reveal" style={{ flex: '1 1 300px', maxWidth: '350px', borderTop: '3px solid var(--accent-teal)' }}>
            <div style={{ background: 'rgba(46,196,182,0.1)', padding: '0.5rem 1rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1.5rem' }}>
              <h4 className="teal" style={{ margin: 0, fontSize: '1rem' }}>{t('pillars.p4.title')}</h4>
            </div>
            <p style={{ fontSize: '1rem', margin: 0, minHeight: '60px' }}>{t('pillars.p4.desc')}</p>
          </div>
          <div className="glass-card reveal" style={{ flex: '1 1 300px', maxWidth: '350px', borderTop: '3px solid var(--accent-teal)' }}>
            <div style={{ background: 'rgba(46,196,182,0.1)', padding: '0.5rem 1rem', borderRadius: '20px', display: 'inline-block', marginBottom: '1.5rem' }}>
              <h4 className="teal" style={{ margin: 0, fontSize: '1rem' }}>{t('pillars.p5.title')}</h4>
            </div>
            <p style={{ fontSize: '1rem', margin: 0, minHeight: '60px' }}>{t('pillars.p5.desc')}</p>
          </div>
        </div>
        <div className="text-center reveal" style={{ marginTop: '4rem' }}>
          <h4 style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: '1.3rem' }}>{t('pillars.footer')}</h4>
        </div>
      </div>
    </section>
  );
};

export const Clients = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-dark" style={{ background: "linear-gradient(to bottom, var(--bg-dark), rgba(11,31,51,0.4)), url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z\\' fill=\\'%232ec4b6\\' fill-opacity=\\'0.015\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}>
      <div className="container">
        <div className="section-head reveal">
          <h2>{t('clients.title')}</h2>
          <p>{t('clients.desc1')}</p>
        </div>
        <div className="grid-2 reveal">
          <div className="glass-card text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '180px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.3s ease' }}>
            <div style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 800, fontFamily: 'Outfit', letterSpacing: '-1px', marginBottom: '0.5rem', textShadow: '0 0 20px rgba(255,255,255,0.2)' }}>Coffee Marcel</div>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px' }}>Premium Robotic Kiosks</span>
          </div>
          <div className="glass-card text-center" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '180px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.3s ease' }}>
            <div style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 800, fontFamily: 'Outfit', letterSpacing: '-1px', marginBottom: '0.5rem', textShadow: '0 0 20px rgba(255,255,255,0.2)' }}>VLT Robotics</div>
            <span style={{ fontSize: '0.85rem', color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px' }}>Hardware & Engineering</span>
          </div>
        </div>
        <div className="reveal" style={{ width: '100%', maxWidth: '800px', margin: '4rem auto 0', textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(46,196,182,0.2)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', margin: 0, lineHeight: 1.6 }}>{t('clients.desc2')}</p>
        </div>
      </div>
    </section>
  );
};

export const OurExpertise = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-dark">
      <div className="container">
        <div className="section-head reveal">
          <h2>{t('expertise.title')}</h2>
        </div>
        <div className="grid-2 reveal">
          <div className="glass-card">
            <h3 className="teal" style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(46,196,182,0.2)', paddingBottom: '1rem' }}>{t('expertise.e1.title')}</h3>
            <div style={{ marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '10px' }}>
              <p style={{ margin: 0, fontSize: '1.05rem' }}>{t('expertise.e1.d1')}</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>{t('expertise.e1.d2')}</p>
            </div>
            <div style={{ borderLeft: '3px solid var(--accent-teal)', paddingLeft: '1.5rem', background: 'linear-gradient(90deg, rgba(46,196,182,0.05), transparent)', paddingTop: '1rem', paddingBottom: '1rem' }}>
              <h4 style={{ color: '#fff', fontWeight: 500, margin: 0 }}>{t('expertise.e1.footer')}</h4>
            </div>
          </div>
          <div className="glass-card">
            <h3 className="teal" style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(46,196,182,0.2)', paddingBottom: '1rem' }}>{t('expertise.e2.title')}</h3>
            <div style={{ marginBottom: '1.5rem', background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '10px' }}>
              <p style={{ margin: 0, fontSize: '1.05rem' }}>{t('expertise.e2.d1')}</p>
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>{t('expertise.e2.d2')}</p>
            </div>
            <div style={{ borderLeft: '3px solid var(--accent-teal)', paddingLeft: '1.5rem', background: 'linear-gradient(90deg, rgba(46,196,182,0.05), transparent)', paddingTop: '1rem', paddingBottom: '1rem' }}>
              <h4 style={{ color: '#fff', fontWeight: 500, margin: 0 }}>{t('expertise.e2.footer')}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const { t } = useTranslation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Re-implement the form submission logic from main.js if needed
    // For now, keep the structure.
  };

  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-copy reveal">
            <span className="subtitle">Get In Touch</span>
            <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>{t('cta.title')}</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '420px' }}>{t('cta.desc')}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(46,196,182,0.1)', border: '1px solid rgba(46,196,182,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Mail size={20} className="teal" /></div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</p>
                  <p style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>opfluxsolution@gmail.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(46,196,182,0.1)', border: '1px solid rgba(46,196,182,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Settings size={20} className="teal" /></div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Operations</p>
                  <p style={{ margin: 0, color: '#fff', fontSize: '1rem' }}>Automated Retail — Global Markets</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap reveal">
            <form id="contact-form" className="contact-form" noValidate onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input type="text" id="contact-name" name="from_name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input type="email" id="contact-email" name="reply_to" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-company">Company (Optional)</label>
                <input type="text" id="contact-company" name="company" placeholder="Your company name" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows="4" placeholder="Tell us about your automated retail operations..." required></textarea>
              </div>
              <input type="hidden" name="to_email" value="opfluxsolution@gmail.com" />
              <button type="submit" className="cta-btn form-submit-btn" id="submit-btn">
                <span id="btn-text">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="about-section-premium">
      <div className="about-bg-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head reveal">
          <span className="subtitle">{t('about.subtitle')}</span>
          <h2>{t('about.title')}</h2>
        </div>
        <div className="grid-2 reveal">
          <div className="img-box about-sticky-media" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', overflow: 'hidden', height: 'auto', minHeight: '350px' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(8,18,35,0.6) 0%, rgba(11,31,51,0.2) 100%)', zIndex: 2, pointerEvents: 'none' }}></div>
            <img loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop&fm=webp" alt="Supply chain operations dashboard and engineering analytics" width="800" height="1000" style={{ width: '100%', height: '100%', minHeight: '350px', objectFit: 'cover', filter: 'brightness(0.8) contrast(1.15)', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(46,196,182,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)' }}><Box size={20} /></div>
                <h3 className="teal" style={{ margin: 0 }}>{t('about.idTitle')}</h3>
              </div>
              <ul className="arrow-list" style={{ marginTop: '1rem' }}>
                <li style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>{t('about.id1')}</li>
                <li style={{ paddingLeft: '2rem' }}>{t('about.id2')}</li>
              </ul>
            </div>
            <div className="glass-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(46,196,182,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)' }}><Truck size={20} /></div>
                <h3 className="teal" style={{ margin: 0 }}>{t('about.logTitle')}</h3>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', marginBottom: '1.5rem', borderLeft: '3px solid var(--accent-teal)' }}>
                <p style={{ fontSize: '1rem', color: '#fff', margin: 0 }}>{t('about.log1')}</p>
              </div>
              <p style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{t('about.log2')}</p>
              <p style={{ fontSize: '1rem', fontWeight: 500, color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>{t('about.log3')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhatWeDo = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="services-section-grid">
      <div className="services-bg-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head reveal">
          <span className="subtitle">{t('services.subtitle')}</span>
          <h2>{t('services.title')}</h2>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: 0 }}>
              <span>{t('services.desc1')}</span><br />
              <span className="teal" style={{ fontWeight: 600 }}>{t('services.desc2')}</span>
            </p>
          </div>
        </div>
        <div className="grid-4">
          <div className="glass-card reveal" style={{ background: "linear-gradient(to bottom, rgba(11,31,51,0.95), rgba(11,31,51,0.98)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop&fm=webp') center/cover", position: 'relative', overflow: 'hidden', border: '1px solid rgba(46,196,182,0.1)' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ marginBottom: '1.5rem' }}><Timer size={40} className="teal" /></div>
              <h3 className="mb-2">{t('services.s1.title')}</h3>
              <p style={{ fontSize: '0.95rem' }}>{t('services.s1.desc')}</p>
            </div>
          </div>
          <div className="glass-card reveal" style={{ background: "linear-gradient(to bottom, rgba(11,31,51,0.95), rgba(11,31,51,0.98)), url('/hero-bg.webp') center/cover", position: 'relative', overflow: 'hidden', border: '1px solid rgba(46,196,182,0.1)' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ marginBottom: '1.5rem' }}><Settings size={40} className="teal" /></div>
              <h3 className="mb-2">{t('services.s2.title')}</h3>
              <p style={{ fontSize: '0.95rem' }}>{t('services.s2.desc')}</p>
            </div>
          </div>
          <div className="glass-card reveal" style={{ background: "linear-gradient(to bottom, rgba(11,31,51,0.95), rgba(11,31,51,0.98)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop&fm=webp') center/cover", position: 'relative', overflow: 'hidden', border: '1px solid rgba(46,196,182,0.1)' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ marginBottom: '1.5rem' }}><Package size={40} className="teal" /></div>
              <h3 className="mb-2">{t('services.s3.title')}</h3>
              <p style={{ fontSize: '0.95rem' }}>{t('services.s3.desc')}</p>
            </div>
          </div>
          <div className="glass-card reveal" style={{ background: "linear-gradient(to bottom, rgba(11,31,51,0.95), rgba(11,31,51,0.98)), url('/hero-bg.webp') center/cover", position: 'relative', overflow: 'hidden', border: '1px solid rgba(46,196,182,0.1)' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ marginBottom: '1.5rem' }}><TrendingUp size={40} className="teal" /></div>
              <h3 className="mb-2">{t('services.s4.title')}</h3>
              <p style={{ fontSize: '0.95rem' }}>{t('services.s4.desc')}</p>
            </div>
          </div>
        </div>
        <div className="reveal" style={{ width: '100%', maxWidth: '600px', margin: '4rem auto 0', padding: '2rem', border: '1px solid var(--accent-teal)', borderRadius: '15px', background: 'rgba(46,196,182,0.05)', textAlign: 'center' }}>
          <h4 style={{ color: '#fff', fontWeight: 500, margin: 0 }}>{t('services.footer')}</h4>
        </div>
      </div>
    </section>
  );
};

export const HowOpflux = () => {
  const { t } = useTranslation();
  const workflowProgressFillRef = useRef(null);
  const workflowShellRef = useRef(null);
  const workflowStepCardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!workflowShellRef.current || !workflowProgressFillRef.current) return;
      
      const rect = workflowShellRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const rawProgress = ((viewportHeight * 0.62) - rect.top) / Math.max(rect.height, 1);
      const clampedProgress = Math.min(1, Math.max(0, rawProgress));
      workflowProgressFillRef.current.style.height = `${(clampedProgress * 100).toFixed(2)}%`;

      const focusLine = viewportHeight * (window.innerWidth <= 768 ? 0.35 : 0.5);
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      workflowStepCardsRef.current.forEach((step, index) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const cardCenter = rect.top + (rect.height / 2);
        const distance = Math.abs(cardCenter - focusLine);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      workflowStepCardsRef.current.forEach((step, idx) => {
        if (step) step.classList.toggle('active', idx === nearestIndex);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="operations" className="bg-dark">
      <div className="container">
        <div className="section-head reveal">
          <span className="subtitle">{t('ops.subtitle')}</span>
          <h2>{t('ops.title')}</h2>
        </div>
        <div className="workflow-shell" id="workflow-shell" ref={workflowShellRef}>
          <div className="workflow-progress-line" aria-hidden="true">
            <span className="workflow-progress-fill" id="workflow-progress-fill" ref={workflowProgressFillRef}></span>
          </div>
          <div className="workflow-step-list" id="workflow-step-list">
            {[1, 2, 3, 4, 5, 6].map((i, index) => (
              <article 
                key={i} 
                className={`workflow-step-card ${i === 1 ? 'active' : ''}`}
                ref={el => workflowStepCardsRef.current[index] = el}
              >
                <span className="workflow-step-dot" aria-hidden="true"></span>
                <div className="workflow-step-content">
                  <span className="workflow-step-number">{`0${i}`}</span>
                  <h4 className="workflow-step-title teal">{t(`ops.o${i}.title`)}</h4>
                  <p style={{ fontSize: '1rem', margin: 0 }}>{t(`ops.o${i}.desc`)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const OperationalPhilosophy = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-navy">
      <div className="container">
        <div className="section-head reveal">
          <h2>{t('philosophy.title')}</h2>
        </div>
        <div className="reveal" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="glass-card text-center philosophy-quote-card" style={{ marginBottom: '3rem', background: "linear-gradient(135deg, rgba(11,31,51,0.6), rgba(8,18,35,0.8)), url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%232ec4b6\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')", padding: 'clamp(2rem, 5vw, 4rem)', border: '1px solid rgba(46,196,182,0.2)', boxShadow: '0 0 40px rgba(46,196,182,0.1)' }}>
            <h3 style={{ margin: 0, color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, textShadow: '0 0 30px rgba(46,196,182,0.4)', lineHeight: 1.2 }}>{t('philosophy.quote')}</h3>
          </div>
          <div style={{ width: '100px', height: '3px', background: 'var(--accent-teal)', margin: '0 auto 3rem', borderRadius: '2px', boxShadow: '0 0 10px rgba(46,196,182,0.5)' }}></div>
          <div className="grid-2">
            <div className="glass-card" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <div style={{ marginBottom: '1rem' }}><Link2 size={32} className="teal" /></div>
              <p style={{ fontSize: '1.15rem', color: '#fff', margin: 0, lineHeight: 1.6 }}>{t('philosophy.d1')}</p>
            </div>
            <div className="glass-card" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <div style={{ marginBottom: '1rem' }}><Wrench size={32} className="teal" /></div>
              <p style={{ fontSize: '1.15rem', color: '#fff', margin: 0, lineHeight: 1.6 }}>{t('philosophy.d2')}</p>
            </div>
          </div>
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '1.5rem 3rem', background: 'rgba(46,196,182,0.1)', borderRadius: '50px', border: '1px solid rgba(46,196,182,0.2)' }}>
              <h4 className="teal" style={{ fontStyle: 'italic', margin: 0, fontSize: '1.3rem' }}>{t('philosophy.footer')}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OperationalImpacts = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-navy">
      <div className="container">
        <div className="section-head reveal">
          <h2>{t('impact.title')}</h2>
          <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', background: 'rgba(255,255,255,0.03)', padding: '1rem 2rem', borderRadius: '50px' }}>
            <p style={{ margin: 0, color: '#fff' }}>{t('impact.desc')}</p>
          </div>
        </div>
        <div className="grid-4 reveal">
          <div className="glass-card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px' }}>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{t('impact.i1')}</h4>
          </div>
          <div className="glass-card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px' }}>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{t('impact.i2')}</h4>
          </div>
          <div className="glass-card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px' }}>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{t('impact.i3')}</h4>
          </div>
          <div className="glass-card text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px' }}>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{t('impact.i4')}</h4>
          </div>
        </div>
        <div className="text-center reveal" style={{ marginTop: '4rem' }}>
          <h4 className="teal" style={{ fontSize: '1.5rem' }}>{t('impact.footer')}</h4>
        </div>
      </div>
    </section>
  );
};

export const SuccessStory = () => {
  const { t } = useTranslation();
  return (
    <section id="case-study" className="bg-dashboard" style={{ paddingTop: '140px', paddingBottom: '140px' }}>
      <div className="container">
        <div className="section-head reveal">
          <span className="subtitle">{t('case.subtitle')}</span>
          <h2>{t('case.title')}</h2>
          <div style={{ display: 'inline-block', width: 'auto', background: 'rgba(0,0,0,0.5)', padding: '0.8rem 2rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ color: '#fff', margin: 0 }}>{t('case.badge')}</p>
          </div>
        </div>
        <div className="grid-2 reveal" style={{ alignItems: 'stretch' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-card" style={{ flex: 1 }}>
              <h4 className="teal" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={20} className="teal" /> <span>{t('case.scope.title')}</span>
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>{t('case.scope.desc')}</p>
            </div>
            <div className="glass-card" style={{ flex: 1 }}>
              <h4 className="teal" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <AlertTriangle size={20} className="teal" /> <span>{t('case.challenges.title')}</span>
              </h4>
              <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '10px' }}>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0 }}>{t('case.challenges.desc')}</p>
              </div>
            </div>
          </div>
          <div className="glass-card" style={{ background: 'rgba(11, 31, 51, 0.7)', border: '2px solid rgba(46,196,182,0.3)', boxShadow: '0 0 40px rgba(46,196,182,0.1)' }}>
            <h4 style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>{t('case.outcomes.title')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div className="metric-row" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="metrics-number" style={{ margin: 0, width: '120px' }}>{t('case.o1.value')}</div>
                <p style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>{t('case.o1.desc')}</p>
              </div>
              <div className="metric-row" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="metrics-number" style={{ margin: 0, width: '120px', fontSize: '3.2rem' }}>{t('case.o2.value')}</div>
                <p style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>{t('case.o2.desc')}</p>
              </div>
              <div style={{ marginTop: '1rem', padding: '1.5rem', background: 'rgba(46,196,182,0.1)', borderRadius: '10px', borderLeft: '4px solid var(--accent-teal)' }}>
                <p style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: 0, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <CheckCircle2 size={20} className="teal" /> <span>{t('case.o3.desc')}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center reveal" style={{ marginTop: '5rem' }}>
          <h3 className="glow-text" style={{ fontSize: '2.2rem' }}>{t('case.footer')}</h3>
        </div>
      </div>
    </section>
  );
};

export const Logistics = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-navy supply-redesign">
      <div className="container">
        <div className="section-head reveal">
          <span className="subtitle">{t('supply.subtitle')}</span>
          <h2>{t('supply.title')}</h2>
          <div style={{ width: '100%', maxWidth: '650px', margin: '0 auto' }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
              <span>{t('supply.desc1')}</span> 
              <span style={{ color: '#fff', fontWeight: 500 }}>{t('supply.desc2')}</span>
            </p>
          </div>
          <div className="supply-head-strip">
            <figure className="supply-head-thumb">
              <img loading="lazy" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Warehouse operations and automated retail logistics" width="900" height="600" />
            </figure>
            <figure className="supply-head-thumb">
              <img loading="lazy" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Supply chain operations dashboard and inventory systems" width="900" height="600" />
            </figure>
            <figure className="supply-head-thumb">
              <img loading="lazy" src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Supply chain movement and operational efficiency" width="900" height="600" />
            </figure>
          </div>
        </div>
        <div className="supply-grid">
          <div className="supply-content-col">
            <div className="supply-cards-grid">
              <article className="glass-card supply-card reveal">
                <div className="supply-card-icon"><Package size={24} /></div>
                <h4 className="teal">{t('supply.s1.title')}</h4>
                <p style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>{t('supply.s1.desc')}</p>
              </article>
              <article className="glass-card supply-card reveal">
                <div className="supply-card-icon"><RefreshCw size={24} /></div>
                <h4 className="teal">{t('supply.s2.title')}</h4>
                <p style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>{t('supply.s2.desc')}</p>
              </article>
            </div>
            <div className="supply-summary reveal">
              <h3 style={{ fontWeight: 500, fontSize: '1.5rem', margin: 0 }}>
                <span>{t('supply.f1')}</span><br />
                <span className="teal">{t('supply.f2')}</span>
              </h3>
            </div>
          </div>
          <div className="supply-visual-col reveal">
            <figure className="supply-main-image">
              <img loading="lazy" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80&fm=webp" alt="Global warehouse operations and supply chain precision" width="1600" height="1066" />
              <div className="supply-image-overlay"></div>
            </figure>
            <div className="supply-sub-images">
              <figure className="supply-sub-image">
                <img loading="lazy" src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80&fm=webp" alt="Intelligent inventory management and business intelligence" width="1200" height="800" />
                <div className="supply-image-overlay soft"></div>
              </figure>
              <figure className="supply-sub-image">
                <img loading="lazy" src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=80&fm=webp" alt="Advanced supply chain movement tracking" width="1200" height="800" />
                <div className="supply-image-overlay soft"></div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

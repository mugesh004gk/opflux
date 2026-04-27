import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from './LanguageContext';
import { 
  Zap, Ruler, Timer, Settings, Package, TrendingUp, 
  BarChart3, PlugZap, Wrench, Link2, Target, 
  AlertTriangle, RefreshCw, Mail, Box, Truck, CheckCircle2,
  ShieldCheck, Globe, Cpu, Activity, Info, Rocket, 
  Database, Server, Network, Terminal, LayoutGrid, Layers, Hexagon,
  Users, MessageSquare, Calendar, ArrowRight, MousePointer2, Coffee, Phone, Play, MapPin
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
              <img loading="lazy" src="/machine-core.webp" alt="OpFlux automated retail operations" className="machine-img" width="1000" height="1200" />
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
        <div className="grid-2 reveal" style={{ alignItems: 'center', gap: '5rem', marginBottom: '6rem' }}>
          <div className="why-text-premium" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.4rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '50px', marginBottom: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <span className="badge-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-teal)', display: 'block' }}></span>
              <span className="teal" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 700 }}>{t('why.hBridge')}</span>
            </div>
            
            <h3 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Bridge the Gap Between <span style={{ color: 'var(--accent-teal)' }}>Vision</span> & Reality
            </h3>
            
            <p style={{ fontSize: '1.25rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
              {t('why.bridgeDesc')}
            </p>
            
            <div className="premium-quote-card" style={{ padding: '2.5rem', background: 'var(--bg-tertiary)', borderLeft: '4px solid var(--accent-teal)', borderRadius: '0 24px 24px 24px', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', animation: 'float 8s ease-in-out infinite alternate' }}>
              <div style={{ position: 'absolute', top: '-18px', left: '20px', background: 'var(--accent-teal)', color: '#fff', padding: '0.6rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 5px 15px rgba(20,184,166,0.3)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25-.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
              </div>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0, fontStyle: 'italic', fontWeight: 500, lineHeight: 1.6 }}>
                "{t('why.bridgeDesc2')}"
              </p>
            </div>
          </div>

          <div className="why-visual-premium" style={{ position: 'relative', perspective: '1000px' }}>
            <div className="image-stack" style={{ position: 'relative', height: '550px', width: '100%', transformStyle: 'preserve-3d' }}>
              {/* Decorative Background Blob */}
              <div style={{ position: 'absolute', top: '10%', right: '0%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(20,184,166,0.2) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(40px)', zIndex: 0, animation: 'float 10s infinite alternate' }}></div>
              
              {/* Main Image */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '85%', height: '85%', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)', zIndex: 1, border: '1px solid rgba(0,0,0,0.05)', animation: 'float 7s ease-in-out infinite' }}>
                <img loading="lazy" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80&fm=webp" alt="Automated precision robotics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              {/* Offset Image */}
              <div style={{ position: 'absolute', bottom: '0', left: '0', width: '60%', height: '55%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', zIndex: 2, border: '6px solid var(--bg-primary)', animation: 'float 5s ease-in-out infinite alternate-reverse' }}>
                <img loading="lazy" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80&fm=webp" alt="Data analytics dashboard" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              
              {/* Floating Metric Card */}
              <div className="floating-metric glass" style={{ position: 'absolute', top: '25%', left: '0%', padding: '1.2rem 1.5rem', borderRadius: '16px', zIndex: 3, display: 'flex', alignItems: 'center', gap: '1.2rem', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(15px)', boxShadow: '0 15px 35px rgba(0,0,0,0.1)', animation: 'float 6s ease-in-out infinite alternate' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 5px 15px rgba(20,184,166,0.3)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>VIRTUALIZED OPS</div>
                  <div style={{ fontSize: '1.5rem', color: 'var(--text-primary)', fontWeight: 800, lineHeight: 1 }}>99.8% <span style={{fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-teal)'}}>UPTIME</span></div>
                </div>
              </div>
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
  
  const pillars = [
    { id: '01', icon: <CheckCircle2 size={32} />, title: t('pillars.p1.title'), desc: t('pillars.p1.desc') },
    { id: '02', icon: <Zap size={32} />, title: t('pillars.p2.title'), desc: t('pillars.p2.desc') },
    { id: '03', icon: <Target size={32} />, title: t('pillars.p3.title'), desc: t('pillars.p3.desc') },
    { id: '04', icon: <TrendingUp size={32} />, title: t('pillars.p4.title'), desc: t('pillars.p4.desc') },
    { id: '05', icon: <CheckCircle2 size={32} />, title: t('pillars.p5.title'), desc: t('pillars.p5.desc') }
  ];

  return (
    <section className="bg-navy" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-head reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.4rem', background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.2)', borderRadius: '50px', marginBottom: '1.2rem' }}>
            <Layers size={18} className="teal" />
            <span className="teal" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 800 }}>{t('pillars.subtitle')}</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: '1rem', lineHeight: 1.1, color: '#fff' }}>{t('pillars.title')}</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{t('pillars.desc')}</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '1.8rem',
          position: 'relative',
          zIndex: 2
        }}>
          {pillars.map((pillar) => (
            <div 
              key={pillar.id}
              className="reveal"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(15px)',
                borderRadius: '28px',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => { 
                e.currentTarget.style.transform = 'translateY(-8px)'; 
                e.currentTarget.style.borderColor = 'rgba(20,184,166,0.4)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              }}
              onMouseOut={(e) => { 
                e.currentTarget.style.transform = 'translateY(0)'; 
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              <div style={{ position: 'absolute', top: '1.2rem', right: '1.5rem', fontSize: '2.5rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', pointerEvents: 'none' }}>{pillar.id}</div>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(20,184,166,0.1), rgba(14,165,233,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)', border: '1px solid rgba(20,184,166,0.2)' }}>
                {pillar.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem', letterSpacing: '-0.5px' }}>{pillar.title}</h4>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>{pillar.desc}</p>
              </div>
            </div>
          ))}
          <div className="reveal" style={{ background: 'linear-gradient(135deg, var(--accent-teal), #0EA5E9)', borderRadius: '28px', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.2rem', color: '#fff', textAlign: 'center', boxShadow: '0 15px 30px rgba(20,184,166,0.15)', transition: 'all 0.4s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
            <Hexagon size={40} />
            <h4 style={{ fontSize: '1.35rem', fontWeight: 900, margin: 0 }}>Driven by Purpose</h4>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', margin: 0 }}>Join the mission to redefine automated retail.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Clients = () => {
  const { t } = useTranslation();
  const clients = [
    { name: "Coffee Marcel", type: "Automated Coffee Systems" },
    { name: "VLT Robotics", type: "Robotic Hardware" }
  ];

  return (
    <section className="bg-dark" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="section-head reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="subtitle" style={{ letterSpacing: '4px' }}>Strategic Alliances</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{t('clients.title')}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {clients.map((client, i) => (
            <div key={i} className="reveal glass-card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'rgba(20,184,166,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
               <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(20,184,166,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)', marginBottom: '1rem' }}><Globe size={32} /></div>
               <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', margin: 0 }}>{client.name}</h3>
               <div style={{ height: '1px', width: '40px', background: 'var(--accent-teal)', opacity: 0.5 }}></div>
               <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', margin: 0, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>{client.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const OurExpertise = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-dark expertise-section-dark" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Elements */}
      <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(20,184,166,0.03) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }}></div>
      
      <div className="container">
        <div className="section-head reveal" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0.6rem 1.4rem', background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.2)', borderRadius: '50px', marginBottom: '1.5rem' }}>
             <Cpu size={18} className="teal" />
             <span className="teal" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 800 }}>Intelligence Reservoir</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px', marginBottom: '1.5rem' }}>{t('expertise.title')}</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
          {/* Card 1: Founder Experience */}
          <div className="reveal" style={{ gridColumn: 'span 7', background: 'linear-gradient(135deg, rgba(11, 31, 51, 0.9), rgba(8, 18, 35, 0.95))', border: '1px solid rgba(20,184,166,0.2)', borderRadius: '32px', padding: '3.5rem', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
             <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', color: 'rgba(20,184,166,0.03)', fontWeight: 900, fontSize: '6rem', pointerEvents: 'none' }}><Activity /></div>
             <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                   <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(20,184,166,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)', border: '1px solid rgba(20,184,166,0.3)' }}><Users size={28} /></div>
                   <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', margin: 0 }}>{t('expertise.e1.title')}</h3>
                </div>
                <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '2rem' }}>{t('expertise.e1.d1')}</p>
                <div style={{ padding: '1.8rem', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
                   <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>{t('expertise.e1.d2')}</p>
                </div>
                <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <span className="teal" style={{ fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px' }}>{t('expertise.e1.footer')}</span>
                   <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--accent-teal), transparent)' }}></div>
                </div>
             </div>
          </div>

          {/* Card 2: Collaboration & Talent */}
          <div className="reveal" style={{ gridColumn: 'span 5', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '32px', padding: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)' }}><Network size={24} /></div>
             <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', margin: 0 }}>{t('expertise.e2.title')}</h3>
             <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>{t('expertise.e2.d1')}</p>
             <div style={{ flex: 1, padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '20px', border: '1px dashed rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{t('expertise.e2.d2')}</p>
             </div>
             <div style={{ background: 'rgba(20,184,166,0.1)', padding: '1.2rem', borderRadius: '100px', textAlign: 'center', border: '1px solid rgba(20,184,166,0.2)' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-teal)', letterSpacing: '1px' }}>{t('expertise.e2.footer')}</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="contact-section-split">
      <div className="container">
        <div className="contact-split-grid">
          {/* Left Panel: Form */}
          <div className="contact-left-form reveal">
            <span style={{ color: 'var(--accent-teal)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'block' }}>Get in Touch</span>
            <h2>Let's Chat, <span className="teal-text">Reach Out</span> to Us</h2>
            <p style={{ color: '#64748B', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '500px' }}>
              Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.
            </p>

            <form className="traditional-form-premium" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row-2col">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter your first name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Write your message here..."></textarea>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', margin: '0.5rem 0 1.5rem' }}>
                <input type="checkbox" id="privacy" style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-teal)' }} />
                <label htmlFor="privacy" style={{ fontSize: '0.9rem', color: '#64748B', cursor: 'pointer' }}>
                  I agree to our <a href="#" style={{ color: 'var(--accent-teal)', fontWeight: 700, textDecoration: 'underline' }}>privacy policy</a>
                </label>
              </div>

              <button type="submit" className="send-msg-btn">
                Send Message <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* Right Panel: Visuals & Cards */}
          <div className="contact-right-visuals reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="contact-main-img-box">
              <img src="/images/contact-hero.png" alt="OpFlux Global Communications" />
            </div>

            <div className="contact-info-stack stagger-reveal">
              <a href="mailto:opfluxsolution@gmail.com" className="info-card-premium reveal">
                <div className="info-card-left">
                  <div className="info-card-icon"><Mail size={24} /></div>
                  <div className="info-card-text">
                    <h4>Email Us</h4>
                    <p>opfluxsolution@gmail.com</p>
                  </div>
                </div>
                <ArrowRight className="info-card-arrow" size={20} />
              </a>

              <a href="tel:+15558324923" className="info-card-premium reveal">
                <div className="info-card-left">
                  <div className="info-card-icon"><Phone size={24} /></div>
                  <div className="info-card-text">
                    <h4>Call Us</h4>
                    <p>+1 (555) 832-4923</p>
                  </div>
                </div>
                <ArrowRight className="info-card-arrow" size={20} />
              </a>

              <div className="meeting-card-premium reveal">
                <div className="meeting-card-left">
                  <div className="info-card-icon" style={{ background: 'rgba(14, 165, 233, 0.05)', color: '#0EA5E9' }}><Calendar size={24} /></div>
                  <div className="meeting-card-text">
                    <h4>Prefer a Meeting?</h4>
                    <p>Schedule a free consultation with our experts</p>
                  </div>
                </div>
                <a href="#" className="book-meeting-btn">Book a Meeting</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="contact-trust-strip reveal">
          <div className="trust-item">
            <div className="trust-icon"><ShieldCheck size={24} /></div>
            <div className="trust-info">
              <h5>Secure & Confidential</h5>
              <p>Your information is safe with us. We never share your data.</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><Timer size={24} /></div>
            <div className="trust-info">
              <h5>Quick Response</h5>
              <p>We respond to all inquiries within 24 business hours.</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><Activity size={24} /></div>
            <div className="trust-info">
              <h5>Expert Support</h5>
              <p>Our team is here to help you find the right solution.</p>
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><Globe size={24} /></div>
            <div className="trust-info">
              <h5>Global Presence</h5>
              <p>Serving automated retail operators worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-premium-edition">
      <div className="premium-glow-bg"></div>
      
      <div className="container">
        
        {/* HERO SECTION - ANTIGRAVITY EDITION */}
        <div className="about-premium-hero">
          <div className="hero-content-left reveal">
            <span className="ops-eyebrow" style={{ color: 'var(--accent-teal)', letterSpacing: '4px' }}>OUR STORY</span>
            <h1 className="premium-title">
              Intelligence <span className="accent">Operated.</span><br/>
              Reliability <span className="accent">Delivered.</span>
            </h1>
            <p className="premium-desc-p">
              OpFlux Solution isn't just a consulting firm; we are the operational heartbeat for automated retail systems. We translate complex engineering into consistent real-world performance.
            </p>
            
            <div className="premium-badge-v2 reveal">
              <div className="badge-v2-icon"><ShieldCheck size={32} /></div>
              <div className="badge-v2-text">
                The bridge between high-tech vision —<br/>
                <b>and hands-on execution.</b>
              </div>
            </div>
          </div>

          <div className="premium-hero-visual reveal">
            <div className="premium-img-container">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop" alt="OpFlux Robotic Automation" />
            </div>
            
            {/* Floating Intelligence Nodes */}
            <div className="floating-node-card node-1 reveal">
              <div className="point-icon-box" style={{ marginBottom: 0 }}><Activity size={20} /></div>
              <div className="node-text">
                <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 800 }}>99.2% Uptime</p>
                <p style={{ margin: 0, fontSize: '0.7rem', color: '#64748B' }}>Operational Precision</p>
              </div>
            </div>
            
            <div className="floating-node-card node-2 reveal">
              <div className="point-icon-box" style={{ marginBottom: 0 }}><TrendingUp size={20} /></div>
              <div className="node-text">
                <p style={{ margin: 0, fontSize: '0.8rem', fontWeight: 800 }}>Scale Ready</p>
                <p style={{ margin: 0, fontSize: '0.7rem', color: '#64748B' }}>Multi-site growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* OPERATIONS WALL - ANTIGRAVITY EDITION */}
        <div className="premium-ops-wall">
          <div className="ops-wall-grid">
            <div className="wall-visual-tilt reveal">
              <div className="tilt-inner">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" alt="OpFlux Office" />
                <div className="wall-overlay-logo">
                  <h2 className="wall-logo-text">OpFlux</h2>
                </div>
              </div>
            </div>
            
            <div className="premium-points-list stagger-reveal">
              <div className="premium-point-item reveal">
                <div className="point-icon-box"><Settings size={24} /></div>
                <div className="point-info-text">
                  <h4>Operations Management</h4>
                  <p>Managing day-to-day performance and system execution across all kiosque locations.</p>
                </div>
              </div>
              <div className="premium-point-item reveal">
                <div className="point-icon-box"><Truck size={24} /></div>
                <div className="point-info-text">
                  <h4>Logistics & Supply Chain</h4>
                  <p>Intelligent inventory planning, demand forecasting, and seamless multi-site coordination.</p>
                </div>
              </div>
              <div className="premium-point-item reveal">
                <div className="point-icon-box"><ShieldCheck size={24} /></div>
                <div className="point-info-text">
                  <h4>Technical Reliability</h4>
                  <p>Proactive maintenance, real-time monitoring, and rapid issue resolution.</p>
                </div>
              </div>
              <div className="premium-point-item reveal">
                <div className="point-icon-box"><TrendingUp size={24} /></div>
                <div className="point-info-text">
                  <h4>Scalable Growth Support</h4>
                  <p>Data-driven consulting, performance optimization, and business growth enablement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS STRIP - ANTIGRAVITY EDITION */}
        <div className="premium-metrics-strip stagger-reveal">
          <div className="metric-v4 reveal">
            <div className="metric-v4-val"><CountUp end={99.2} suffix="%" /></div>
            <div className="metric-v4-label">System Uptime</div>
            <div className="metric-v4-desc">Consistent performance across all locations.</div>
          </div>
          <div className="metric-v4 reveal">
            <div className="metric-v4-val">24/7</div>
            <div className="metric-v4-label">Real-Time Support</div>
            <div className="metric-v4-desc">Monitoring and support that never stops.</div>
          </div>
          <div className="metric-v4 reveal">
             <div className="metric-v4-val" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>Multi-Site</div>
             <div className="metric-v4-label">Multi-Site Ready</div>
             <div className="metric-v4-desc">Built to operate and scale across multiple locations.</div>
          </div>
          <div className="metric-v4 reveal">
             <div className="metric-v4-val" style={{ fontSize: '2.5rem', marginTop: '1rem' }}>France</div>
             <div className="metric-v4-label">France Based</div>
             <div className="metric-v4-desc">Headquartered in Île-de-France, serving across the region.</div>
          </div>
        </div>

        {/* QUOTE SECTION - ANTIGRAVITY EDITION */}
        <div className="premium-quote-section reveal">
          <div className="quote-bg-watermark">OPFLUX SOLUTION</div>
          <div className="quote-content-v4">
            <div className="quote-icon-v4"><MessageSquare size={80} /></div>
            <div className="quote-main-v4">
              <h3>Our Philosophy</h3>
              <h2>We run complete<br/>operational systems.</h2>
            </div>
            <div className="quote-side-v4">
              <p>
                Every decision, every process, and every system is aligned to one goal — reliable operations that drive performance and long-term value.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export const WhatWeDo = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "01",
      icon: <Activity size={24} />,
      title: "Operations Management",
      desc: "Managing day-to-day performance and system execution across all kiosque locations.",
      img: "/images/service-ops.png"
    },
    {
      id: "02",
      icon: <Truck size={24} />,
      title: "Logistics & Supply Chain Control",
      desc: "Ensuring efficient inventory flow, demand-based planning, and multi-site coordination.",
      img: "/images/service-logistics.png"
    },
    {
      id: "03",
      icon: <ShieldCheck size={24} />,
      title: "Technical Operations & Maintenance",
      desc: "Maintaining system reliability through monitoring, diagnostics, and proactive support.",
      img: "/images/service-tech.png"
    },
    {
      id: "04",
      icon: <Users size={24} />,
      title: "Business & Management Consulting",
      desc: "Enhancing performance through marketing insights, CRM optimization, and site analysis.",
      img: "/images/service-consulting.png"
    }
  ];

  const metrics = [
    { id: 1, icon: <Timer size={28} />, val: "99.2", suffix: "%", label: "System Uptime" },
    { id: 2, icon: <Coffee size={28} />, val: "24/7", suffix: "", label: "Real-Time Support" },
    { id: 3, icon: <TrendingUp size={28} />, val: "41", suffix: "%", label: "Average ROI Increase" },
    { id: 4, icon: <MapPin size={28} />, val: "100", suffix: "+", label: "Active Locations" }
  ];

  const gains = [
    { icon: <Activity size={24} />, title: "Lower Downtime", desc: "Proactive monitoring and predictive maintenance minimize disruptions." },
    { icon: <Package size={24} />, title: "Inventory Accuracy", desc: "Smart forecasting and inventory control ensure the right stock, at the right time." },
    { icon: <Network size={24} />, title: "Multi-Site Control", desc: "Centralized systems and real-time visibility across all your kiosque locations." },
    { icon: <TrendingUp size={24} />, title: "Scalable Growth", desc: "Operational systems designed to scale with your business without complexity." }
  ];

  return (
    <section id="services" className="services-premium-white">
      <div className="container">
        {/* Intro Section */}
        <div className="services-hero-grid">
          <div className="services-intro-left reveal">
            <span className="ops-eyebrow">SERVICES</span>
            <h1>What <span className="teal-text">We Do</span></h1>
            <p className="intro-desc">Operational intelligence, logistics precision, and scalable execution.</p>
            <p className="intro-sub">
              OpFlux Solution manages and optimizes automated retail operations through structured systems, intelligent logistics, and real-world execution.
            </p>
            <a href="#" className="ops-cta-link shimmer-hover">
              Explore Our Services <ArrowRight size={18} />
            </a>
          </div>

          <div className="services-stack-right reveal">
            <div className="service-stack-card">
              <div className="stack-icon-box"><Activity size={20} /></div>
              <span className="stack-card-text">Operations Management</span>
            </div>
            <div className="service-stack-card">
              <div className="stack-icon-box"><Truck size={20} /></div>
              <span className="stack-card-text">Logistics & Supply Chain</span>
            </div>
            <div className="service-stack-card">
              <div className="stack-icon-box"><Wrench size={20} /></div>
              <span className="stack-card-text">Technical Maintenance</span>
            </div>
            <div className="service-stack-card">
              <div className="stack-icon-box"><Users size={20} /></div>
              <span className="stack-card-text">Business Consulting</span>
            </div>
          </div>
        </div>

        {/* Main Services Grid & Sidebar */}
        <div className="services-main-layout">
          <div className="services-grid-left stagger-reveal">
            {services.map((srv) => (
              <div key={srv.id} className="service-split-card reveal">
                <div className="service-card-info">
                  <div className="card-num-box">
                    <span className="card-number">{srv.id}</span>
                    <div className="card-icon-min">{srv.icon}</div>
                  </div>
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                  <a href="#" className="learn-more-link">Learn More <ArrowRight size={16} /></a>
                </div>
                <div className="service-card-visual">
                  <img src={srv.img} alt={srv.title} />
                </div>
              </div>
            ))}
          </div>

          <div className="services-sidebar-right reveal">
            {metrics.map((m) => (
              <div key={m.id} className="sidebar-stat">
                <div className="stat-icon-wrap">{m.icon}</div>
                <div className="stat-val">
                  <CountUp end={m.val} suffix={m.suffix} />
                </div>
                <div className="stat-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What You Gain Strip */}
        <div className="services-gain-strip reveal">
          {gains.map((g, idx) => (
            <div key={idx} className="gain-item">
              <div className="gain-icon">{g.icon}</div>
              <div className="gain-info">
                <h4>{g.title}</h4>
                <p>{g.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Philosophy Box */}
        <div className="services-philosophy-box reveal">
          <div className="phil-quote-wrap">
            <div className="quote-circle"><MessageSquare size={32} /></div>
            <div className="phil-text">
              <h2>
                We don't manage isolated processes. 
                <span className="teal-text">We run complete operational systems.</span>
              </h2>
            </div>
          </div>
          <div className="phil-visual-right">
            <p>
              Every service is connected into one intelligent operating model built for scale, consistency, and control.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <a href="#" className="learn-more-link" style={{ margin: 0 }}>Discover How We Operate <ArrowRight size={16} /></a>
              
              {/* CSS Isometric Animation */}
              <div className="isometric-graphic">
                <div className="iso-layer"></div>
                <div className="iso-layer"></div>
                <div className="iso-layer"></div>
                <div className="iso-cube"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    if (typeof end === 'string' && isNaN(parseFloat(end))) {
      setCount(end);
      return;
    }

    let start = 0;
    const endVal = typeof end === 'number' ? end : parseFloat(end);
    
    const totalFrames = Math.round(duration / 16);
    const increment = endVal / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      start += increment;
      if (frame >= totalFrames) {
        setCount(endVal);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <span ref={countRef}>
      {typeof count === 'number' && !isNaN(count) ? 
        (count % 1 === 0 ? count : count.toFixed(1)) : 
        (count || end)}{suffix}
    </span>
  );
};

export const HowOpflux = () => {
  const { t } = useTranslation();
  return (
    <div className="ops-premium-light">
      {/* Section 1: Hero */}
      <section className="ops-section ops-hero reveal">
        <div className="container">
          <div className="ops-hero-grid">
            <div className="ops-hero-content stagger-reveal">
              <span className="ops-eyebrow">Operations Management</span>
              <h1 className="ops-hero-title">How OpFlux <span className="gradient-text">Operates</span></h1>
              <p className="ops-hero-subtitle">
                A seamless orchestration of intelligence, logistics, and technology to power every automated retail experience.
              </p>
              <a href="#workflow" className="ops-cta-link shimmer-hover">
                See how it works <span className="ops-cta-icon"><Play size={14} fill="currentColor" /></span>
              </a>
            </div>
            <div className="ops-ecosystem floating-nodes">
              <div className="ops-eco-orbits"></div>
              <div className="ops-eco-center pulse-glow">
                <span style={{ fontWeight: 900, fontSize: '1.4rem', color: 'var(--text-primary)', fontFamily: 'Outfit' }}>OpFlux</span>
              </div>
              <div className="ops-eco-node node-float" style={{ '--delay': '0s' }}>
                <div className="node-label left">01<br/>Forecast</div>
                <div className="node-icon-box"><BarChart3 size={20} /></div>
              </div>
              <div className="ops-eco-node node-float" style={{ '--delay': '1.5s' }}>
                <div className="node-label left">02<br/>Plan</div>
                <div className="node-icon-box"><Package size={20} /></div>
              </div>
              <div className="ops-eco-node node-float" style={{ '--delay': '3s' }}>
                <div className="node-label left">03<br/>Coordinate</div>
                <div className="node-icon-box"><Truck size={20} /></div>
              </div>
              <div className="ops-eco-node node-float" style={{ '--delay': '4.5s' }}>
                <div className="node-icon-box"><Activity size={20} /></div>
                <div className="node-label right">04<br/>Monitor</div>
              </div>
              <div className="ops-eco-node node-float" style={{ '--delay': '6s' }}>
                <div className="node-icon-box"><Wrench size={20} /></div>
                <div className="node-label right">05<br/>Maintain</div>
              </div>
              <div className="ops-eco-node node-float" style={{ '--delay': '7.5s' }}>
                <div className="node-icon-box"><Settings size={20} /></div>
                <div className="node-label right">06<br/>Optimize</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Workflow Cards */}
      <section id="workflow" className="ops-section ops-workflow reveal">
        <div className="container">
          <div className="ops-connector-line animated-line">
            {[1,2,3,4,5,6].map(i => <div key={i} className="ops-connector-dot"></div>)}
          </div>
          <div className="ops-cards-grid">
            {[
              { id: '01', title: 'Demand Forecasting', desc: 'Predicting consumer patterns to optimize machine placement and stocking frequency.', icon: <BarChart3 /> },
              { id: '02', title: 'Inventory Planning', desc: 'Managing the life cycle of consumables to ensure zero stock-outs.', icon: <Package /> },
              { id: '03', title: 'Logistics Coordination', desc: 'Streamlining the movement of goods from warehouse to kiosque.', icon: <Truck /> },
              { id: '04', title: 'Real-Time Monitoring', desc: 'Cloud-based oversight of technical health and sales performance.', icon: <Activity /> },
              { id: '05', title: 'Predictive Maintenance', desc: 'Engineers deployed before a failure occurs, based on system health data.', icon: <Wrench /> },
              { id: '06', title: 'Continuous Optimization', desc: 'Analytic-driven refinement of every operational touchpoint.', icon: <Settings /> }
            ].map((card, idx) => (
              <div key={card.id} className="ops-card reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="ops-card-header">
                  <div className="ops-card-icon">{card.icon}</div>
                  <div className="ops-card-num">{card.id}</div>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="ops-card-arrow"><ArrowRight size={20} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Metrics */}
      <section className="ops-section reveal" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="ops-metrics-panel counter-reveal">
            <div className="ops-metric-item">
              <div className="ops-metric-icon"><Timer size={24} /></div>
              <div className="ops-metric-val"><CountUp end={99.2} suffix="%" /></div>
              <div className="ops-metric-label">System Uptime</div>
            </div>
            <div className="ops-metric-item">
              <div className="ops-metric-icon"><TrendingUp size={24} /></div>
              <div className="ops-metric-val"><CountUp end={32} suffix="%" /></div>
              <div className="ops-metric-label">Reduction in Downtime</div>
            </div>
            <div className="ops-metric-item">
              <div className="ops-metric-icon"><Activity size={24} /></div>
              <div className="ops-metric-val"><CountUp end={41} suffix="%" /></div>
              <div className="ops-metric-label">Increase in Asset ROI</div>
            </div>
            <div className="ops-metric-item">
              <div className="ops-metric-icon"><ShieldCheck size={24} /></div>
              <div className="ops-metric-val"><CountUp end="24/7" /></div>
              <div className="ops-metric-label">Real-Time Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Philosophy */}
      <section className="ops-section reveal" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="ops-philosophy-split">
            <div className="ops-phil-left reveal">
              <div className="ops-phil-quote-icon"><MessageSquare size={48} /></div>
              <div style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 800, color: 'var(--accent-teal)', marginBottom: '1.5rem' }}>Operational Philosophy</div>
              <div className="ops-phil-quote">"Operations is not a cost center; it’s a value engine."</div>
            </div>
            <div className="ops-phil-right reveal" style={{ transitionDelay: '0.2s' }}>
              <p>We believe automation is only as strong as its weakest link — usually the friction between digital and physical systems.</p>
              <p>We apply Lean Engineering and Integrated Logistics to eliminate that friction.</p>
              <p>We manage the quiet machinery that makes the loud machinery work.</p>
              <div className="ops-phil-cube-container">
                <div className="ops-phil-cube-platform"></div>
                <div className="ops-phil-cube floating-cube shimmer-glow"></div>
                <div className="ops-phil-cube-ghost"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const OperationalPhilosophy = () => null;

export const OperationalImpacts = () => null;

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
    <div className="logistics-premium">
      <div className="container">
        {/* Top Hero Section */}
        <div className="logistics-hero-grid">
          <div className="logistics-content reveal">
            <span className="ops-eyebrow">Logistics</span>
            <h1>
              <span>Consumables</span>
              <span className="gradient-text">Supply Chain</span>
            </h1>
            <p className="logistics-subtext">
              Managing coffee, food, or retail consumables is a high-stakes logistics game. If the machine is empty, the business is closed.
            </p>
          </div>

          <div className="logistics-illustration reveal" style={{ transitionDelay: '0.2s' }}>
            <img src="/images/logistics-hero.png" alt="OpFlux Warehouse and Truck" className="logistics-hero-img" />
            <div className="map-pin" style={{ top: '15%', left: '30%', '--delay': '0s' }}><MapPin size={32} fill="var(--accent-teal)" /></div>
            <div className="map-pin" style={{ bottom: '25%', right: '15%', '--delay': '1s' }}><MapPin size={32} fill="var(--accent-teal)" /></div>
            <svg className="logistic-paths" width="100%" height="100%" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
              <path d="M100,300 Q250,200 400,100" fill="none" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M400,100 Q350,250 150,350" fill="none" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>

          <div className="logistics-side-cards stagger-reveal">
            <div className="logistics-pill reveal">
              <div className="logistics-pill-icon"><Box size={24} /></div>
              <div className="logistics-pill-info">
                <h4>Zero</h4>
                <span>Stock-outs</span>
              </div>
            </div>
            <div className="logistics-pill reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="logistics-pill-icon"><Timer size={24} /></div>
              <div className="logistics-pill-info">
                <h4>99.2%</h4>
                <span>On-time Delivery</span>
              </div>
            </div>
            <div className="logistics-pill reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="logistics-pill-icon"><TrendingUp size={24} /></div>
              <div className="logistics-pill-info">
                <h4>100%</h4>
                <span>Inventory Visibility</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Management Panel */}
        <div className="management-panel reveal">
          {/* Orchestrator Road & Truck Animation */}
          <div className="orchestrator-track">
            <div className="orchestrator-road"></div>
            <div className="truck-orchestrator">
              <div className="orchestrator-truck">
                <div className="truck-cabin">
                  <div className="truck-headlight"></div>
                </div>
                <div className="truck-trailer">
                  <div className="trailer-stripe"></div>
                  <div className="trailer-logo">OpFlux</div>
                </div>
                <div className="truck-wheel w1"></div>
                <div className="truck-wheel w2"></div>
                <div className="truck-wheel w3"></div>
              </div>
            </div>
          </div>

          <div className="management-header">
            <div className="m-head-left">
              <h4 style={{ color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '1rem' }}>What We Manage</h4>
              <h2>End-to-End Orchestration</h2>
            </div>
            <p>Procurement, warehousing, and "Last-Foot" delivery to the kiosque.</p>
          </div>

          <div className="management-features stagger-reveal">
            <div className="feature-col">
              <div className="feature-icon"><Box size={28} /></div>
              <h4>Procurement</h4>
              <p>Sourcing high-quality consumables from trusted suppliers.</p>
            </div>
            <div className="feature-col">
              <div className="feature-icon"><LayoutGrid size={28} /></div>
              <h4>Warehousing</h4>
              <p>Smart inventory storage with temperature and batch control.</p>
            </div>
            <div className="feature-col">
              <div className="feature-icon"><Truck size={28} /></div>
              <h4>Last-Foot Delivery</h4>
              <p>Route-optimized delivery to kiosques at the right time.</p>
            </div>
            <div className="feature-col">
              <div className="feature-icon"><Globe size={28} /></div>
              <h4>Inventory Visibility</h4>
              <p>Real-time tracking of stock levels across all locations and machines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

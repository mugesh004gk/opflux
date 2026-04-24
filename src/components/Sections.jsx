import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from './LanguageContext';
import { 
  Zap, Ruler, Timer, Settings, Package, TrendingUp, 
  BarChart3, PlugZap, Wrench, Link2, Target, 
  AlertTriangle, RefreshCw, Mail, Box, Truck, CheckCircle2,
  ShieldCheck, Globe, Cpu, Activity, Info, Rocket, 
  Database, Server, Network, Terminal, LayoutGrid, Layers, Hexagon,
  Users, MessageSquare, Calendar, ArrowRight, MousePointer2, Coffee, Phone
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
              <img loading="lazy" src="/machine-core.webp" alt="OpFlux automated retail operations and robotic kiosque management system" className="machine-img" width="1000" height="1200" />
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
    <section id="contact" className="contact-section-split" style={{ padding: '8rem 0', background: '#FFFFFF' }}>
      <div className="container">
        <div className="contact-split-grid">
          {/* Left Panel: Form */}
          <div className="contact-left-form reveal">
            <span className="subtitle" style={{ color: 'var(--accent-teal)', fontWeight: 700, marginBottom: '1.5rem', display: 'block', fontSize: '1rem', letterSpacing: '2px' }}>GET IN TOUCH</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', color: 'var(--accent-teal)', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-2px' }}>
              Let's Chat,<br />Reach Out to Us
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#64748B', marginBottom: '3.5rem', maxWidth: '550px', lineHeight: 1.6 }}>
              Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours.
            </p>

            <form className="traditional-form-premium">
              <div className="form-row-2col">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="First name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last name" />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Email address" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Leave us message"></textarea>
              </div>
              <div className="privacy-check" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2.5rem' }}>
                <input type="checkbox" id="privacy" style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: 'var(--accent-teal)' }} />
                <label htmlFor="privacy" style={{ fontSize: '0.95rem', color: '#64748B', cursor: 'pointer' }}>
                  I agree to our friendly <a href="#privacy" style={{ color: 'var(--accent-teal)', fontWeight: 700, textDecoration: 'underline' }}>privacy policy</a>
                </label>
              </div>
              <button type="submit" className="cta-btn" style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', background: 'var(--accent-teal)', color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>
                Send Message
              </button>
            </form>
          </div>

          {/* Right Panel: Image & Info Cards */}
          <div className="contact-right-visuals reveal">
            <div className="contact-visual-container" style={{ position: 'relative' }}>
              {/* Blue Ripple Background Decoration */}
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)', zIndex: -1 }}></div>
              
              <div className="contact-main-img-box" style={{ marginBottom: '2rem' }}>
                <img 
                  src="/assets/contact.png" 
                  alt="OpFlux Contact" 
                  style={{ width: '100%', borderRadius: '48px', objectFit: 'cover', minHeight: '400px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
                />
              </div>

              <div className="contact-info-stack">
                <div className="info-card-premium">
                  <div className="info-card-icon"><Mail size={22} /></div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A' }}>Email</span>
                    <span style={{ fontSize: '1rem', color: '#64748B' }}>opfluxsolution@gmail.com</span>
                  </div>
                </div>
                <div className="info-card-premium">
                  <div className="info-card-icon"><Phone size={22} /></div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A' }}>Phone</span>
                    <span style={{ fontSize: '1rem', color: '#64748B' }}>+1 (555) 832-4923</span>
                  </div>
                </div>
              </div>
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
    <section id="about" className="about-section-premium" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="about-bg-overlay"></div>
      
      <div style={{ position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none', background: 'radial-gradient(circle at 50% 50%, rgba(20,184,166,0.2) 0%, transparent 70%)', zIndex: 2 }}></div>
      <div style={{ position: 'absolute', left: '10%', top: 0, width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(20,184,166,0.2), transparent)', zIndex: 2 }}></div>
      <div style={{ position: 'absolute', right: '10%', top: 0, width: '1px', height: '100%', background: 'linear-gradient(to bottom, transparent, rgba(20,184,166,0.2), transparent)', zIndex: 2 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-head reveal" style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.4rem', background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: '100px', marginBottom: '2rem', backdropFilter: 'blur(10px)' }}>
             <ShieldCheck size={20} className="teal" />
             <span className="teal" style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: 900 }}>{t('about.subtitle')}</span>
          </div>
          <h2 className="reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-2px', color: '#fff', lineHeight: 1, margin: 0, textShadow: '0 15px 30px rgba(0,0,0,0.4)' }}>
            {t('about.title')}
          </h2>
          <div className="reveal" style={{ width: '100px', height: '5px', background: 'var(--accent-teal)', margin: '2rem auto 0', borderRadius: '3px', boxShadow: '0 0 20px rgba(20,184,166,0.4)', animation: 'float 4s ease-in-out infinite' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
          {/* Card 1: Main Identity */}
          <div className="reveal" style={{ gridColumn: 'span 8', background: 'rgba(11, 31, 51, 0.85)', backdropFilter: 'blur(20px)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', padding: '3.5rem', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.4)', transition: 'all 0.4s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'rgba(20,184,166,0.3)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
            <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', color: 'rgba(20,184,166,0.05)', fontWeight: 900, fontSize: '5rem', pointerEvents: 'none' }}>01</div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: 'linear-gradient(135deg, var(--accent-teal), #0EA5E9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Cpu size={30} /></div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-1px' }}>{t('about.idTitle')}</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
                   <p style={{ fontSize: '1.15rem', color: '#fff', lineHeight: 1.6, margin: 0 }}>{t('about.id1')}</p>
                </div>
                <div>
                   <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: 0, marginBottom: '2rem' }}>{t('about.id2')}</p>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: '92%', height: '100%', background: 'var(--accent-teal)' }}></div>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--accent-teal)', fontWeight: 800 }}>92% OPTIMIZED</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Logistics */}
          <div className="reveal" style={{ gridColumn: 'span 4', gridRow: 'span 2', background: 'linear-gradient(180deg, rgba(14, 165, 233, 0.1), rgba(11, 31, 51, 0.9))', backdropFilter: 'blur(20px)', borderRadius: '32px', border: '1px solid rgba(14,165,233,0.3)', padding: '3rem', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', transition: 'all 0.4s ease' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}>
            <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', color: 'rgba(14,165,233,0.05)', fontWeight: 900, fontSize: '5rem', pointerEvents: 'none' }}>02</div>
            <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14, 165, 233, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0EA5E9', marginBottom: '2.5rem' }}><Globe size={28} /></div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '2rem', letterSpacing: '-1px' }}>{t('about.logTitle')}</h3>
              <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '2.5rem' }}>{t('about.log1')}</p>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(14,165,233,0.15)' }}>
                 <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.5 }}>{t('about.log2')}</p>
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--accent-teal)', padding: '1.2rem 1.8rem', borderRadius: '100px', boxShadow: '0 10px 20px rgba(20,184,166,0.2)' }}>
                  <Truck size={22} color="#fff" />
                  <span style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', letterSpacing: '1px' }}>{t('about.log3')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Metrics */}
          <div className="reveal" style={{ gridColumn: 'span 4', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', transition: 'all 0.4s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: 'var(--accent-teal)' }}><Activity size={32} /></div>
                <div style={{ fontSize: '2.8rem', fontWeight: 900, color: '#fff', letterSpacing: '-1.5px' }}>99.9%</div>
             </div>
             <div>
                <h4 style={{ color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800, fontSize: '0.8rem', marginBottom: '0.8rem' }}>PRECISION_YIELD</h4>
                <div style={{ height: '3px', width: '100%', background: 'rgba(255,255,255,0.08)', borderRadius: '1.5px', position: 'relative' }}>
                   <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '99.9%', background: 'var(--accent-teal)' }}></div>
                </div>
             </div>
          </div>

          {/* Card 4: System Status */}
          <div className="reveal" style={{ gridColumn: 'span 4', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem', transition: 'all 0.4s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 15px #22C55E', animation: 'pulse 1.5s infinite' }}></div>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', letterSpacing: '0.5px' }}>CORE_READY</span>
             </div>
             <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[1,2,3,4,5,6,7,8].map(i => <div key={i} style={{ flex: 1, height: '8px', background: i < 7 ? 'var(--accent-teal)' : 'rgba(255,255,255,0.08)', borderRadius: '2px' }}></div>)}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhatWeDo = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const services = [
    {
      id: 0,
      icon: <Timer size={30} />,
      title: t('services.s1.title'),
      desc: t('services.s1.desc'),
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 1,
      icon: <Settings size={30} />,
      title: t('services.s2.title'),
      desc: t('services.s2.desc'),
      img: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      icon: <Package size={30} />,
      title: t('services.s3.title'),
      desc: t('services.s3.desc'),
      img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      icon: <TrendingUp size={30} />,
      title: t('services.s4.title'),
      desc: t('services.s4.desc'),
      img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="services" className="services-section-grid" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="services-bg-overlay"></div>
      
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-head reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.4rem', background: 'rgba(20,184,166,0.1)', border: '1px solid rgba(20,184,166,0.3)', borderRadius: '100px', marginBottom: '2rem', backdropFilter: 'blur(10px)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-teal)', display: 'block', animation: 'float 2s infinite alternate' }}></span>
            <span className="teal" style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.85rem', fontWeight: 900 }}>{t('services.subtitle')}</span>
          </div>
          <h2 className="reveal" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-2px', margin: '0 0 2rem 0', color: '#fff', textShadow: '0 15px 30px rgba(0,0,0,0.4)' }}>{t('services.title')}</h2>
          <div className="reveal" style={{ width: '100px', height: '5px', background: 'var(--accent-teal)', margin: '2rem auto 0', borderRadius: '3px', boxShadow: '0 0 20px rgba(20,184,166,0.4)', animation: 'float 4s ease-in-out infinite' }}></div>
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
          {services.map((srv, idx) => {
            const isHovered = hoveredCard === idx;
            return (
              <div 
                key={srv.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: 'relative', height: '400px', borderRadius: '32px', overflow: 'hidden',
                  cursor: 'default', transition: 'all 0.5s ease',
                  border: isHovered ? '1px solid rgba(20,184,166,0.5)' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: isHovered ? '0 30px 70px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                  <img loading="lazy" src={srv.img} alt={srv.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: isHovered ? 'scale(1.1)' : 'scale(1)', filter: isHovered ? 'brightness(0.5) blur(1px)' : 'brightness(0.8)', transition: 'all 0.7s ease' }} />
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: isHovered ? '100%' : '110px', background: isHovered ? 'rgba(11,31,51,0.85)' : 'linear-gradient(to top, rgba(11,31,51,0.95) 0%, rgba(11,31,51,0.4) 100%)', backdropFilter: isHovered ? 'blur(15px)' : 'blur(5px)', transition: 'all 0.5s ease', zIndex: 2 }}></div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', zIndex: 3 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: isHovered ? '1.5rem' : '0', transition: 'all 0.5s ease' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(20,184,166,0.2)', border: '1px solid rgba(20,184,166,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)' }}>{srv.icon}</div>
                    <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>{srv.title}</h3>
                  </div>
                  <div style={{ maxHeight: isHovered ? '200px' : '0px', opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.5s ease', overflow: 'hidden' }}>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', lineHeight: 1.5 }}>{srv.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
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
              <img loading="lazy" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80&fm=webp" alt="Warehouse" width="900" height="600" />
            </figure>
          </div>
        </div>
        <div className="supply-grid">
          <div className="supply-content-col">
            <div className="supply-cards-grid">
              <article className="glass-card supply-card reveal">
                <div className="supply-card-icon"><Package size={24} /></div>
                <h4 className="teal">{t('supply.s1.title')}</h4>
                <p>{t('supply.s1.desc')}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

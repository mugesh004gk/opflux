import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './components/LanguageContext';

const SEO = ({ title, description }) => {
  const location = useLocation();
  useEffect(() => {
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://www.opfluxsolution.com${location.pathname}`);

    // Update Twitter tags
    let twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);
    let twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', `https://www.opfluxsolution.com${location.pathname === '/' ? '' : location.pathname}`);

  }, [title, description, location]);

  return null;
};

// Lazy load sections for performance
const Sections = React.lazy(() => import('./components/Sections'));
const Hero = React.lazy(() => import('./components/Sections').then(module => ({ default: module.Hero })));
const WhatMakesOpflux = React.lazy(() => import('./components/Sections').then(module => ({ default: module.WhatMakesOpflux })));
const WhyOpflux = React.lazy(() => import('./components/Sections').then(module => ({ default: module.WhyOpflux })));
const Strategy = React.lazy(() => import('./components/Sections').then(module => ({ default: module.Strategy })));
const Foundation = React.lazy(() => import('./components/Sections').then(module => ({ default: module.Foundation })));
const Clients = React.lazy(() => import('./components/Sections').then(module => ({ default: module.Clients })));
const OurExpertise = React.lazy(() => import('./components/Sections').then(module => ({ default: module.OurExpertise })));
const ContactSection = React.lazy(() => import('./components/Sections').then(module => ({ default: module.ContactSection })));
const AboutSection = React.lazy(() => import('./components/Sections').then(module => ({ default: module.AboutSection })));
const WhatWeDo = React.lazy(() => import('./components/Sections').then(module => ({ default: module.WhatWeDo })));
const HowOpflux = React.lazy(() => import('./components/Sections').then(module => ({ default: module.HowOpflux })));
const OperationalPhilosophy = React.lazy(() => import('./components/Sections').then(module => ({ default: module.OperationalPhilosophy })));
const OperationalImpacts = React.lazy(() => import('./components/Sections').then(module => ({ default: module.OperationalImpacts })));
const SuccessStory = React.lazy(() => import('./components/Sections').then(module => ({ default: module.SuccessStory })));
const Logistics = React.lazy(() => import('./components/Sections').then(module => ({ default: module.Logistics })));

const Layout = ({ children }) => {
  useEffect(() => {
    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.05
    });

    revealElements.forEach(el => revealObserver.observe(el));
    
    // Safety check for already in-view elements
    const activateInViewReveals = () => {
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll('.reveal').forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < viewportHeight * 0.95 && rect.bottom > 0;
        if (isVisible) {
          element.classList.add('active');
        }
      });
    };
    
    activateInViewReveals();
    
    return () => {
      revealObserver.disconnect();
    };
  }, [children]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

const Home = () => (
  <>
    <SEO 
      title="OpFlux Solution | Operating The Intelligent Future" 
      description="OpFlux Solution delivers engineering-driven operations, robotic kiosk management, supply chain precision, and scalable business intelligence solutions." 
    />
    <Hero />
    <WhatMakesOpflux />
    <WhyOpflux />
    <Strategy />
    <Foundation />
    <Clients />
    <OurExpertise />
    <ContactSection />
  </>
);

const AboutPage = () => (
  <>
    <SEO 
      title="About OpFlux Solution | Operational Excellence" 
      description="Learn about OpFlux Solution's mission to drive operational excellence in automated retail and logistics." 
    />
    <AboutSection />
  </>
);

const ServicesPage = () => (
  <>
    <SEO 
      title="Services | OpFlux Solution" 
      description="Discover our range of services including robotic kiosk operations, supply chain management, and operational analytics." 
    />
    <WhatWeDo />
  </>
);

const OperationsPage = () => (
  <>
    <SEO 
      title="Operations | OpFlux Solution" 
      description="Explore our robust operational frameworks, zero-latency response protocols, and engineering standards." 
    />
    <HowOpflux />
    <OperationalPhilosophy />
    <OperationalImpacts />
  </>
);

const CaseStudyPage = () => (
  <>
    <SEO 
      title="Case Studies | OpFlux Solution" 
      description="Read how OpFlux Solution transforms businesses with structural yield optimization and integrated business intelligence." 
    />
    <SuccessStory />
    <Logistics />
  </>
);

const ContactPage = () => (
  <>
    <SEO 
      title="Contact Us | OpFlux Solution" 
      description="Get in touch with OpFlux Solution to discuss how we can elevate your automated retail operations." 
    />
    <ContactSection />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="loader-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050b14', zIndex: 9999, height: '100vh', width: '100vw' }}><div className="loader-bar" style={{ width: '200px' }}></div></div>}>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><AboutPage /></Layout>} />
            <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
            <Route path="/operations" element={<Layout><OperationsPage /></Layout>} />
            <Route path="/case-study" element={<Layout><CaseStudyPage /></Layout>} />
            <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
}

export default App;

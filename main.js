// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const primaryNav = document.getElementById('primary-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// Mobile Navigation
if (mobileMenuToggle && primaryNav) {
    const closeMobileMenu = () => {
        primaryNav.classList.remove('open');
        mobileMenuToggle.classList.remove('active');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
    };

    mobileMenuToggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const isOpen = primaryNav.classList.toggle('open');
        mobileMenuToggle.classList.toggle('active', isOpen);
        mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    primaryNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', (event) => {
        const clickedInsideMenu = primaryNav.contains(event.target);
        const clickedToggle = mobileMenuToggle.contains(event.target);
        if (!clickedInsideMenu && !clickedToggle) {
            closeMobileMenu();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeMobileMenu();
        }
    });
}

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

// Interactive Workflow Timeline (scroll-linked progress + active step)
const workflowShell = document.getElementById('workflow-shell');
const workflowStepCards = Array.from(document.querySelectorAll('.workflow-step-card'));
const workflowProgressFill = document.getElementById('workflow-progress-fill');

if (workflowShell && workflowStepCards.length && workflowProgressFill) {
    let activeWorkflowIndex = -1;
    let workflowTicking = false;

    const setActiveWorkflowStep = (nextIndex) => {
        if (nextIndex < 0 || nextIndex >= workflowStepCards.length || nextIndex === activeWorkflowIndex) {
            return;
        }

        workflowStepCards.forEach((step, idx) => {
            step.classList.toggle('active', idx === nextIndex);
        });

        activeWorkflowIndex = nextIndex;
    };

    const updateWorkflowProgressLine = () => {
        const rect = workflowShell.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const rawProgress = ((viewportHeight * 0.62) - rect.top) / Math.max(rect.height, 1);
        const clampedProgress = Math.min(1, Math.max(0, rawProgress));
        workflowProgressFill.style.height = `${(clampedProgress * 100).toFixed(2)}%`;
    };

    const updateActiveStepByScroll = () => {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const focusLine = viewportHeight * (window.innerWidth <= 768 ? 0.35 : 0.5);
        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        workflowStepCards.forEach((step, index) => {
            const rect = step.getBoundingClientRect();
            const cardCenter = rect.top + (rect.height / 2);
            const distance = Math.abs(cardCenter - focusLine);

            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestIndex = index;
            }
        });

        setActiveWorkflowStep(nearestIndex);
    };

    const updateWorkflowState = () => {
        updateWorkflowProgressLine();
        updateActiveStepByScroll();
        workflowTicking = false;
    };

    const requestWorkflowUpdate = () => {
        if (workflowTicking) return;
        workflowTicking = true;
        window.requestAnimationFrame(updateWorkflowState);
    };

    workflowStepCards.forEach((step, index) => {
        step.setAttribute('data-workflow-index', String(index));

        step.addEventListener('mouseenter', () => {
            if (window.innerWidth > 1024) {
                setActiveWorkflowStep(index);
            }
        });

        step.addEventListener('focusin', () => {
            setActiveWorkflowStep(index);
        });
    });

    window.addEventListener('scroll', requestWorkflowUpdate, { passive: true });
    window.addEventListener('resize', requestWorkflowUpdate);

    const applyWorkflowMotion = async () => {
        workflowShell.classList.add('motion-enabled');

        try {
            const { inView, animate } = await import('https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm');

            workflowStepCards.forEach((step, index) => {
                inView(step, () => {
                    step.classList.add('motion-visible');
                    animate(
                        step,
                        { opacity: [0, 1], y: [20, 0] },
                        { duration: 0.52, delay: Math.min(index * 0.07, 0.22), easing: 'ease-out' }
                    );
                }, {
                    margin: '0px 0px -12% 0px'
                });
            });
        } catch (error) {
            // Fallback animation when Framer Motion CDN is unavailable.
            const fallbackObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('motion-visible');
                    observer.unobserve(entry.target);
                });
            }, {
                threshold: 0.15
            });

            workflowStepCards.forEach((step) => fallbackObserver.observe(step));
        }
    };

    setActiveWorkflowStep(0);
    requestWorkflowUpdate();
    applyWorkflowMotion();
}

// FAQ Accordion Logic
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        accordionItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }

        if (mobileMenuToggle && primaryNav) {
            primaryNav.classList.remove('open');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Subtle Parallax for Hero
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, { passive: true });

// Interactive Mouse Parallax for Hero Core
document.addEventListener('mousemove', (e) => {
    const heroRight = document.querySelector('.hero-right-panel');
    const heroGrid = document.querySelector('.hero-grid-bg');
    
    // Only run if elements exist and on desktop
    if (window.innerWidth > 1024 && heroRight && heroGrid) {
        // Calculate mouse offset from center
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        
        // Shift the core visual elements dynamically
        heroRight.style.transform = `translate(${x}px, ${y}px)`;
    }
});

// Language Switch Logic
function setLanguage(lang) {
    if (!window.i18nTranslations) return;
    const dict = window.i18nTranslations[lang];
    if (!dict) return;

    // Update active UI toggle
    document.getElementById('btn-en').classList.remove('active');
    document.getElementById('btn-fr').classList.remove('active');
    document.getElementById(`btn-${lang}`).classList.add('active');

    // Replace all elements with data-i18n attribute
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
    
    // Save language to local storage
    localStorage.setItem('opflux_lang', lang);
}

// Check local storage for language preference on load
document.addEventListener('DOMContentLoaded', () => {
    if (window.i18nTranslations) {
        const savedLang = localStorage.getItem('opflux_lang') || 'en';
        setLanguage(savedLang);
    }
    
    // Initialize EmailJS
    if (window.emailjs) {
        // Replace with actual keys later
        emailjs.init("YOUR_PUBLIC_KEY"); 
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        const btnText = document.getElementById('btn-text');
        const btnLoader = document.getElementById('btn-loader');
        const formSuccess = document.getElementById('form-success');
        const formError = document.getElementById('form-error');

        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline';
        formSuccess.style.display = 'none';
        formError.style.display = 'none';

        // NOTE: Make sure to replace these IDs with real EmailJS Service/Template IDs
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(() => {
                // Success
                formSuccess.style.display = 'block';
                contactForm.reset();
            }, (error) => {
                // Error
                console.error("EmailJS Error:", error);
                formError.style.display = 'block';
            })
            .finally(() => {
                // Reset button
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoader.style.display = 'none';
            });
    });
}

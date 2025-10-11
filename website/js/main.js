/**
 * Main JavaScript file for Natalia Poliachenko's Coaching Website
 * Handles all interactive features and animations
 */

// =========================================
// DOM Elements
// =========================================
const elements = {
    header: document.querySelector('.site-header'),
    mobileMenuToggle: document.querySelector('.mobile-menu-toggle'),
    navMenu: document.querySelector('.header-center'),
    navLinks: document.querySelectorAll('.main-nav a'),
    langButtons: document.querySelectorAll('.lang-btn'),
    caseCards: document.querySelectorAll('.case-card'),
    sessionCards: document.querySelectorAll('.session-card'),
    animatedElements: document.querySelectorAll('.animate-fade-in, .animate-slide-up')
};

// =========================================
// Smooth Scroll Navigation
// =========================================
function initSmoothScroll() {
    elements.navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (elements.navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
                
                // Update active nav state
                updateActiveNav(this);
            }
        });
    });
    
    // Footer nav links
    document.querySelectorAll('.footer-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update active navigation state
function updateActiveNav(activeLink) {
    elements.navLinks.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// =========================================
// Mobile Menu Toggle
// =========================================
function initMobileMenu() {
    if (!elements.mobileMenuToggle) return;
    
    elements.mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!elements.mobileMenuToggle.contains(e.target) && 
            !elements.navMenu.contains(e.target) && 
            elements.navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    elements.navMenu.classList.toggle('active');
    elements.mobileMenuToggle.classList.toggle('active');
    
    // Animate hamburger lines
    const spans = elements.mobileMenuToggle.querySelectorAll('span');
    if (elements.mobileMenuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
}

// =========================================
// Card Expansion/Collapse
// =========================================
function initExpandableCards() {
    // Case Cards
    elements.caseCards.forEach(card => {
        const header = card.querySelector('.case-header');
        const expandBtn = card.querySelector('.expand-btn');
        
        if (header) {
            header.addEventListener('click', function(e) {
                // Don't expand if clicking on a link within the header
                if (e.target.tagName === 'A') return;
                
                toggleCard(card);
            });
        }
    });
    
    // Session Cards
    elements.sessionCards.forEach(card => {
        const header = card.querySelector('.session-header');
        
        if (header) {
            header.addEventListener('click', function(e) {
                if (e.target.tagName === 'A') return;
                
                toggleCard(card);
            });
        }
    });
}

function toggleCard(card) {
    const isExpanded = card.classList.contains('expanded');
    
    // Close all other cards in the same section
    const section = card.closest('.cases-grid, .sessions-grid');
    if (section) {
        section.querySelectorAll('.case-card, .session-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
    }
    
    // Toggle current card
    card.classList.toggle('expanded');
}

// =========================================
// Language Switcher (Placeholder)
// =========================================
function initLanguageSwitcher() {
    elements.langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            elements.langButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const selectedLang = this.dataset.lang;
            console.log(`Language switched to: ${selectedLang}`);
            
            // TODO: Implement actual language switching
            // This is where you would:
            // 1. Load the appropriate language file
            // 2. Update all elements with data-i18n attributes
            // 3. Store the preference in localStorage
            
            // Placeholder for future implementation
            localStorage.setItem('preferredLanguage', selectedLang);
            
            // Show a temporary notification (remove in production)
            showNotification(`Language switching to ${selectedLang.toUpperCase()} will be implemented soon!`);
        });
    });
}

// Temporary notification helper
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'temp-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--secondary-teal);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// =========================================
// Scroll-based Animations
// =========================================
function initScrollAnimations() {
    // Header shadow on scroll
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove header shadow
        if (currentScroll > 50) {
            elements.header.style.boxShadow = 'var(--shadow-md)';
        } else {
            elements.header.style.boxShadow = 'var(--shadow-sm)';
        }
        
        // Hide/show header on mobile when scrolling
        if (window.innerWidth <= 768) {
            if (currentScroll > lastScroll && currentScroll > 100) {
                elements.header.style.transform = 'translateY(-100%)';
            } else {
                elements.header.style.transform = 'translateY(0)';
            }
        }
        
        lastScroll = currentScroll;
        
        // Update active nav based on scroll position
        updateActiveNavOnScroll();
    });
}

// Update active navigation based on scroll position
function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            elements.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// =========================================
// Intersection Observer for Animations
// =========================================
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add stagger effect for grid items
                if (entry.target.closest('.experience-grid, .stats-container')) {
                    const siblings = entry.target.parentElement.children;
                    Array.from(siblings).forEach((sibling, index) => {
                        setTimeout(() => {
                            sibling.classList.add('visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    elements.animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    // Observe grid items
    document.querySelectorAll('.exp-item, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

// =========================================
// Contact Icon Enhancement
// =========================================
function initContactIcon() {
    const contactIcon = document.querySelector('.contact-icon');
    
    if (contactIcon) {
        contactIcon.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Smooth scroll to contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const headerOffset = 80;
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// =========================================
// Keyboard Navigation
// =========================================
function initKeyboardNav() {
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && elements.navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
        
        // Tab navigation for expandable cards
        if (e.key === 'Enter' || e.key === ' ') {
            if (document.activeElement.classList.contains('expand-btn')) {
                e.preventDefault();
                const card = document.activeElement.closest('.case-card, .session-card');
                if (card) {
                    toggleCard(card);
                }
            }
        }
    });
}

// =========================================
// Performance Optimizations
// =========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    updateActiveNavOnScroll();
}, 100);

// =========================================
// Initialize Everything
// =========================================
function init() {
    // Check if DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }
    
    // Initialize all features
    initSmoothScroll();
    initMobileMenu();
    initExpandableCards();
    initLanguageSwitcher();
    initScrollAnimations();
    initIntersectionObserver();
    initContactIcon();
    initKeyboardNav();
    
    // Add optimized scroll listener
    window.addEventListener('scroll', optimizedScrollHandler);
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        elements.langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === savedLang) {
                btn.classList.add('active');
            }
        });
    }
    
    console.log('Website initialized successfully! 🚀');
}

// Start initialization
init();

// =========================================
// Future Translation System Placeholder
// =========================================
/**
 * Translation system structure for future implementation
 * 
 * const translations = {
 *     en: {
 *         nav: {
 *             overview: "Overview",
 *             cases: "Cases",
 *             sessions: "Sessions",
 *             about: "About Me"
 *         },
 *         hero: {
 *             title: "Sessions of every kind...",
 *             // ... more translations
 *         }
 *     },
 *     fr: {
 *         // French translations
 *     },
 *     ru: {
 *         // Russian translations
 *     }
 * };
 * 
 * function translatePage(lang) {
 *     const elements = document.querySelectorAll('[data-i18n]');
 *     elements.forEach(element => {
 *         const key = element.dataset.i18n;
 *         const keys = key.split('.');
 *         let translation = translations[lang];
 *         
 *         keys.forEach(k => {
 *             translation = translation[k];
 *         });
 *         
 *         if (translation) {
 *             element.textContent = translation;
 *         }
 *     });
 * }
 */

// =========================================
// Animation CSS (to be added to styles.css)
// =========================================
const animationStyles = `
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideOutRight {
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
    }
}

.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
`;

// Add animation styles dynamically (temporary solution)
const style = document.createElement('style');
style.textContent = animationStyles;
document.head.appendChild(style);
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
            const href = this.getAttribute('href');
            
            // Check if it's a same-page anchor link (starts with #)
            if (href.startsWith('#')) {
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    e.preventDefault();
                    
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
            }
            // If it's a cross-page link (like ../index.html#sessions), let the browser handle it naturally
        });
    });
    
    // Footer nav links
    document.querySelectorAll('.footer-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's a same-page anchor link
            if (href.startsWith('#')) {
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    e.preventDefault();
                    
                    const headerOffset = 80;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            // If it's a cross-page link, let the browser handle it naturally
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
        const description = card.querySelector('.case-description');
        const expandBtn = card.querySelector('.expand-btn');
        
        if (header) {
            header.addEventListener('click', function(e) {
                // Don't expand if clicking on a link within the header
                if (e.target.tagName === 'A') return;
                
                toggleCard(card);
            });
        }
        
        if (description) {
            description.addEventListener('click', function(e) {
                // Don't expand if clicking on a link within the description
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
// Language Switcher with i18n
// =========================================
let currentTranslations = {};
let currentLanguage = 'en';

// Load translation JSON file
async function loadTranslations(lang) {
    try {
        // Determine the correct path - handle both root and subdirectory pages
        const pathPrefix = window.location.pathname.includes('/sessions/') || window.location.pathname.includes('/cases/') ? '../' : '';
        const translationPath = `${pathPrefix}js/translations/${lang}.json`;
        
        console.log(`Loading translations from: ${translationPath}`);
        const response = await fetch(translationPath);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: Failed to load translations for ${lang}`);
        }
        
        currentTranslations = await response.json();
        currentLanguage = lang;
        console.log(`✓ Loaded ${lang}.json successfully with ${Object.keys(currentTranslations).length} top-level keys`);
        return currentTranslations;
    } catch (error) {
        console.error(`✗ Error loading translations for ${lang}:`, error);
        
        // Try to use embedded translations if available (for file:// protocol)
        if (typeof EMBEDDED_TRANSLATIONS !== 'undefined' && EMBEDDED_TRANSLATIONS[lang]) {
            console.log(`✓ Using embedded translations for ${lang}`);
            currentTranslations = EMBEDDED_TRANSLATIONS[lang];
            currentLanguage = lang;
            return currentTranslations;
        }
        
        console.warn('If you are opening the file directly (file://), embedded translations should be loaded.');
        console.warn('For best results, use a local web server: python3 -m http.server 8080');
        
        // Fallback to English if loading fails
        if (lang !== 'en') {
            console.log('Attempting fallback to English...');
            return loadTranslations('en');
        }
        return {};
    }
}

// Get nested translation value from key like "nav.sessions"
function getTranslation(key) {
    const keys = key.split('.');
    let value = currentTranslations;
    
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return null;
        }
    }
    
    return value;
}

// Apply translations to all elements with data-i18n attributes
function applyTranslations() {
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    console.log(`Applying translations to ${elementsToTranslate.length} elements...`);
    
    let successCount = 0;
    let failCount = 0;
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        
        if (translation !== null && translation !== undefined) {
            const attr = element.getAttribute('data-i18n-attr');
            if (attr) {
                element.setAttribute(attr, translation);
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
            successCount++;
        } else {
            failCount++;
        }
    });
    
    console.log(`✓ Translated ${successCount} elements (${failCount} missing translations)`);
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
    
    // Update images based on language
    applyLanguageImages();
    
    // Hide elements with empty translations
    applyConditionalVisibility();
}

// Apply language-specific images
function applyLanguageImages() {
    const imagesToTranslate = document.querySelectorAll('[data-i18n-img]');
    console.log(`Applying language-specific images to ${imagesToTranslate.length} elements...`);
    
    imagesToTranslate.forEach(img => {
        const langAttr = `data-img-${currentLanguage}`;
        const newSrc = img.getAttribute(langAttr);
        
        if (newSrc) {
            img.src = newSrc;
            console.log(`✓ Updated image src to: ${newSrc}`);
        }
    });
}

// Hide elements when translation is empty
function applyConditionalVisibility() {
    const elementsToHide = document.querySelectorAll('[data-i18n-hide]');
    
    elementsToHide.forEach(element => {
        const key = element.getAttribute('data-i18n-hide');
        const translation = getTranslation(key);
        
        if (!translation || translation.trim() === '') {
            element.style.display = 'none';
        } else {
            element.style.display = '';
        }
    });
}

// Switch language
async function switchLanguage(lang) {
    console.log(`\n=== Switching language to: ${lang.toUpperCase()} ===`);
    
    // Update active button state (re-query to ensure we get buttons on current page)
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Load and apply translations
    await loadTranslations(lang);
    applyTranslations();
    
    // Store preference
    localStorage.setItem('preferredLanguage', lang);
    
    console.log(`✓ Language successfully switched to: ${lang.toUpperCase()}\n`);
}

// Initialize language switcher
function initLanguageSwitcher() {
    elements.langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedLang = this.dataset.lang;
            switchLanguage(selectedLang);
        });
    });
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
            // Check if contact section exists on current page
            const contactSection = document.querySelector('#contact');
            
            if (contactSection) {
                // On main page - smooth scroll
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                // On subpages - redirect to index with contact hash
                e.preventDefault();
                const href = contactIcon.getAttribute('href');
                window.location.href = href;
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
// Handle Cross-Page Navigation
// =========================================
function handleHashNavigation() {
    // Check if there's a hash in the URL (e.g., #sessions, #cases)
    if (window.location.hash) {
        const targetId = window.location.hash;
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Wait a bit for page to fully load
            setTimeout(() => {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
}

// =========================================
// Initialize Everything
// =========================================
async function init() {
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
    
    // Handle navigation from other pages with hash
    handleHashNavigation();
    
    // Add optimized scroll listener
    window.addEventListener('scroll', optimizedScrollHandler);
    
    // Check for saved language preference and load translations
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    await switchLanguage(savedLang);
    
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
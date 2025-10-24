// =============================================
// PORTFOLIO DIPZKYY - JAVASCRIPT (UPDATED & FIXED)
// =============================================

// Global Variables
let skillsAnimated = false;
let heroAnimationsPlayed = false;
let currentTheme = 'dark';
let typingAnimationStarted = false;

// GitHub Accounts Configuration
const githubAccounts = [
    { 
        username: 'dipaanakmbarep', 
        label: 'Personal Projects',
        avatar: 'https://github.com/dipaanakmbarep.png'
    },
    { 
        username: 'dipzkyy', 
        label: 'Development Projects',
        avatar: 'https://github.com/dipzkyy.png'
    }
];

let allProjects = [];
let currentFilter = 'all';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio Dipzkyy Initializing...');
    
    // Initialize coding sphere first - FIXED TECH ICONS
    initCodingSphere();
    
    initBackgroundLayers();
    initLoadingScreen();
    initPerformanceOptimizations();
    initHeaderScroll();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initSkillsAnimation();
    initFormSubmission();
    initActiveNav();
    initThemeSwitcher();
    initBackToTop();
    initDownloadCV();
    loadGitHubProjects();
    
    // Initialize enhanced animations
    initTechIconsAnimations();
    initParallaxEffect();
    initTextReveal();
    initCounters();
    enhanceParticles();
    
    console.log('✅ All systems initialized!');
});

// =============================================
// FIXED CODING SPHERE & TECH ICONS - TIDAK HILANG LAGI
// =============================================
function initCodingSphere() {
    const codingSphere = document.querySelector('.coding-sphere');
    if (!codingSphere) {
        console.log('❌ Coding sphere not found');
        return;
    }
    
    console.log('🎯 Initializing Coding Sphere...');
    
    // Force initial styles to prevent disappearing
    codingSphere.style.opacity = '1';
    codingSphere.style.visibility = 'visible';
    codingSphere.style.display = 'block';
    codingSphere.style.zIndex = '13';
    
    const techIcons = document.querySelectorAll('.tech-icon');
    const orbits = document.querySelectorAll('.orbit');
    const sphere = document.querySelector('.sphere');
    
    // Ensure all elements are visible
    if (sphere) {
        sphere.style.opacity = '1';
        sphere.style.visibility = 'visible';
    }
    
    techIcons.forEach(icon => {
        icon.style.opacity = '1';
        icon.style.visibility = 'visible';
        icon.style.display = 'flex';
        icon.style.zIndex = '14';
        // Force position stability
        icon.style.position = 'absolute';
        icon.style.willChange = 'transform';
    });
    
    orbits.forEach(orbit => {
        orbit.style.opacity = '1';
        orbit.style.visibility = 'visible';
        orbit.style.display = 'block';
    });
    
    console.log('✅ Coding sphere initialized with', techIcons.length, 'icons and', orbits.length, 'orbits');
}

// =============================================
// ENHANCED TECH ICONS ANIMATIONS - BARU DITAMBAH
// =============================================
function initTechIconsAnimations() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    console.log('🎭 Initializing enhanced tech icons animations...');
    
    techIcons.forEach(icon => {
        // Add hover effects
        icon.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.2) rotate(15deg)';
            this.style.filter = 'drop-shadow(0 0 20px currentColor) brightness(1.2)';
            this.style.zIndex = '15';
            this.style.transition = 'all 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = '';
            this.style.filter = '';
            this.style.zIndex = '14';
            this.style.transition = 'all 0.3s ease';
        });
        
        // Add click effects
        icon.addEventListener('click', function() {
            this.classList.add('pulse');
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 600);
        });
        
        // Add individual entrance animations with delays
        const delay = icon.getAttribute('data-delay') || 0;
        setTimeout(() => {
            icon.classList.add('animate-in');
        }, delay * 1000 + 1200); // Delay setelah hero animation
    });
    
    console.log('✅ Enhanced tech icons animations initialized');
}

// =============================================
// ENHANCED BACKGROUND PARTICLES - LEBIH MENONJOL
// =============================================
function createParticles() {
    const particlesContainer = document.getElementById('bgParticles');
    if (!particlesContainer) {
        console.log('❌ bgParticles container not found');
        return;
    }
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    const particleCount = 10;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size class
        const sizeClasses = ['size-1', 'size-2', 'size-3', 'size-4', 'size-5'];
        const randomSize = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
        particle.classList.add(randomSize);
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random animation
        const animations = ['floatParticle', 'floatParticle2', 'floatParticle3'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        
        // Random speed for mouse interaction
        const randomSpeed = (Math.random() * 0.2 + 0.05).toFixed(2);
        particle.setAttribute('data-speed', randomSpeed);
        
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationName = randomAnimation;
        particle.style.animationDuration = `${20 + Math.random() * 20}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationTimingFunction = 'ease-in-out';
        
        particlesContainer.appendChild(particle);
    }
    
    console.log(`✅ Created ${particleCount} enhanced particles`);
}

// =============================================
// INITIALIZE ENHANCED BACKGROUND LAYERS
// =============================================
function initBackgroundLayers() {
    console.log('🎨 Initializing background layers...');
    
    // Create background layers
    const body = document.body;
    
    // Layer 1: Base Gradient
    const baseLayer = document.createElement('div');
    baseLayer.className = 'bg-base';
    body.appendChild(baseLayer);
    
    // Layer 2: Grid
    const gridLayer = document.createElement('div');
    gridLayer.className = 'bg-grid';
    body.appendChild(gridLayer);
    
    // Layer 3: Particles
    const particlesLayer = document.createElement('div');
    particlesLayer.id = 'bgParticles';
    particlesLayer.className = 'bg-particles';
    body.appendChild(particlesLayer);
    
    // Layer 4: Blur Overlay
    const blurLayer = document.createElement('div');
    blurLayer.className = 'blur-overlay';
    body.appendChild(blurLayer);
    
    // Layer 5: Glow Effects
    const glowLayer = document.createElement('div');
    glowLayer.className = 'glow-effects';
    
    const glow1 = document.createElement('div');
    glow1.className = 'glow-circle glow-1';
    glowLayer.appendChild(glow1);
    
    const glow2 = document.createElement('div');
    glow2.className = 'glow-circle glow-2';
    glowLayer.appendChild(glow2);
    
    const glow3 = document.createElement('div');
    glow3.className = 'glow-circle glow-3';
    glowLayer.appendChild(glow3);
    
    body.appendChild(glowLayer);
    
    // Create particles
    createParticles();
    
    console.log('✅ Background layers initialized');
}

// ===== ENHANCED THEME SWITCHER - FIXED =====
function initThemeSwitcher() {
    console.log('🎯 Initializing Theme Switcher...');
    
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    
    console.log('Desktop Theme Toggle:', themeToggle);
    console.log('Mobile Theme Toggle:', mobileThemeToggle);
    
    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        applyTheme(currentTheme);
        console.log('📁 Loaded theme from storage:', currentTheme);
    } else {
        // Default to dark theme
        currentTheme = 'dark';
        applyTheme(currentTheme);
        localStorage.setItem('portfolio-theme', currentTheme);
        console.log('⚡ Set default theme:', currentTheme);
    }
    
    // Update UI berdasarkan theme
    updateThemeUI();
    
    // Desktop theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🖱️ Desktop theme button clicked');
            toggleTheme();
        });
    } else {
        console.error('❌ themeToggle element not found!');
    }
    
    // Mobile theme toggle
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('📱 Mobile theme button clicked');
            toggleTheme();
        });
    } else {
        console.error('❌ mobileThemeToggle element not found!');
    }
    
    function toggleTheme() {
        console.log('🔄 Toggling theme...');
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        console.log('🎨 New theme:', currentTheme);
        
        applyTheme(currentTheme);
        localStorage.setItem('portfolio-theme', currentTheme);
        updateThemeUI();
        
        // Recreate particles with new theme colors
        setTimeout(() => {
            createParticles();
            console.log('🔄 Particles recreated for new theme');
        }, 300);
    }
    
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        console.log('✅ Theme applied:', theme);
    }
    
    function updateThemeUI() {
        const themeIcons = document.querySelectorAll('.theme-btn i');
        const themeTexts = document.querySelectorAll('.theme-text');
        
        console.log('Updating UI - Icons:', themeIcons.length, 'Texts:', themeTexts.length);
        
        // Update icons
        themeIcons.forEach(icon => {
            if (currentTheme === 'dark') {
                icon.className = 'fas fa-moon';
            } else {
                icon.className = 'fas fa-sun';
            }
        });
        
        // Update text
        themeTexts.forEach(text => {
            if (currentTheme === 'dark') {
                text.textContent = 'Dark Mode';
            } else {
                text.textContent = 'Light Mode';
            }
        });
        
        console.log('✅ Theme UI updated');
    }
    
    console.log('✅ Theme Switcher Initialized Successfully');
}

// ===== ENHANCED LOADING SCREEN =====
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.querySelector('.progress-bar');
    
    if (!loadingScreen || !progressBar) {
        console.log('❌ Loading screen elements not found');
        return;
    }
    
    console.log('⏳ Starting loading screen...');
    
    // Animate progress bar
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // Loading complete
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    // Start hero animations after loading
                    initHeroAnimations();
                    console.log('✅ Loading complete, starting animations');
                }, 800);
            }, 500);
        }
        
        progressBar.style.width = `${progress}%`;
    }, 200);
}

// ===== FIXED HERO ANIMATIONS - DIPERBAIKI =====
function initHeroAnimations() {
    const runningText = document.getElementById('runningText');
    const typingContainer = document.querySelector('.typing-container');
    const heroDescription = document.querySelector('.hero-description');
    const descLines = document.querySelectorAll('.desc-line');
    const codingSphere = document.querySelector('.coding-sphere');
    const techIcons = document.querySelectorAll('.tech-icon');
    
    if (!heroAnimationsPlayed) {
        console.log('🎭 Starting hero animations...');
        
        // Pastikan coding sphere tetap visible
        if (codingSphere) {
            codingSphere.style.opacity = '1';
            codingSphere.style.visibility = 'visible';
            console.log('✅ Coding sphere confirmed visible');
        }
        
        // "I'm Dipzkyy" - slide in dari kiri
        setTimeout(() => {
            if (runningText) {
                runningText.classList.add('animate-in');
                console.log('✅ Running text animated');
            }
        }, 300);
        
        // Typing animation
        setTimeout(() => {
            if (typingContainer) {
                typingContainer.classList.add('animate-in');
                initTypingAnimation();
                console.log('✅ Typing animation started');
            }
        }, 800);
        
        // Tech icons animation - FIXED: Animasi terpisah dengan delay
        setTimeout(() => {
            techIcons.forEach(icon => {
                const delay = icon.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    icon.classList.add('animate-in');
                }, delay * 1000);
            });
            console.log('✅ Tech icons animated with individual delays');
        }, 1200);
        
        // Deskripsi - efek masuk
        setTimeout(() => {
            if (heroDescription) {
                heroDescription.classList.add('animate-in');
                descLines.forEach((line, index) => {
                    setTimeout(() => {
                        line.classList.add('animate-in');
                    }, 1000 + (index * 150));
                });
                console.log('✅ Description animated');
            }
        }, 1500);
        
        heroAnimationsPlayed = true;
    }
}

// ===== TYPING ANIMATION =====
function initTypingAnimation() {
    const typingText = document.getElementById('typingText');
    const typingContainer = document.querySelector('.typing-container');
    const text = "Beginner Software Developer";
    
    if (!typingText) return;
    
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = text.substring(0, charIndex);
        typingText.textContent = currentText;
        
        if (!isDeleting && charIndex < text.length) {
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, typingSpeed / 2);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                setTimeout(type, 1000);
            } else {
                setTimeout(type, 2000);
            }
        }
    }
    
    typingAnimationStarted = true;
    type();
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function initPerformanceOptimizations() {
    // Debounce function untuk optimasi scroll
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // Optimized scroll handlers
    const optimizedScroll = debounce(() => {
        // Header scroll effect
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Back to top button
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    }, 10);

    window.addEventListener('scroll', optimizedScroll);
}

// ===== ENHANCED SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                
                // Special handling untuk skill cards
                if (entry.target.classList.contains('skill-card')) {
                    setTimeout(() => {
                        entry.target.classList.add('animate');
                    }, 100);
                }
            } else {
                if (!entry.target.classList.contains('skill-card')) {
                    entry.target.classList.remove('animate-visible');
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const elementsToAnimate = document.querySelectorAll('.scroll-animate');
    elementsToAnimate.forEach(el => {
        scrollObserver.observe(el);
    });

    // Special observer untuk skill cards
    const skillsSection = document.getElementById('skills');
    const skillCards = document.querySelectorAll('.skill-card');
    
    if (skillsSection && skillCards.length > 0) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillCards.forEach(card => {
                        card.classList.remove('animate');
                        card.classList.add('reset');
                    });
                    
                    setTimeout(() => {
                        skillCards.forEach((card, index) => {
                            card.classList.remove('reset');
                            setTimeout(() => {
                                card.classList.add('animate');
                            }, index * 150);
                        });
                    }, 100);
                    
                } else {
                    skillCards.forEach(card => {
                        card.classList.remove('animate');
                        card.classList.add('reset');
                    });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        });
        
        skillsObserver.observe(skillsSection);
    }
}

// ===== BACK TO TOP BUTTON =====
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== DOWNLOAD CV FUNCTION =====
function initDownloadCV() {
    const downloadCvHero = document.getElementById('downloadCvHero');
    const downloadCvNav = document.getElementById('downloadCvNav');
    const downloadCvMobile = document.getElementById('downloadCvMobile');
    
    function handleDownload(e) {
        e.preventDefault();
        console.log('📄 CV download initiated');
        trackDownloadEvent();
        
        // Simulate download
        setTimeout(() => {
            showNotification('CV berhasil diunduh! Terima kasih.', 'success');
        }, 1000);
    }
    
    if (downloadCvHero) {
        downloadCvHero.addEventListener('click', handleDownload);
    }
    
    if (downloadCvNav) {
        downloadCvNav.addEventListener('click', handleDownload);
    }
    
    if (downloadCvMobile) {
        downloadCvMobile.addEventListener('click', handleDownload);
    }
}

function trackDownloadEvent() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'download', {
            'event_category': 'CV',
            'event_label': 'CV_Dipzkyy.jpg'
        });
    }
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const mobileSettings = document.getElementById('mobileSettings');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            if (mobileSettings) {
                mobileSettings.classList.remove('active');
            }
        });
        
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        if (hamburgerMenu && mobileSettings) {
            let settingsTimeout;
            
            hamburgerMenu.addEventListener('click', function(e) {
                e.stopPropagation();
                
                if (settingsTimeout) clearTimeout(settingsTimeout);
                
                settingsTimeout = setTimeout(() => {
                    mobileSettings.classList.toggle('active');
                }, 300);
            });
        }
        
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                navLinks.classList.remove('active');
                if (mobileSettings) {
                    mobileSettings.classList.remove('active');
                }
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                if (mobileSettings) {
                    mobileSettings.classList.remove('active');
                }
            });
        });
    }
}

// ===== ENHANCED NOTIFICATION =====
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    if (!notification || !notificationText) return;
    
    notificationText.textContent = message;
    
    notification.className = 'notification';
    if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
    } else if (type === 'info') {
        notification.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
    } else {
        notification.style.background = 'linear-gradient(135deg, var(--primary), var(--primary-dark))';
    }
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 5000);
}

// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
    const header = document.getElementById('header');
    // Already handled in performance optimizations
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ===== ACTIVE NAVIGATION =====
function initActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== SKILLS ANIMATION =====
function initSkillsAnimation() {
    // Already handled in enhanced scroll animations
}

// ===== FORM SUBMISSION - FIXED FOR FORMSPREE =====
function initFormSubmission() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    
    if (!contactForm) return;
    
    const inputs = {
        name: document.getElementById('nameInput'),
        email: document.getElementById('emailInput'),
        subject: document.getElementById('subjectInput'),
        message: document.getElementById('messageInput')
    };
    
    const errors = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        subject: document.getElementById('subjectError'),
        message: document.getElementById('messageError')
    };
    
    // Validasi individual fields
    Object.keys(inputs).forEach(key => {
        if (inputs[key]) {
            inputs[key].addEventListener('input', function() {
                validateField(key, this.value);
            });
            
            inputs[key].addEventListener('blur', function() {
                validateField(key, this.value);
            });
        }
    });
    
    function validateField(fieldName, value) {
        let isValid = true;
        let errorMessage = '';
        
        switch(fieldName) {
            case 'name':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = 'Nama lengkap harus diisi';
                } else if (value.trim().length < 2) {
                    isValid = false;
                    errorMessage = 'Nama minimal 2 karakter';
                }
                break;
                
            case 'email':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = 'Email harus diisi';
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    isValid = false;
                    errorMessage = 'Format email tidak valid';
                }
                break;
                
            case 'subject':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = 'Subjek harus diisi';
                } else if (value.trim().length < 5) {
                    isValid = false;
                    errorMessage = 'Subjek minimal 5 karakter';
                }
                break;
                
            case 'message':
                if (!value.trim()) {
                    isValid = false;
                    errorMessage = 'Pesan harus diisi';
                } else if (value.trim().length < 10) {
                    isValid = false;
                    errorMessage = 'Pesan minimal 10 karakter';
                }
                break;
        }
        
        if (inputs[fieldName] && errors[fieldName]) {
            if (!isValid) {
                inputs[fieldName].classList.remove('success');
                inputs[fieldName].classList.add('error');
                errors[fieldName].textContent = errorMessage;
                errors[fieldName].classList.add('show');
            } else {
                inputs[fieldName].classList.remove('error');
                inputs[fieldName].classList.add('success');
                errors[fieldName].classList.remove('show');
            }
        }
        
        return isValid;
    }
    
    function validateForm() {
        let isFormValid = true;
        
        Object.keys(inputs).forEach(key => {
            if (!validateField(key, inputs[key].value)) {
                isFormValid = false;
            }
        });
        
        return isFormValid;
    }
    
    // Fungsi untuk mengirim data ke Formspree
    async function submitToFormspree(formData) {
        // Gunakan Formspree ID Anda: xyznaleo
        const formspreeEndpoint = 'https://formspree.io/f/xyznaleo';
        
        try {
            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                return { success: true, message: 'Pesan berhasil dikirim! Terima kasih atas kritik dan sarannya.' };
            } else {
                const errorData = await response.json();
                return { 
                    success: false, 
                    message: errorData.error || 'Terjadi kesalahan saat mengirim pesan' 
                };
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            return { 
                success: false, 
                message: 'Koneksi internet bermasalah. Silakan coba lagi.' 
            };
        }
    }
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        console.log('📝 Form submission started...');
        
        // Validasi form
        if (!validateForm()) {
            showNotification('Harap perbaiki error pada form terlebih dahulu', 'error');
            return;
        }
        
        // Tampilkan loading state
        if (btnText && btnLoader && submitBtn) {
            btnText.style.display = 'none';
            btnLoader.style.display = 'block';
            submitBtn.disabled = true;
        }
        
        // Kumpulkan data form
        const formData = {
            name: inputs.name.value.trim(),
            email: inputs.email.value.trim(),
            subject: inputs.subject.value.trim(),
            message: inputs.message.value.trim(),
            _subject: `Portfolio Contact: ${inputs.subject.value.trim()}`,
            _replyto: inputs.email.value.trim(),
            _format: 'plain'
        };
        
        console.log('📤 Sending form data to Formspree:', formData);
        
        try {
            // Kirim ke Formspree
            const result = await submitToFormspree(formData);
            
            if (result.success) {
                // Reset form jika berhasil
                contactForm.reset();
                
                // Reset styles
                Object.keys(inputs).forEach(key => {
                    inputs[key].classList.remove('error', 'success');
                    if (errors[key]) {
                        errors[key].classList.remove('show');
                    }
                });
                
                showNotification(result.message, 'success');
                console.log('✅ Form submitted successfully to Formspree');
                
            } else {
                showNotification(result.message, 'error');
                console.error('❌ Form submission failed:', result.message);
            }
            
        } catch (error) {
            console.error('❌ Form submission error:', error);
            showNotification('Terjadi kesalahan tak terduga. Silakan coba lagi.', 'error');
        } finally {
            // Reset loading state
            if (btnText && btnLoader && submitBtn) {
                btnText.style.display = 'block';
                btnLoader.style.display = 'none';
                submitBtn.disabled = false;
            }
        }
    });
}

// =============================================
// ENHANCED ANIMATIONS - BARU DITAMBAH
// =============================================

// Parallax effect for background
function initParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Text reveal animations
function initTextReveal() {
    const textElements = document.querySelectorAll('.reveal-text');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.5
    });
    
    textElements.forEach(text => {
        observer.observe(text);
    });
}

// Counter animations
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 16);
                
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Particle system enhancement
function enhanceParticles() {
    const particlesContainer = document.getElementById('bgParticles');
    if (!particlesContainer) return;
    
    // Add interactive particles on mouse move
    document.addEventListener('mousemove', function(e) {
        const particles = document.querySelectorAll('.particle');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        particles.forEach(particle => {
            const speed = parseFloat(particle.getAttribute('data-speed')) || 0.1;
            const x = (mouseX - 0.5) * speed * 100;
            const y = (mouseY - 0.5) * speed * 100;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// =============================================
// GITHUB INTEGRATION - TETAP SAMA
// =============================================

// GitHub API integration
async function loadGitHubProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const totalRepos = document.getElementById('totalRepos');
    const totalStars = document.getElementById('totalStars');
    const totalForks = document.getElementById('totalForks');
    const totalFollowers = document.getElementById('totalFollowers');
    
    if (!projectsGrid) return;

    try {
        projectsGrid.innerHTML = '<div class="loading-projects"><i class="fas fa-spinner fa-spin"></i><p>Memuat project dari GitHub...</p></div>';

        const accountPromises = githubAccounts.map(account => 
            fetch(`https://api.github.com/users/${account.username}/repos?sort=updated&per_page=10`)
                .then(response => response.json())
                .then(repos => repos.map(repo => ({ ...repo, account: account.username })))
        );

        const userPromises = githubAccounts.map(account =>
            fetch(`https://api.github.com/users/${account.username}`)
                .then(response => response.json())
        );

        const [reposResults, usersResults] = await Promise.all([
            Promise.all(accountPromises),
            Promise.all(userPromises)
        ]);

        allProjects = reposResults.flat();
        
        let totalReposCount = 0;
        let totalStarsCount = 0;
        let totalForksCount = 0;
        let totalFollowersCount = 0;

        usersResults.forEach(user => {
            totalReposCount += user.public_repos || 0;
            totalFollowersCount += user.followers || 0;
        });

        allProjects.forEach(repo => {
            totalStarsCount += repo.stargazers_count;
            totalForksCount += repo.forks_count;
        });

        if (totalRepos) totalRepos.textContent = totalReposCount;
        if (totalStars) totalStars.textContent = totalStarsCount;
        if (totalForks) totalForks.textContent = totalForksCount;
        if (totalFollowers) totalFollowers.textContent = totalFollowersCount;

        displayProjects(allProjects);
        initAccountTabs();

    } catch (error) {
        console.error('Error loading GitHub projects:', error);
        projectsGrid.innerHTML = `
            <div class="error-loading">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Gagal memuat project dari GitHub. Silakan refresh halaman.</p>
            </div>
        `;
    }
}

function displayProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = `
            <div class="no-projects">
                <i class="fas fa-folder-open"></i>
                <p>Tidak ada project yang ditemukan</p>
            </div>
        `;
        return;
    }

    projectsGrid.innerHTML = projects.map(repo => createProjectCard(repo)).join('');
}

function createProjectCard(repo) {
    const languageColors = {
        'JavaScript': '#f1e05a',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Python': '#3572A5',
        'Java': '#b07219',
        'PHP': '#4F5D95',
        'TypeScript': '#2b7489',
        'Vue': '#41b883',
        'React': '#61dafb'
    };
    
    const langColor = languageColors[repo.language] || '#6c757d';
    
    return `
        <div class="project-card" data-account="${repo.account}">
            <div class="project-header">
                <div class="project-title">
                    <i class="fab fa-github"></i>
                    <h3>${repo.name}</h3>
                </div>
                <p class="project-description">${repo.description || 'No description available'}</p>
                <div class="project-meta">
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                    <span><i class="fas fa-eye"></i> ${repo.watchers_count}</span>
                </div>
            </div>
            <div class="project-footer">
                <div class="project-language">
                    <span class="language-color" style="background: ${langColor}"></span>
                    <span>${repo.language || 'Text'}</span>
                </div>
                <a href="${repo.html_url}" target="_blank" class="project-link">
                    View Code <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
}

function initAccountTabs() {
    const tabs = document.querySelectorAll('.account-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const account = this.getAttribute('data-account');
            
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = account;
            filterProjects(account);
        });
    });
}

function filterProjects(account) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        if (account === 'all' || project.getAttribute('data-account') === account) {
            project.style.display = 'block';
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            }, 50);
        } else {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            setTimeout(() => {
                project.style.display = 'none';
            }, 300);
        }
    });
}

// ===== PAGE LOAD COMPLETE =====
window.addEventListener('load', function() {
    console.log('🎉 Portfolio Dipzkyy fully loaded!');
    
    // Final check untuk coding sphere
    const codingSphere = document.querySelector('.coding-sphere');
    if (codingSphere) {
        codingSphere.style.opacity = '1';
        codingSphere.style.visibility = 'visible';
        console.log('🔍 Final check: Coding sphere is visible');
    }
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', e.error);
});

// ===== DEBUG FUNCTION =====
function debugCodingSphere() {
    const codingSphere = document.querySelector('.coding-sphere');
    const techIcons = document.querySelectorAll('.tech-icon');
    const orbits = document.querySelectorAll('.orbit');
    
    console.log('=== CODING SPHERE DEBUG ===');
    console.log('Coding Sphere:', codingSphere);
    console.log('Tech Icons:', techIcons.length);
    console.log('Orbits:', orbits.length);
    
    if (codingSphere) {
        const styles = window.getComputedStyle(codingSphere);
        console.log('Coding Sphere Styles:');
        console.log('- opacity:', styles.opacity);
        console.log('- visibility:', styles.visibility);
        console.log('- display:', styles.display);
        console.log('- z-index:', styles.zIndex);
    }
}

function debugTechIcons() {
    const techIcons = document.querySelectorAll('.tech-icon');
    console.log('=== TECH ICONS DEBUG ===');
    console.log('Total tech icons:', techIcons.length);
    
    techIcons.forEach((icon, index) => {
        const styles = window.getComputedStyle(icon);
        console.log(`Icon ${index + 1} (${icon.className}):`);
        console.log('- opacity:', styles.opacity);
        console.log('- visibility:', styles.visibility);
        console.log('- display:', styles.display);
        console.log('- transform:', styles.transform);
        console.log('- position:', styles.position);
    });
}

// Panggil debug function setelah loading
setTimeout(() => {
    debugTechIcons();
}, 3000);
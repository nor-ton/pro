// Norton Support Clone - Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuOverlay.classList.add('active');
            setTimeout(() => {
                mobileMenu.classList.add('active');
            }, 10);
        });
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            setTimeout(() => {
                mobileMenuOverlay.classList.remove('active');
            }, 300);
        });
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                mobileMenu.classList.remove('active');
                setTimeout(() => {
                    mobileMenuOverlay.classList.remove('active');
                }, 300);
            }
        });
    }
    
    // Mobile nav link clicks
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all links
            mobileNavLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close menu
            mobileMenu.classList.remove('active');
            setTimeout(() => {
                mobileMenuOverlay.classList.remove('active');
            }, 300);
            
            handleNavClick(this.textContent.trim());
        });
    });

    // Call button interactions
    const callButtons = document.querySelectorAll('.call-btn, .call-link-btn, .fixed-call-btn, .mobile-call-link, .call-now-btn');
    callButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Let the browser handle the tel: link naturally
            console.log('Call button clicked:', this.textContent.trim());
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Fixed call button visibility handling for all devices
    const fixedCallBtn = document.querySelector('.fixed-call-btn');
    if (fixedCallBtn) {
        // Show fixed call button on all devices
        fixedCallBtn.style.display = 'flex';
        
        // Add scroll-based animation
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                fixedCallBtn.classList.add('bounce');
                setTimeout(() => {
                    fixedCallBtn.classList.remove('bounce');
                }, 1000);
            }
        });
    }

    // Footer phone support link
    const phoneSupport = document.querySelector('.phone-support a');
    if (phoneSupport) {
        phoneSupport.addEventListener('click', function(e) {
            console.log('Footer phone support clicked');
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }

    // Search functionality with popup
    const searchInput = document.querySelector('.search-box input');
    const searchIcon = document.querySelector('.search-box i');
    const searchPopup = document.getElementById('searchPopup');
    const closeSearchPopup = document.getElementById('closeSearchPopup');
    const showSearchResults = document.getElementById('showSearchResults');
    
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.3)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
            this.parentElement.style.boxShadow = 'none';
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearchInput(this.value);
            }
        });
    }
    
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const query = searchInput.value;
            handleSearchInput(query);
        });
    }

    // Search popup handlers
    if (closeSearchPopup) {
        closeSearchPopup.addEventListener('click', function() {
            searchPopup.classList.remove('active');
        });
    }

    if (searchPopup) {
        searchPopup.addEventListener('click', function(e) {
            if (e.target === searchPopup) {
                searchPopup.classList.remove('active');
            }
        });
    }

    if (showSearchResults) {
        showSearchResults.addEventListener('click', function() {
            const query = searchInput.value;
            searchPopup.classList.remove('active');
            performSearch(query);
        });
    }

    // Handle search input - show popup for any input
    function handleSearchInput(query) {
        if (!query.trim()) {
            alert('Please enter a search term');
            return;
        }
        
        // Show contact popup for any search query
        searchPopup.classList.add('active');
        console.log('Search query:', query, '- Showing contact popup');
    }
    
    // Help card interactions
    const helpCards = document.querySelectorAll('.help-card');
    helpCards.forEach(card => {
        card.addEventListener('click', function() {
            const cardTitle = this.querySelector('h3').textContent;
            handleHelpCardClick(cardTitle);
        });
    });
    
    // Product card interactions
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productTitle = this.querySelector('h3').textContent;
            handleProductCardClick(productTitle);
        });
    });
    
    // Quick link buttons
    const linkButtons = document.querySelectorAll('.link-btn');
    linkButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleQuickLinkClick(this.textContent);
        });
    });
    
    // Upgrade button
    const upgradeBtn = document.querySelector('.upgrade-btn');
    if (upgradeBtn) {
        upgradeBtn.addEventListener('click', function() {
            handleUpgradeClick();
        });
    }
    
    // Read more button
    const readMoreBtn = document.querySelector('.read-more-btn');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', function() {
            handleReadMoreClick();
        });
    }
    

    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            handleNavClick(this.textContent);
        });
    });
    
    // Footer links
    const footerLinks = document.querySelectorAll('.footer-column a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            handleFooterLinkClick(this.textContent);
        });
    });
    
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    

    
    // Add loading animation to buttons
    function addLoadingAnimation(button) {
        const originalText = button.textContent;
        button.textContent = 'Loading...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 1500);
    }
    
    // Search function
    function performSearch(query) {
        if (!query.trim()) {
            alert('Please enter a search term');
            return;
        }
        
        console.log('Searching for:', query);
        
        // Simulate search functionality
        const searchResults = [
            'How to download Norton Antivirus',
            'Norton subscription renewal guide',
            'Troubleshooting Norton installation issues',
            'Norton Family parental controls setup',
            'How to contact Norton support'
        ];
        
        const matchingResults = searchResults.filter(result => 
            result.toLowerCase().includes(query.toLowerCase())
        );
        
        if (matchingResults.length > 0) {
            alert(`Found ${matchingResults.length} results for "${query}":\n\n${matchingResults.join('\n')}`);
        } else {
            alert(`No results found for "${query}". Please try different keywords.`);
        }
    }
    
    // Help card click handler
    function handleHelpCardClick(cardTitle) {
        console.log('Help card clicked:', cardTitle);
        
        const helpMessages = {
            'Download & Install': 'Redirecting to Norton download and installation guide...',
            'Buy & Renew': 'Redirecting to Norton purchase and renewal options...',
            'Account Help': 'Redirecting to Norton account management...'
        };
        
        const message = helpMessages[cardTitle] || `Redirecting to ${cardTitle} section...`;
        alert(message);
    }
    
    // Product card click handler
    function handleProductCardClick(productTitle) {
        console.log('Product card clicked:', productTitle);
        
        const productMessages = {
            'Device protection': 'Learn more about Norton device protection features...',
            'Norton Password Manager': 'Discover Norton Password Manager capabilities...',
            'Norton Online Backup': 'Explore Norton Online Backup solutions...',
            'Norton VPN Standard': 'Find out about Norton VPN Standard features...',
            'Norton Family': 'Get information about Norton Family parental controls...',
            'Norton Small Business': 'Learn about Norton Small Business security solutions...'
        };
        
        const message = productMessages[productTitle] || `Learn more about ${productTitle}...`;
        alert(message);
    }
    
    // Quick link click handler
    function handleQuickLinkClick(linkText) {
        console.log('Quick link clicked:', linkText);
        
        const linkMessages = {
            'Download': 'Redirecting to Norton download page...',
            'Manage my account': 'Redirecting to Norton account management...',
            'Buy & renew': 'Redirecting to Norton purchase options...',
            'Contact us': 'Redirecting to Norton contact page...',
            'Community': 'Redirecting to Norton community forum...',
            'Support scams': 'Redirecting to Norton support scam information...',
            'Norton rescue tools': 'Redirecting to Norton rescue tools...',
            'Think you have virus?': 'Redirecting to virus removal guide...',
            'Problem launching on Windows': 'Redirecting to Windows troubleshooting guide...'
        };
        
        const message = linkMessages[linkText] || `Redirecting to ${linkText}...`;
        alert(message);
    }
    
    // Other click handlers
    function handleUpgradeClick() {
        alert('Redirecting to Norton upgrade page...');
    }
    
    function handleReadMoreClick() {
        alert('Redirecting to online scams information page...');
    }
    

    
    function handleNavClick(navText) {
        console.log('Navigation clicked:', navText);
        alert(`Redirecting to ${navText} section...`);
    }
    
    function handleFooterLinkClick(linkText) {
        console.log('Footer link clicked:', linkText);
        alert(`Redirecting to ${linkText} page...`);
    }
    
    // Add hover effects for better interactivity
    const interactiveElements = document.querySelectorAll('.help-card, .product-card, .link-btn, .upgrade-btn, .read-more-btn');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.cursor = 'default';
        });
    });
    
    // Add pulse animation to upgrade button
    const upgradeButton = document.querySelector('.upgrade-btn');
    if (upgradeButton) {
        setInterval(() => {
            upgradeButton.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                upgradeButton.style.animation = '';
            }, 500);
        }, 5000);
    }
    
    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.main-help, .norton-products, .did-you-know');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    console.log('Norton Support Clone initialized successfully!');
});

// Add CSS animation for pulse effect
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);